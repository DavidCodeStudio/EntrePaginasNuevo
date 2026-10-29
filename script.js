/* ==========================================================
   ENTRE PÁGINAS · INTERACCIONES
   01 Menú | 02 Filtros | 03 Inscripción | 04 Boletín
   ========================================================== */
'use strict';

// 01 · Menú móvil accesible
const botonMenu = document.querySelector('.boton-menu');
const navegacion = document.getElementById('navegacion');
if (botonMenu && navegacion) {
  botonMenu.addEventListener('click', () => {
    const abierto = navegacion.classList.toggle('abierta');
    botonMenu.setAttribute('aria-expanded', String(abierto));
    botonMenu.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    botonMenu.textContent = abierto ? '×' : '☰';
  });
  navegacion.querySelectorAll('a').forEach(enlace => enlace.addEventListener('click', () => {
    navegacion.classList.remove('abierta');
    botonMenu.setAttribute('aria-expanded', 'false');
    botonMenu.setAttribute('aria-label', 'Abrir menú');
    botonMenu.textContent = '☰';
  }));
}

// 02 · Filtros de la biblioteca
const botonesFiltro = document.querySelectorAll('[data-filtro]');
const tarjetasLibro = document.querySelectorAll('.tarjeta-libro');
const avisoFiltros = document.querySelector('.aviso-filtros');
botonesFiltro.forEach(boton => boton.addEventListener('click', () => {
  const genero = boton.dataset.filtro;
  let visibles = 0;
  botonesFiltro.forEach(elemento => {
    const activo = elemento === boton;
    elemento.classList.toggle('activo', activo);
    elemento.setAttribute('aria-pressed', String(activo));
  });
  tarjetasLibro.forEach(tarjeta => {
    const mostrar = genero === 'todos' || tarjeta.dataset.genero === genero;
    tarjeta.hidden = !mostrar;
    if (mostrar) visibles++;
  });
  if (avisoFiltros) avisoFiltros.textContent = `${visibles} ${visibles === 1 ? 'lectura disponible' : 'lecturas disponibles'}.`;
  const vacia = document.querySelector('.biblioteca-vacia');
  if (vacia) vacia.hidden = visibles !== 0;
}));

// 03 · Acceso a Discord: interfaz de prueba hasta conectar correo e invitación.
const dialogoInscripcion = document.getElementById('dialogo-inscripcion');
const formularioInscripcion = document.getElementById('formulario-inscripcion');
const confirmacionDiscord = document.getElementById('discord-confirmacion');
const mensajeInscripcion = document.querySelector('.mensaje-inscripcion');
document.querySelectorAll('[data-abrir-inscripcion]').forEach(boton => {
  boton.addEventListener('click', () => {
    formularioInscripcion.hidden = false;
    confirmacionDiscord.hidden = true;
    mensajeInscripcion.textContent = '';
    const contexto = dialogoInscripcion.querySelector('.discord-contexto');
    const actividad = boton.closest('.evento-datos')?.querySelector('h4')?.textContent;
    contexto.hidden = !actividad;
    contexto.textContent = actividad ? `Te interesa «${actividad}». Esta invitación dará acceso a la comunidad; no es una reserva de plaza para el evento.` : '';
    dialogoInscripcion.showModal();
  });
});
dialogoInscripcion?.querySelector('.cerrar-dialogo')?.addEventListener('click', () => dialogoInscripcion.close());
dialogoInscripcion?.addEventListener('click', evento => {
  if (evento.target === dialogoInscripcion) dialogoInscripcion.close();
});
dialogoInscripcion?.addEventListener('close', () => {
  formularioInscripcion.reset();
  mensajeInscripcion.textContent = '';
});
formularioInscripcion?.addEventListener('submit', evento => {
  evento.preventDefault();
  if (!formularioInscripcion.reportValidity()) return;
  formularioInscripcion.hidden = true;
  confirmacionDiscord.hidden = false;
  mensajeInscripcion.textContent = 'Prueba completada. Esta es una demostración: no hemos enviado ninguna invitación ni guardado tus datos.';
  const volver = confirmacionDiscord.querySelector('[data-corregir-correo]');
  volver.focus();
});
document.querySelector('[data-corregir-correo]')?.addEventListener('click', () => {
  confirmacionDiscord.hidden = true;
  formularioInscripcion.hidden = false;
  mensajeInscripcion.textContent = '';
  document.getElementById('correo-inscripcion').focus();
});

