/* JavaScript del sitio: menú en móvil y franja de la tarjeta poligénica de Servicios. Sin cookies ni almacenamiento. */
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

/* Tarjeta de fenotipo poligénico (servicios): franja de 142 variantes. Solo actúa si existe #strip. */
(function(){
  const g=document.getElementById("strip"); if(!g) return;
  const N=142, cols=48, x0=10, w=280/cols, y0=94;
  let seed=7; const rnd=()=>{seed=(seed*9301+49297)%233280; return seed/233280;};
  for(let i=0;i<N;i++){
    const c=i%cols, r=Math.floor(i/cols);
    const eff=rnd(); const dir=rnd();
    const fill= dir<0.42?"var(--pizarra-500)": dir<0.78?"var(--piedra-300)":"var(--ambar-500)";
    const rad= i===17?3.4: 1.2+eff*1.6;
    const el=document.createElementNS("http://www.w3.org/2000/svg","circle");
    el.setAttribute("cx",(x0+c*w+w/2).toFixed(1)); el.setAttribute("cy",(y0+r*8)); el.setAttribute("r",rad.toFixed(1)); el.setAttribute("fill",fill);
    if(i===17){ el.setAttribute("stroke","var(--texto)"); el.setAttribute("stroke-width","1"); }
    g.appendChild(el);
  }
  const t=document.createElementNS("http://www.w3.org/2000/svg","text");
  t.setAttribute("x",(x0+17*w+w/2+6).toFixed(1)); t.setAttribute("y",y0-5); t.setAttribute("font-size","7.5"); t.setAttribute("fill","var(--texto)"); t.setAttribute("font-family","'JetBrains Mono', monospace");
  t.textContent="ACTN3"; g.appendChild(t);
})();
