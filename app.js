"use strict";

const testimonials = document.querySelectorAll(".testimonial");
const btnLeft = document.querySelectorAll(".btn--left");
const btnRight = document.querySelectorAll(".btn--right");
const slider = document.querySelector(".slider");

let currentSlide = 0;
const maxSlides = testimonials.length;

const goToSlide = function (slide) {
  let next = slide + 1;

  testimonials[slide].classList.remove("hidden");

  // currentSlide === maxSlides - 1 &&
  // testimonials[next].classList.remove("hidden");

  // testimonials[slide - 1].style.transform = `translateX(${-100}%)`;
  // testimonials[slide + 2].style.transform = `translateX(${-100}%)`;
  console.log(currentSlide);

  // testimonials[slide + 1].style.transform = `translateX(${100}%)`;
  // slider.style.transform = `translateX(${0}%)`;
  testimonials.forEach(
    (slides, index) =>
      (slides.style.transform = `translateX(${100 * (slide - index)}%)`)
  );
};

//Go to next slide
const nextSlide = function () {
  if (currentSlide + 1 === maxSlides) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  // testimonials.forEach(
  //   (item) => (item.style.transform = `translateX(${-100}%)`)
  // );
  let next = currentSlide + 1;
  console.log(next);
  // testimonials[currentSlide].style.transform = `translateX(${0}%)`;
  testimonials.forEach((item) => item.classList.add("hidden"));
  if (currentSlide < maxSlides - 1) {
    testimonials[currentSlide + 1].classList.remove("hidden");
  } else {
    console.log("max limit");
    testimonials[0].classList.remove("hidden");
  }
  // testimonials[next].classList.remove("hidden");
  // testimonials[2].classList.remove("hidden");
  // testimonials[2].style.transform = `translateX(${-100}%)`;
  goToSlide(currentSlide);
};

//go to previous slide
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlides - 1;
  } else {
    currentSlide--;
  }
  // testimonials.forEach((item) => item.classList.add("hidden"));
  goToSlide(currentSlide);
};

//go to first slide upon loading the page
const init = function () {
  goToSlide(0);
  testimonials[1].classList.remove("hidden");
  // testimonials[1].style.transform = `translateX(${-100}%)`;
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