// 04 · Newsletter demostrativa: sin envío ni almacenamiento
const formularioBoletin = document.getElementById('formulario-boletin');
formularioBoletin?.addEventListener('submit', evento => {
  evento.preventDefault();
  const mensaje = formularioBoletin.querySelector('.mensaje-boletin');
  if (mensaje) mensaje.textContent = '¡Gracias! La newsletter es demostrativa; no se ha enviado ni guardado tu correo.';
});

// 06 · Cerrar menú móvil con Escape o al ampliar la ventana.
if (botonMenu && navegacion) {
  const cerrarMenu = () => {
    navegacion.classList.remove('abierta');
    botonMenu.setAttribute('aria-expanded', 'false');
    botonMenu.setAttribute('aria-label', 'Abrir menú');
    botonMenu.textContent = '☰';
  };
  document.addEventListener('keydown', evento => {
    if (evento.key === 'Escape' && navegacion.classList.contains('abierta')) {
      cerrarMenu();
      botonMenu.focus();
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1100 && navegacion.classList.contains('abierta')) cerrarMenu();
  });
}

// La navegación sigue la sección que se está leyendo.
const enlacesSeccion = [...document.querySelectorAll('.navegacion a')];
if ('IntersectionObserver' in window) {
  const observador = new IntersectionObserver(entradas => {
    const visible = entradas.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
    if (!visible) return;
    enlacesSeccion.forEach(enlace => {
      const activo = enlace.hash === `#${visible.target.id}`;
      enlace.classList.toggle('activo', activo);
      if (activo) enlace.setAttribute('aria-current', 'location');
      else enlace.removeAttribute('aria-current');
    });
  }, {rootMargin: '-15% 0px -55% 0px', threshold: 0});
  document.querySelectorAll('header[id], main section[id]').forEach(s => observador.observe(s));
}
// Acceso independiente al futuro marketplace; no utiliza el registro del club.
const dialogoMarketplace = document.getElementById('dialogo-marketplace');
document.querySelector('[data-abrir-marketplace]')?.addEventListener('click', () => dialogoMarketplace?.showModal());
dialogoMarketplace?.querySelectorAll('.cerrar-dialogo, [data-cerrar-marketplace]').forEach(boton => {
  boton.addEventListener('click', () => dialogoMarketplace.close());
});
dialogoMarketplace?.addEventListener('click', evento => {
  if (evento.target === dialogoMarketplace) dialogoMarketplace.close();
});

