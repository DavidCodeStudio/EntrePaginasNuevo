# Capítulo Abierto

Web estática responsive en HTML, CSS y JavaScript, sin dependencias externas ni compilación. Desde esta carpeta:

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
- `js/script.js`: interacciones de la portada.
- `js/plan-mensual.js`: estado editorial de la lectura que sigue utilizándose en la portada. No se carga en las páginas provisionales.
- `js/proximamente.js`: menú y diálogos de las páginas provisionales.
- `assets/`: imágenes, fuentes e iconos locales; `licenses/`: sus licencias.

Se retiraron las tres hojas específicas y el JavaScript del encuentro, que ya no se utilizan. Cada HTML carga `styles.css` antes de su hoja de diseño. Los CSS conservan índices y comentarios. `.prettierrc.json` define indentación de dos espacios.

## Interacciones y publicación

La biblioteca de la portada contiene cinco lecturas. Los filtros muestran dos ensayos, tres ficciones y un estado vacío para ciencia ficción. Las fichas y los diálogos se cierran con Escape; el menú móvil mantiene su estado accesible.

El registro y la newsletter son demostrativos: no envían correos ni guardan datos. El marketplace muestra un aviso de próxima apertura. Las páginas provisionales no muestran ni ejecutan el plan de lectura, la votación ni la inscripción al encuentro anteriores.

La portada conserva sus textos, enlaces y recursos actuales. Antes de habilitar servicios reales, confirmar fechas, contacto, redes sociales e información legal. Las invitaciones privadas y las credenciales deben mantenerse en el servidor, fuera del frontend.

## Comprobación local

Comprobar las cuatro páginas en móvil y escritorio, imágenes y fuentes locales, ausencia de desbordamiento horizontal y errores JavaScript. En las páginas provisionales, verificar el título, el regreso al inicio, los enlaces a secciones de la portada, el menú móvil, el registro demostrativo y el marketplace. En la portada, comprobar filtros, fichas y formularios demostrativos.

No se ha configurado un despliegue externo como parte de estos cambios.
