# Entre Páginas

Web estática responsive. Abre index.html directamente o ejecuta desde esta carpeta:

```sh
python3 -m http.server 8000
```

No requiere instalación ni compilación. HTML, CSS y JavaScript sin dependencias externas.

## Recursos
Fotografías, collages y cubiertas facilitados por el usuario en Archivo.zip. Los collages se muestran completos, sin duplicar adornos. La ficha del mes corresponde a Mañana, y mañana, y mañana, de Gabrielle Zevin. La cubierta azul sin título confirmado queda fuera de la biblioteca. La selección incluye cuatro libros identificados y el libro del mes.

## Antes de publicar
Los formularios son demostraciones: no envían ni almacenan datos. Conectar un servicio real antes de abrir inscripciones o la newsletter. Confirmar fechas, actividades, contacto, perfiles sociales e información legal; los eventos y enlaces sociales son ejemplos.

## Validación
Chromium: anchos 320, 390, 768 y 1440 px sin desbordamiento horizontal, todos los recursos cargados y sin errores JavaScript. Comprobados menú móvil y Escape, filtrado de ensayos (2 resultados), diálogo, inscripción demostrativa y newsletter demostrativa.

## Marketplace
El botón MARKETPLACE del header está separado de la inscripción al club. Por ahora abre un aviso de próxima apertura, sin recoger datos ni crear cuentas. Cuando se confirme la URL HTTPS de registro/Mi cuenta de WordPress, sustituir el botón por un enlace a esa URL y retirar el aviso provisional. El registro, el inicio de sesión y la gestión de compras deberán resolverse en el ecommerce de WordPress.

## Iconos sociales
Instagram, X y YouTube: SVG oficiales de Bootstrap Icons 1.13.1, guardados localmente en assets/icons/ y mostrados como imágenes de color blanco. Licencia MIT en licenses/bootstrap-icons-LICENSE.txt. Los enlaces llevan a las webs oficiales de Instagram, X y YouTube.

## Biblioteca de lecturas
Cinco lecturas identificadas, una recomendación destacada y filtros siempre visibles. Cada tarjeta abre una ficha con sinopsis, motivo de lectura, tres temas de conversación y una pregunta para el club. Ciencia ficción muestra un estado vacío hasta contar con títulos confirmados; permite volver a Todas. Sin enlaces de compra mientras el marketplace esté pendiente.

Verificación de la biblioteca: 320, 390, 768 y 1440 px; filtro de ensayo (2), ficción (3), ciencia ficción (0) y restablecer (5); cinco fichas, cierre con Escape y devolución del foco; acceso a Comunidad. Comprobados también marketplace, menú móvil y formularios de demostración.

## Cómo funciona
Guía de bienvenida con tres pasos, iconos SVG, enlaces a Lecturas y Eventos, y una acción principal para explorar libros. Las tarjetas se conectan horizontalmente en escritorio y verticalmente en móvil. Tipografía Barlow Condensed 700 alojada localmente; licencia SIL OFL incluida en licenses/barlow-condensed-LICENSE.txt.

## Comunidad
Diseño editorial aprobado: collage original completo, tres formas de participar, pregunta destacada en rosa y botón de participación. El botón utiliza el diálogo demostrativo del club, sin envío ni almacenamiento de datos. Composición apilada en móvil, iconos SVG y tipografía local.

## Inclusión
Diseño aprobado con ilustración de libro y auriculares, tres compromisos y contacto independiente. El formulario se identifica como demostrativo antes de escribir: no envía ni almacena mensajes, no solicita datos personales ni de salud y borra el texto al completar la prueba. Conectar un canal real antes de habilitar el envío. La ilustración es un recurso gráfico generado a partir de la propuesta aprobada.

## Invitación a Discord
El popup del club explica el futuro envío automático de una invitación al servidor de Discord por correo. Nombre opcional, email obligatorio y newsletter independiente. El aviso previo y el resultado indican que se trata de una demostración: no se envían correos ni se guardan datos. Permite volver para corregir el email; al cerrar borra los campos. Los botones de eventos aclaran que no reservan plaza. Para habilitar envíos reales se necesitan un backend o servicio de correo, remitente verificado y una invitación válida a Discord almacenada en el servidor. No se incluyen claves ni invitaciones privadas en el frontend. No se simula un envío o un reenvío real.

## Página de la lectura mensual
`lectura-del-mes.html` contiene el plan, accesible desde el botón «Ver el plan del mes» de la portada. `plan-mensual.js` comparte el estado de la semana y la meta entre ambas páginas. No cambia por la fecha del navegador: editar `semana` (1–4) y los textos de `etapas` cuando el club confirme el calendario. La acción principal depende de la etapa. Se publica como plan de ejemplo; confirmar también título, metas, avisos, fecha, hora, zona horaria y duración antes de anunciar un calendario real. Actualizar los textos de ejemplo y los avisos al activar el plan.

La página no registra votos ni conecta invitaciones externas. Sus enlaces llevan a la biblioteca, a Comunidad y a Próximos eventos, donde se informa del estado de los accesos. Metas por partes o capítulos, avisos de spoilers y participación flexible. La secuencia pasa a vertical en móvil.

Verificado: navegación desde la portada y de vuelta, estado compartido, cuatro semanas, enlaces a comunidad y eventos; anchos 320, 390, 768 y 1440 px sin desbordamientos ni errores JavaScript.