// Fichas editoriales de las lecturas confirmadas.
const biblioteca = {"junco": {"id": "junco", "title": "El infinito en un junco", "author": "Irene Vallejo", "genre": "ensayo", "label": "Ensayo", "image": "cubierta-lectura-3.jpg", "tag": "PARA EMPEZAR", "teaser": "Un viaje por la historia de los libros y las personas que los hicieron posibles.", "synopsis": "Un recorrido por el nacimiento de los libros en el mundo antiguo, desde los primeros soportes de escritura hasta las bibliotecas. Irene Vallejo conecta esa historia con las vidas de quienes han cuidado, compartido y defendido las palabras.", "reason": "Porque invita a pensar en todo lo que hay detrás del gesto de abrir un libro. Una puerta de entrada a conversaciones sobre memoria, cultura y acceso a la lectura.", "themes": ["Memoria y transmisión", "Bibliotecas y comunidad", "El futuro de los libros"], "question": "¿Qué libro te gustaría que siguiera leyéndose dentro de mil años?"}, "sapiens": {"id": "sapiens", "title": "Sapiens", "author": "Yuval Noah Harari", "genre": "ensayo", "label": "Ensayo", "image": "cubierta-lectura-1.jpg", "teaser": "Una mirada a las historias que nos han convertido en quienes somos.", "synopsis": "Un ensayo que recorre la historia de nuestra especie y propone una interpretación de las transformaciones cognitivas, agrícolas y científicas que han dado forma a nuestras sociedades.", "reason": "Sus grandes preguntas y sus interpretaciones ofrecen mucho que debatir. Una invitación a contrastar ideas, cuestionar certezas y mirar nuestra vida cotidiana con perspectiva.", "themes": ["Cooperación", "Relatos compartidos", "Progreso y bienestar"], "question": "¿Qué historia compartida influye más en nuestra forma de vivir?"}, "vegetariana": {"id": "vegetariana", "title": "La vegetariana", "author": "Han Kang", "genre": "ficcion", "label": "Ficción", "image": "cubierta-lectura-2.jpg", "teaser": "Una decisión íntima que pone en cuestión todo un mundo.", "synopsis": "La decisión de Yeonghye de dejar de comer carne altera sus relaciones y expone las expectativas que otras personas depositan sobre su cuerpo y su vida. Una novela intensa, narrada desde distintas perspectivas.", "reason": "Una lectura que permite conversar sobre autonomía, presión social y los límites de la mirada ajena. Conviene acercarse con sensibilidad: contiene violencia y temas de salud mental.", "themes": ["Autonomía", "Cuerpo e identidad", "Expectativas sociales"], "question": "¿Dónde termina el cuidado y empieza el control sobre otra persona?"}, "norwegian": {"id": "norwegian", "title": "Norwegian Wood", "author": "Haruki Murakami", "genre": "ficcion", "label": "Ficción", "image": "cubierta-lectura-4.jpg", "teaser": "Amistad, pérdida y los recuerdos que se quedan con nosotros.", "synopsis": "A partir de una canción, Toru Watanabe vuelve con la memoria a su juventud en Tokio y a las relaciones que marcaron su vida. Una novela sobre el amor, la pérdida y el paso hacia la edad adulta.", "reason": "Su atmósfera y sus personajes abren conversaciones sobre los vínculos y la memoria. Incluye suicidio y duelo; cada persona puede decidir si es el momento adecuado para esta lectura.", "themes": ["Memoria", "Amor y amistad", "Duelo"], "question": "¿Cómo cambia nuestra forma de contar el pasado con el paso del tiempo?"}, "manana": {"id": "manana", "title": "Mañana, y mañana, y mañana", "author": "Gabrielle Zevin", "genre": "ficcion", "label": "Ficción", "image": "libro-mes.jpg", "tag": "LIBRO DEL MES", "teaser": "Crear mundos juntos también es una forma de aprender a vivir.", "synopsis": "Sam y Sadie se reencuentran y empiezan a crear videojuegos juntos. A lo largo de los años, su colaboración reúne amistad, ambición y desacuerdos, mientras sus vidas y sus proyectos se transforman.", "reason": "No hace falta jugar a videojuegos para conectar con sus preguntas sobre amistad y creación. Da pie a compartir experiencias sobre lo que significa construir algo con otra persona.", "themes": ["Amistad", "Creatividad", "Colaboración"], "question": "¿Qué hace que una colaboración funcione más allá del talento?"}};
const fichaLectura = document.getElementById('dialogo-lectura');
document.querySelectorAll('[data-libro]').forEach(boton => boton.addEventListener('click', () => {
  const libro = biblioteca[boton.dataset.libro];
  if (!libro || !fichaLectura) return;
  const imagen = document.getElementById('lectura-imagen');
  imagen.src = `assets/${libro.image}`;
  imagen.alt = `Cubierta de ${libro.title}`;
  const campos = {'lectura-titulo': libro.title, 'lectura-genero': libro.label, 'lectura-autor': libro.author, 'lectura-sinopsis': libro.synopsis, 'lectura-motivo': libro.reason, 'lectura-pregunta': libro.question};
  Object.entries(campos).forEach(([id, texto]) => document.getElementById(id).textContent = texto);
  const temas = document.getElementById('lectura-temas');
  temas.replaceChildren(...libro.themes.map(tema => {const li = document.createElement('li');li.textContent = tema;return li;}));
  fichaLectura.showModal();
  fichaLectura.scrollTop = 0;
}));
fichaLectura?.querySelector('.cerrar-dialogo').addEventListener('click', () => fichaLectura.close());
fichaLectura?.addEventListener('click', evento => {if (evento.target === fichaLectura) fichaLectura.close();});
document.querySelector('[data-lectura-comunidad]')?.addEventListener('click', () => {
  fichaLectura.close();
  const titulo = document.getElementById('titulo-comunidad');
  titulo.setAttribute('tabindex', '-1');
  titulo.focus({preventScroll: true});
  document.getElementById('comunidad').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
});
document.querySelector('[data-restablecer-lecturas]')?.addEventListener('click', () => {
  const todas = document.querySelector('[data-filtro="todos"]');
  todas.click();todas.focus();
});

