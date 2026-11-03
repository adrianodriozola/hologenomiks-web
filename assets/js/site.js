/* Único JavaScript del sitio: abre y cierra el menú en móvil. Sin cookies ni almacenamiento. */
(function () {
  var boton = document.querySelector(".menu-boton");
  var nav = document.getElementById("nav-principal");
  if (!boton || !nav) return;
  boton.addEventListener("click", function () {
    var abierto = nav.classList.toggle("abierto");
    boton.setAttribute("aria-expanded", abierto ? "true" : "false");
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("abierto")) {
      nav.classList.remove("abierto");
      boton.setAttribute("aria-expanded", "false");
      boton.focus();
    }
  });
})();
