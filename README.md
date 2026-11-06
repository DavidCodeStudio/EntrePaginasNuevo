# Capítulo Abierto

Web estática responsive en HTML, CSS y JavaScript. Los HTML ya están generados y no requieren dependencias ni compilación para servirlos. Desde esta carpeta:

```sh
python3 -m http.server 8000
```

## Estado de las páginas

- `index.html` conserva la portada completa: club, biblioteca, comunidad, inclusión, eventos y newsletter.
- `lectura-del-mes.html`, `libro-del-mes.html` y `encuentro.html` muestran una página provisional «Próximamente», con la cabecera y el footer de la portada y un enlace para volver al inicio.
- La navegación de las páginas provisionales enlaza a las secciones de `index.html`. Su registro y marketplace mantienen los diálogos demostrativos de la cabecera.
- Los diseños y recorridos anteriores de las páginas secundarias se conservan en el historial Git, en el commit `7021a71` anterior a esta simplificación.

## Organización del código

- `css/styles.css`: variables, tipografía, etiquetas base, componentes generales, cabecera, footer, accesibilidad y diálogos compartidos de registro y marketplace.
- `css/index.css`: diseños exclusivos de la portada. No se carga en las páginas provisionales.
- `css/proximamente.css`: contenido provisional responsive; se comparte entre las tres páginas secundarias. Los diálogos de cabecera utilizan los estilos comunes de `styles.css`.
- `js/comun.js`: menú, registro demostrativo y marketplace de las cuatro páginas.
- `js/script.js`: filtros, fichas, newsletter, navegación de secciones, inclusión y comunidad de la portada.
- `templates/partials/`: única fuente de cabecera, footer y diálogos comunes.
- `templates/index.html`: contenido exclusivo de la portada.
- `templates/proximamente.html` y `templates/paginas.json`: plantilla y textos de las tres páginas provisionales.
- `scripts/generar_paginas.py`: generador de HTML con Python 3 y su biblioteca estándar.
- `assets/`: imágenes, fuentes e iconos locales; `licenses/`: sus licencias.

Se retiraron las tres hojas específicas y el JavaScript del encuentro, que ya no se utilizan. Cada HTML carga `styles.css` antes de su hoja de diseño. Los CSS conservan índices y comentarios. En cada hoja, los estilos base aparecen primero y todas las media queries se agrupan al final, con subtítulos por componente y respetando su orden de cascada. `.prettierrc.json` define indentación de dos espacios.

## Editar las páginas sin repetir componentes

Editar las fuentes de `templates/`, no los cuatro HTML de la raíz. Para actualizar cabecera, footer o diálogos en todas las páginas, modificar el parcial correspondiente. Los textos de las páginas provisionales están en `templates/paginas.json`.

Después de editar:

```sh
python3 scripts/generar_paginas.py
python3 scripts/generar_paginas.py --check
```

El segundo comando no escribe: falla si algún HTML no coincide con sus fuentes. El generador mantiene los enlaces a la portada y conserva los enlaces locales de la propia página. No utiliza peticiones JavaScript para insertar contenido: el navegador recibe HTML completo y estático.

CSS, JavaScript y plantillas se formatean con Prettier. Los cuatro HTML generados se excluyen en `.prettierignore` para conservar una salida reproducible; su actualización se verifica con `--check`. La indentación del HTML generado procede de las plantillas.

## Interacciones y publicación

La biblioteca de la portada contiene cinco lecturas. Los filtros muestran dos ensayos, tres ficciones y un estado vacío para ciencia ficción. Las fichas y los diálogos se cierran con Escape; el menú móvil mantiene su estado accesible.

El registro y la newsletter son demostrativos: no envían correos ni guardan datos. El marketplace muestra un aviso de próxima apertura. Las páginas provisionales no muestran ni ejecutan el plan de lectura, la votación ni la inscripción al encuentro anteriores.

Se han retirado el diálogo de Discord sin botón de apertura, su código asociado y el plan mensual que no tenía elementos destinatarios. También se eliminaron campos no utilizados de los datos de libros y 18 imágenes sin referencias (1.999.670 bytes, aproximadamente 2 MB); las imágenes que se utilizan en las fichas dinámicas se conservan. El código y los recursos retirados siguen recuperables en el historial Git.

La portada conserva sus textos, enlaces y recursos en uso. Antes de habilitar servicios reales, confirmar fechas, contacto, redes sociales e información legal. Las invitaciones privadas y las credenciales deben mantenerse en el servidor, fuera del frontend.

## Comprobación local

Ejecutar `python3 scripts/generar_paginas.py --check` y comprobar las cuatro páginas en móvil y escritorio, imágenes y fuentes locales, ausencia de desbordamiento horizontal y errores JavaScript. En las páginas provisionales, verificar el título, el regreso al inicio, los enlaces a secciones de la portada, el menú móvil, el registro demostrativo y el marketplace. En la portada, comprobar filtros, fichas y formularios demostrativos.

No se ha configurado un despliegue externo como parte de estos cambios.