// Canal de inclusión demostrativo, separado del registro al club.
const dialogoInclusion = document.getElementById('dialogo-inclusion');
document.querySelector('[data-abrir-inclusion]')?.addEventListener('click', () => dialogoInclusion?.showModal());
dialogoInclusion?.querySelector('.cerrar-dialogo').addEventListener('click', () => dialogoInclusion.close());
dialogoInclusion?.addEventListener('click', evento => {if (evento.target === dialogoInclusion) dialogoInclusion.close();});
document.getElementById('formulario-inclusion')?.addEventListener('submit', evento => {
  evento.preventDefault();
  document.querySelector('.mensaje-inclusion').textContent = 'Prueba completada: tu mensaje no se ha enviado ni guardado.';
  evento.target.reset();
});

// Eventos online por videollamada: invitación a Discord independiente de Telegram.
const dialogoEventosDiscord = document.getElementById('dialogo-eventos-discord');
const formularioEventosDiscord = document.getElementById('formulario-eventos-discord');
const confirmacionEventosDiscord = document.getElementById('eventos-discord-confirmacion');
const resultadoEventosDiscord = document.querySelector('.eventos-discord-resultado');
document.querySelectorAll('[data-abrir-eventos-discord]').forEach(boton => boton.addEventListener('click', () => {
  formularioEventosDiscord.hidden = false;
  confirmacionEventosDiscord.hidden = true;
  resultadoEventosDiscord.textContent = '';
  const actividad = boton.closest('.evento-datos')?.querySelector('h4')?.textContent;
  const contexto = dialogoEventosDiscord.querySelector('.eventos-discord-contexto');
  contexto.hidden = !actividad;
  contexto.textContent = actividad ? `Te interesa «${actividad}». La invitación al servidor no confirma una reserva para esta actividad.` : '';
  dialogoEventosDiscord.showModal();
}));
dialogoEventosDiscord?.querySelector('.cerrar-dialogo').addEventListener('click', () => dialogoEventosDiscord.close());
dialogoEventosDiscord?.addEventListener('click', evento => {if (evento.target === dialogoEventosDiscord) dialogoEventosDiscord.close();});
dialogoEventosDiscord?.addEventListener('close', () => {
  formularioEventosDiscord.reset();resultadoEventosDiscord.textContent = '';
});
formularioEventosDiscord?.addEventListener('submit', evento => {
  evento.preventDefault();
  if (!formularioEventosDiscord.reportValidity()) return;
  formularioEventosDiscord.hidden = true;confirmacionEventosDiscord.hidden = false;
  resultadoEventosDiscord.textContent = 'Prueba completada. No hemos enviado ninguna invitación a Discord ni guardado tus datos.';
  confirmacionEventosDiscord.querySelector('[data-corregir-eventos-discord]').focus();
});
document.querySelector('[data-corregir-eventos-discord]')?.addEventListener('click', () => {
  confirmacionEventosDiscord.hidden = true;formularioEventosDiscord.hidden = false;
  resultadoEventosDiscord.textContent = '';document.getElementById('eventos-discord-correo').focus();
});

// Comunidad de WhatsApp: invitación directa pendiente de conectar.
const dialogoWhatsApp = document.getElementById('dialogo-comunidad-whatsapp');
document.querySelector('[data-abrir-whatsapp]')?.addEventListener('click', () => dialogoWhatsApp?.showModal());
dialogoWhatsApp?.querySelector('.cerrar-dialogo').addEventListener('click', () => dialogoWhatsApp.close());
dialogoWhatsApp?.addEventListener('click', evento => {if (evento.target === dialogoWhatsApp) dialogoWhatsApp.close();});
