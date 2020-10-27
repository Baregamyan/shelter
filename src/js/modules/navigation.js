export class NavigationMenu {
  constructor(navigationClass, triggerClass) {
    this.navigationClass = navigationClass;
    this.triggerClass = triggerClass;
    this.header = document.querySelector(`.header`);

    this.el = this.header.querySelector(`.${this.navigationClass}`);
    // this.trigger = document.querySelector(`.${triggerClass}`);
    this.links = this.el.querySelectorAll(`.nav__link`);
    this.activeLink = this.header.querySelector(`.nav__link--active`);

    this.isOpen = true;
  }

  init() {
    this.onWindowScroll = () => this.scroll();

    window.addEventListener('scroll', this.onWindowScroll);
    this.links.forEach(link => {
      this.onLinkClick = () => this.setActiveLink(link);
      link.addEventListener('click', this.onLinkClick);
    })
  }

  setActiveLink(active) {
    this.activeLink.classList.toggle(`nav__link--active`, false);
    active.classList.toggle(`nav__link--active`, true);
    this.activeLink = active;
  }

  scroll() {
    if (window.scrollY > 0) {
      this.el.classList.toggle(`${this.navigationClass}--fixed`, true);
    } else {
      this.el.classList.toggle(`${this.navigationClass}--fixed`, false);
    }
  }
}
