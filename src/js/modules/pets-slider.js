import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const Pets_Slider = new Swiper(`.pets__slider`, {
  loop: true,

  breakpoints: {
    1280: {
      spaceBetween: 100,
      slidesPerView: 3
    },

    768: {
      spaceBetween: 40,
      slidesPerView: 2
    },

    320: {
      slidesPerView: 1
    }
  },
  navigation: {
    nextEl: `.pets__control--next`,
    prevEl: `.pets__control--prev`,
  },
  a11y: {
    nextSlideMessage: `Next slide`,
    prevSlideMessage: `Prev slide`
  }
})
