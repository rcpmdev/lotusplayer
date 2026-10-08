let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const carrossel = document.querySelector(".carrossel");

// Move o primeiro slide para o final do carrossel
function moveSlide() {
  const primeiroSlide = carrossel.querySelector(".slide");
  carrossel.appendChild(primeiroSlide);
  
  // Reinicia a transição
  carrossel.style.transition = "none";
  carrossel.style.transform = "translateX(0)";
  
  // Força um repaint antes de aplicar a animação de deslizamento
  void carrossel.offsetWidth;

  carrossel.style.transition = "transform 0.5s ease-in-out";
  carrossel.style.transform = `translateX(-${primeiroSlide.offsetWidth}px)`;
}

// Inicia o loop automático
function startLoop() {
  setInterval(moveSlide, 2500); // a cada 2.5 segundos
}

startLoop();


// função para o acordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
   
    this.classList.toggle("active");

    
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}