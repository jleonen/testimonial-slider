"use strict";

const slider = function () {
  const testimonials = document.querySelectorAll(".testimonial");
  const btnLeft = document.querySelector(".btn--left");
  const btnRight = document.querySelector(".btn--right");

  let currentSlide = 0;
  const maxSlides = testimonials.length;

  const goToSlide = function (slide) {
    testimonials.forEach(
      (slide, index) =>
        (slide.style.transform = `translateX(${100 * (index - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (currentSlide === maxSlides - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlides - 1;
    } else {
      currentSlide--;
    }

    goToSlide(currentSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
};

slider();
