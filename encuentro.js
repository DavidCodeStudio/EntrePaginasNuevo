
'use strict';
const titulos = {junco:'El infinito en un junco', vegetariana:'La vegetariana', manana:'Mañana, y mañana, y mañana'};
const voto = document.getElementById('form-voto');
const mensaje = document.getElementById('voto-mensaje');
voto.addEventListener('change', () => {
  const elegido = voto.querySelector('input[name="libro"]:checked');
  document.getElementById('eleccion').textContent = titulos[elegido.value];
  mensaje.textContent = '';
});
voto.addEventListener('submit', evento => {
  evento.preventDefault();
  if (!voto.reportValidity()) return;
  mensaje.textContent = `Has probado la elección de «${titulos[voto.querySelector('input:checked').value]}». No se ha registrado ningún voto.`;
});
const asistencia = document.getElementById('form-asistencia');
const confirmacion = document.getElementById('asistencia-confirmacion');
asistencia.addEventListener('submit', evento => {
  evento.preventDefault();
  if (!asistencia.reportValidity()) return;
  asistencia.reset();
  asistencia.hidden = true;
  confirmacion.hidden = false;
  confirmacion.focus();
});
document.getElementById('volver-formulario').addEventListener('click', () => {
  confirmacion.hidden = true;
  asistencia.hidden = false;
  document.getElementById('asistencia-nombre').focus();
});

// Indica el paso visible sin alterar la selección ni enviar datos.
const enlacesPasos = document.querySelectorAll('.encuentro-pasos a');
if ('IntersectionObserver' in window) {
  const pasosObserver = new IntersectionObserver(entradas => {
    const visible = entradas.filter(entrada => entrada.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    enlacesPasos.forEach(enlace => {
      if (enlace.hash === '#' + visible.target.id) enlace.setAttribute('aria-current', 'step');
      else enlace.removeAttribute('aria-current');
    });
  }, {rootMargin: '-10% 0px -45% 0px', threshold: [0, 0.2, 0.5]});
  document.querySelectorAll('#votacion, #resultado, #asistentes').forEach(paso => pasosObserver.observe(paso));
}
