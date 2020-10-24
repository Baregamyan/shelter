import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const Pets_Slider = new Swiper('.pets__slider', {
  loop: true,
  spaceBetween: 100,
  breakpoints: {
    1280: {
      slidesPerView: 3
    },

    768: {
      slidesPerView: 2
    },

    320: {
      slidesPerView: 1
    }
  },
  navigation: {
    nextEl: '.pets__control--next',
    prevEl: '.pets__control--prev',
  }
})
