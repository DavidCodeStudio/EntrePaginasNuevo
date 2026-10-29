/* Actualizar este plan de forma editorial: no avanza según la fecha del navegador. */
'use strict';
const planMensual = Object.freeze({
  semana: 2,
  ejemplo: true,
  etapas: [
    {titulo: 'Elegimos nuestra próxima historia.', meta: 'Tres propuestas para una nueva lectura compartida.', pregunta: '¿Qué historia te apetece descubrir este mes?', spoilers: 'Votación pendiente de apertura.', ayuda: 'Consulta la biblioteca mientras preparamos las propuestas y la votación.', accion: 'EXPLORAR PROPUESTAS', destino: 'index.html#lecturas'},
    {titulo: 'Leemos y abrimos la conversación.', meta: 'Meta orientativa de ejemplo: primera parte.', pregunta: '¿Qué hace que una amistad se convierta en una buena colaboración?', spoilers: 'Sin spoilers más allá de la primera parte propuesta.', ayuda: 'El debate se comparte en WhatsApp. Consulta los espacios y el estado del acceso a la comunidad.', accion: 'VER COMUNIDAD EN WHATSAPP', destino: 'index.html#comunidad'},
    {titulo: 'Seguimos leyendo, sumamos miradas.', meta: 'Meta orientativa de ejemplo: siguiente parte.', pregunta: '¿Cómo cambia una amistad cuando creamos algo juntos?', spoilers: 'El tramo permitido para spoilers se confirmará junto con la meta.', ayuda: 'Comparte tus preguntas en el espacio de debate cuando el acceso esté disponible.', accion: 'VER EL ESPACIO DE DEBATE', destino: 'index.html#comunidad'},
    {titulo: 'Nos encontramos para compartir la lectura.', meta: 'Cierre de la lectura a tu ritmo.', pregunta: '¿Con qué idea te quedas después de esta historia?', spoilers: 'El encuentro final puede incluir spoilers de todo el libro.', ayuda: 'La videollamada será en Discord. Fecha, hora y duración pendientes de confirmar; necesitarás una cuenta.', accion: 'CONSULTAR EL ENCUENTRO', destino: 'index.html#proximos-eventos'}
  ]
});
const etapaMensual = planMensual.etapas[planMensual.semana - 1];
document.querySelectorAll('[data-plan-estado]').forEach(e => e.textContent = `${planMensual.ejemplo ? 'PLAN DE EJEMPLO' : 'AHORA EN EL CLUB'} · SEMANA ${planMensual.semana}`);
for (const campo of ['titulo', 'meta', 'pregunta', 'spoilers', 'ayuda']) {
  document.querySelectorAll(`[data-plan-${campo}]`).forEach(e => e.textContent = etapaMensual[campo]);
}
document.querySelectorAll('[data-plan-accion]').forEach(e => {
  e.href = etapaMensual.destino;e.replaceChildren(document.createTextNode(etapaMensual.accion + ' '));
  const flecha = document.createElement('span');flecha.setAttribute('aria-hidden', 'true');flecha.textContent = '→';e.append(flecha);
});
document.querySelectorAll('[data-semana]').forEach(e => {
  const actual = Number(e.dataset.semana) === planMensual.semana;
  e.classList.toggle('semana-destacada', actual);
  if (actual) e.setAttribute('aria-current', 'step');else e.removeAttribute('aria-current');
});
