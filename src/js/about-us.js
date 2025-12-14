import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.mySwiper', {
    direction: 'horizontal',
    loop: false,

    pagination: {
      el: '.about-swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  });
});
