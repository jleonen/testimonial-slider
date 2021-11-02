"use strict";

const testimonials = document.querySelectorAll(".testimonial");
const btnLeft = document.querySelector(".btn--left");
const btnRight = document.querySelectorAll(".btn--right");

let currentSlide = 0;
const maxSlides = testimonials.length;

const goToSlide = function (slide) {
  testimonials[slide].classList.remove("hidden");
};

//   const goToSlide = function (slide) {
//     testimonials.forEach(
//       (slide, index) =>
//         (slide.style.transform = `translateX(${100 * (index - slide)}%)`)
//     );
//   };

const nextSlide = function () {
  if (currentSlide + 1 === maxSlides) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  testimonials.forEach((item) => item.classList.add("hidden"));
  goToSlide(currentSlide);
};

//   const prevSlide = function () {
//     if (currentSlide === 0) {
//       currentSlide = maxSlides - 1;
//     } else {
//       currentSlide--;
//     }

//     goToSlide(currentSlide);
//   };

// const init = function () {
//   goToSlide(0);
// };
// init();
btnRight.forEach((item, index) => item.addEventListener("click", nextSlide));

// btnRight.addEventListener("click", nextSlide);
//   btnLeft.addEventListener("click", prevSlide);

goToSlide(0);
