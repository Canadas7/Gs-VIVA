let currentSlide = 0;

function moveToSlide(slideIndex) {
  const slides = document.querySelector(".slides");
  const dots = document.querySelectorAll(".dot");

  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  currentSlide = slideIndex;

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === slideIndex);
  });
}

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("open");
}

