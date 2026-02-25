/* ================= SMOOTH SCROLL ================= */
/* When clicking navbar links, page scrolls smoothly */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

  });
});



/* ================= NAVBAR SHADOW ON SCROLL ================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    header.style.boxShadow = "0 4px 18px rgba(0,0,0,0.1)";
  }else{
    header.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
  }

});



/* ================= SCROLL REVEAL ANIMATION ================= */
/* Sections will fade up when entering screen */

const revealElements = document.querySelectorAll(
  ".services, .stats, .projects, .contact"
);

function revealOnScroll(){

  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {

    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      el.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);



/* ================= BUTTON HOVER SCALE ================= */

const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

buttons.forEach(btn => {

  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });

});