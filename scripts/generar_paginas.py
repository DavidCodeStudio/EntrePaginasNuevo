#!/usr/bin/env python3
"""Genera HTML estático desde plantillas y componentes comunes, sin dependencias."""
import argparse
import html
import json
from pathlib import Path
import re
import sys
import textwrap

ROOT = Path(__file__).resolve().parents[1]
TEMPLATES = ROOT / "templates"
TOKEN = re.compile(r"^([ \t]*)\{\{([A-Z_]+)\}\}$", re.MULTILINE)


def render(template, values):
    def block(match):
        return textwrap.indent(values[match[2]].rstrip(), match[1])

    result = TOKEN.sub(block, template)
    for key, value in values.items():
        result = result.replace("{{" + key + "}}", value)
    if re.search(r"\{\{[A-Z_]+\}\}", result):
        raise ValueError("La plantilla contiene campos sin resolver")
    return result


def shared(secondary=False):
    header = (TEMPLATES / "partials/cabecera.html").read_text(encoding="utf-8")
    footer = (TEMPLATES / "partials/footer.html").read_text(encoding="utf-8")
    if secondary:
        header = header.replace(' class="activo"', "").replace(
            ' aria-current="location"', ""
        )
        header = re.sub(r'href="#([^\"]+)"', r'href="index.html#\1"', header)
        footer = re.sub(r'href="#([^\"]+)"', r'href="index.html#\1"', footer)
        footer = footer.replace(
            'class="volver-arriba" href="index.html#inicio"',
            'class="volver-arriba" href="#inicio"',
        )
    return {
        "CABECERA": header,
        "FOOTER": footer,
        "DIALOGOS_COMUNES": (TEMPLATES / "partials/dialogos-comunes.html").read_text(encoding="utf-8"),
    }


def pages():
    yield "index.html", render((TEMPLATES / "index.html").read_text(encoding="utf-8"), shared())
    template = (TEMPLATES / "proximamente.html").read_text(encoding="utf-8")
    names = {"index.html"}
    for page in json.loads((TEMPLATES / "paginas.json").read_text(encoding="utf-8")):
        name = page["archivo"]
        if Path(name).name != name or not name.endswith(".html") or name in names:
            raise ValueError("Nombre de página no válido o repetido: " + name)
        names.add(name)
        values = shared(secondary=True)
        values.update(
            {
                key.upper(): html.escape(page[key], quote=True)
                for key in ("titulo", "etiqueta", "descripcion", "mensaje")
            }
        )
        yield name, render(template, values)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Comprueba sin escribir")
    args = parser.parse_args()
    outdated = []
    for name, content in pages():
        path = ROOT / name
        if args.check:
            if not path.exists() or path.read_text(encoding="utf-8") != content:
                outdated.append(name)
        else:
            path.write_text(content, encoding="utf-8")
    if outdated:
        print("Regenerar: " + ", ".join(outdated), file=sys.stderr)
        return 1
    print("HTML generado y actualizado" if not args.check else "Las cuatro páginas están actualizadas")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
