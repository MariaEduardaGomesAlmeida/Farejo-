// Menu hamburguer
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("header nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("ativo");
});

// Link ativo
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const currentUrl = window.location.href;

  links.forEach(link => {
    if (link.href === currentUrl) {
      link.classList.add("active");
    }
  });

  
});




//carrossel
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove("ativo");
    dots[idx].classList.remove("ativo");
    if (idx === i) {
      slide.classList.add("ativo");
      dots[idx].classList.add("ativo");
    }
  });
}

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    index = idx;
    showSlide(index);
  });
});







/*Banner*/
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 2000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}
