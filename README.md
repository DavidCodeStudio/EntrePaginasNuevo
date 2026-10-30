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

## Próximos eventos y onepage del encuentro
La sección `#proximos-eventos` presenta tres lecturas y enlaza a `encuentro.html`: votación, resultado pendiente e inscripción. `eventos.css` aísla el diseño de la sección 03, que permanece sin cambios. Se utilizan cubiertas locales.

El recorrido es una **demostración interactiva**, indicado antes de los formularios. La selección de libro funciona con ratón y teclado, sin opción preseleccionada. El voto de prueba no se almacena. El formulario pide datos de prueba, los borra al enviar y muestra una confirmación de demostración con 12 asistentes ilustrativos. No hay peticiones, almacenamiento local, envío de email, confirmación de plaza ni conteo compartido. Repetir la prueba no incrementa ese ejemplo.

Para habilitar actividad real hace falta un servicio persistente con identificación de votantes, cierre de votación y desempate, resultado calculado en servidor y gestión privada de asistentes. El servidor debe normalizar correos, impedir duplicados por encuentro, registrar la inscripción antes de incrementar el total, ofrecer solo el contador público y gestionar errores y confirmaciones. Confirmar fecha, horario, formato y publicar la información de privacidad antes de abrir inscripciones. No activar mensajes de éxito real ni sustituir el contador ilustrativo sin conectar y validar ese servicio.

## Actualización de imágenes desde Archivo.zip

Se han sustituido los seis collages de portada, club, comunidad, inclusión, eventos y newsletter por las ilustraciones extraídas de las capturas `download-1`, `download-2`, `download-4`, `download-5`, `download-6` y `download-7` del ZIP facilitado. Los recortes excluyen la navegación, los encabezados y los formularios de las capturas. Se conserva el diseño HTML/CSS, las interacciones y las cubiertas existentes. Los textos alternativos y las dimensiones intrínsecas se ajustan a los recursos nuevos.

## Adaptación de las propuestas del ZIP en HTML, CSS y JavaScript

Las composiciones de `download-1` a `download-8` se trasladan a elementos HTML reales y a `diseno.css`, cargado después de los estilos base: cabecera clara y registro, portada, club de tres ventajas con acceso al marketplace, biblioteca de cinco columnas en escritorio, comunidad con imagen a la izquierda, inclusión rosa con compromisos en columna, eventos, newsletter y pie editorial. La sección adicional «Cómo funciona» conserva su contenido y sus enlaces. En móvil las columnas se apilan; los filtros y las fichas siguen disponibles.

`libro-del-mes.html` incorpora la ficha de la referencia `download-11`, con sinopsis, temas y preguntas sin spoilers. Se enlaza desde Libro del mes y el plan mensual. `lectura-del-mes.html` adapta `download-10`: panel azul, cuatro etapas conectadas, cuidados de la conversación y encuentro final. `encuentro.html` adapta `download-9`; JavaScript actualiza el paso visible de su navegación. Se conserva la marca Entre Páginas del proyecto. Las capturas contienen cubiertas ilustrativas; se mantienen los títulos, autores y categorías contrastados del contenido existente.

Validación con Chromium: cuatro páginas en 320, 390, 768 y 1440 px, sin desbordamiento horizontal, imágenes rotas ni errores JavaScript. Probados filtros (2 ensayos, 3 ficciones y estado vacío de ciencia ficción), ficha y Escape, diálogos de inscripción/marketplace/WhatsApp/inclusión, newsletter de prueba, menú móvil y Escape, voto e inscripción demostrativos. Se mantienen los avisos de que no hay envíos, almacenamiento ni reservas reales. No se ha configurado un despliegue externo.
