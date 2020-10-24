export class NavigationMenu {
  constructor(navigationClass, triggerClass) {
    this.navigationClass = navigationClass;
    this.triggerClass = triggerClass;
    this.header = document.querySelector(`.header`);

    this.el = this.header.querySelector(`.${this.navigationClass}`);
    // this.trigger = document.querySelector(`.${triggerClass}`);
    this.links = this.el.querySelectorAll(`.nav__link`);

    this.isOpen = true;
  }

  init() {
    this.onWindowScroll = () => this.scroll();
    window.addEventListener('scroll', this.onWindowScroll);
  }

  scroll() {
    if (window.scrollY > this.el.offsetHeight) {
      this.el.classList.toggle(`${this.navigationClass}--fixed`, true);
      this.header.style.paddingTop = `${this.el.offsetHeight}px`
    } else {
      this.el.classList.toggle(`${this.navigationClass}--fixed`, false);
      this.header.style.paddingTop = `0px`;
    }
  }
}
