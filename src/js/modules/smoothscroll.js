import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();
document.querySelectorAll('.nav__link[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href');
      const block = document.querySelector(id);
      const headerHeight = document.querySelector('.header__navigation').offsetHeight;

      window.scrollTo({top: (block.offsetTop - headerHeight), left: 0, behavior: 'smooth'});
  });
});
