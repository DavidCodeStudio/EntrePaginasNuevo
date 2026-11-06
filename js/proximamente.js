/* Cabecera y diálogos de las tres páginas provisionales. */
"use strict";
const menu = document.querySelector(".boton-menu");
const navegacion = document.getElementById("navegacion");
function cerrarMenu() {
  navegacion.classList.remove("abierta");
  menu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-label", "Abrir menú");
  menu.textContent = "☰";
}
menu.addEventListener("click", () => {
  const abierto = navegacion.classList.toggle("abierta");
  menu.setAttribute("aria-expanded", String(abierto));
  menu.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
  menu.textContent = abierto ? "×" : "☰";
});
navegacion
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", cerrarMenu));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navegacion.classList.contains("abierta")) {
    cerrarMenu();
    menu.focus();
  }
});
window.addEventListener("resize", () => {
  if (innerWidth > 1100) cerrarMenu();
});
for (const [atributo, id] of [
  ["data-abrir-inscripcion", "dialogo-inscripcion"],
  ["data-abrir-marketplace", "dialogo-marketplace"],
]) {
  const dialogo = document.getElementById(id);
  document
    .querySelectorAll(`[${atributo}]`)
    .forEach((b) => b.addEventListener("click", () => dialogo.showModal()));
  dialogo
    .querySelectorAll(".cerrar-dialogo,[data-cerrar-marketplace]")
    .forEach((b) => b.addEventListener("click", () => dialogo.close()));
  dialogo.addEventListener("click", (e) => {
    if (e.target === dialogo) dialogo.close();
  });
}
// Se conserva el registro demostrativo: no envía ni almacena datos.
const inscripcion = document.getElementById("dialogo-inscripcion");
const formulario = document.getElementById("formulario-inscripcion");
const confirmacion = document.getElementById("discord-confirmacion");
const mensaje = document.querySelector(".mensaje-inscripcion");
function restablecerInscripcion() {
  formulario.reset();
  formulario.hidden = false;
  confirmacion.hidden = true;
  mensaje.textContent = "";
}
inscripcion.addEventListener("close", restablecerInscripcion);
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!formulario.reportValidity()) return;
  formulario.hidden = true;
  confirmacion.hidden = false;
  mensaje.textContent =
    "Prueba completada. Esta es una demostración: no hemos enviado ninguna invitación ni guardado tus datos.";
  document.querySelector("[data-corregir-correo]").focus();
});
document
  .querySelector("[data-corregir-correo]")
  .addEventListener("click", () => {
    formulario.hidden = false;
    confirmacion.hidden = true;
    mensaje.textContent = "";
    document.getElementById("correo-inscripcion").focus();
  });
