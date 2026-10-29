// Menú desplegable en celular
const boton = document.querySelector(".menu-boton");
const nav = document.querySelector(".nav");

boton.addEventListener("click", () => {
  const abierto = nav.classList.toggle("abierto");
  boton.setAttribute("aria-expanded", abierto);
});

// Cerrar el menú al elegir una opción
nav.querySelectorAll("a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    nav.classList.remove("abierto");
    boton.setAttribute("aria-expanded", false);
  });
});

// Aviso de abierto / cerrado según el horario
const aviso = document.querySelector("#estado");
const ahora = new Date();
const dia = ahora.getDay(); // 0 = domingo, 6 = sábado
const hora = ahora.getHours();

let abierta = false;
if (dia >= 1 && dia <= 5) abierta = hora >= 7 && hora < 20;
if (dia === 6) abierta = hora >= 7 && hora < 15;

if (aviso) {
  aviso.textContent = abierta ? "🟢 Abierto ahora" : "🔴 Cerrado ahora";
  aviso.classList.add(abierta ? "estado--abierto" : "estado--cerrado");
}
