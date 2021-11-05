"use strict";

const testimonials = document.querySelectorAll(".testimonial");
const btnLeft = document.querySelectorAll(".btn--left");
const btnRight = document.querySelectorAll(".btn--right");
const slider = document.querySelector(".slider");

let currentSlide = 0;
const maxSlides = testimonials.length;

const goToSlide = function (slide) {
  testimonials[slide].classList.remove("hidden");
};

//Go to next slide
const nextSlide = function () {
  if (currentSlide + 1 === maxSlides) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  testimonials.forEach((item) => item.classList.add("hidden"));
  goToSlide(currentSlide);
};

//go to previous slide
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlides - 1;
  } else {
    currentSlide--;
  }
  testimonials.forEach((item) => item.classList.add("hidden"));
  goToSlide(currentSlide);
};

//go to first slide upon loading the page
const init = function () {
  goToSlide(0);
};
init();

//event listeners for buttons
btnRight.forEach((item) => item.addEventListener("click", nextSlide));
btnLeft.forEach((item) => item.addEventListener("click", prevSlide));

//event listener for keypress
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  e.key === "ArrowRight" && nextSlide();
});
