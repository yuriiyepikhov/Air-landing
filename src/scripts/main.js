"use strict";

const slider = document.querySelector(".slider");
const slidesWrapper = slider.querySelector(".slider__slides");

const arrowLeft = slider.querySelector(".slider__arrow-btn--left");
const arrowRight = slider.querySelector(".slider__arrow-btn--right");

arrowRight.addEventListener("click", () => {
  const slideWidth = slidesWrapper.offsetWidth;
  const maxScroll = slidesWrapper.scrollWidth - slideWidth;
  const currScroll = Math.round(slidesWrapper.scrollLeft);

  slidesWrapper.scrollLeft =
    maxScroll - currScroll <= 1 ? 0 : currScroll + slideWidth;
});

arrowLeft.addEventListener("click", () => {
  const slideWidth = slidesWrapper.offsetWidth;
  const maxScroll = slidesWrapper.scrollWidth - slideWidth;
  const currScroll = Math.round(slidesWrapper.scrollLeft);

  slidesWrapper.scrollLeft =
    currScroll <= 1 ? maxScroll : currScroll - slideWidth;
});
