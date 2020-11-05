export class NavigationMenu {
  constructor(navigationClass, triggerClass) {
    this.navigationClass = navigationClass;
    this.triggerClass = triggerClass;

    this.header = document.querySelector(`.header`);
    this.trigger = this.header.querySelector(`.${triggerClass}`);

    this.el = this.header.querySelector(`.${this.navigationClass}`);
    this.nav = this.header.querySelector(`.nav`);
    this.links = this.el.querySelectorAll(`.nav__link`);
    this.activeLink = this.header.querySelector(`.nav__link--active`);

    this.isOpen = true;
    this.isMobile = () => window.innerWidth <= 768 ? true : false;
  }

  init() {
    this.onWindowScroll = () => this.scroll();

    this.onTriggerClick = () => this.toggle();
    this.trigger.addEventListener(`click`, this.onTriggerClick);

    window.addEventListener('scroll', this.onWindowScroll);
    this.links.forEach(link => {
      this.onLinkClick = () => this.setActiveLink(link);
      link.addEventListener('click', this.onLinkClick);
    })
  }

  setActiveLink(active) {
    if (this.isMobile()) {
      this.toggle();
    }
    if (this.activeLink) {
      this.activeLink.classList.toggle(`nav__link--active`, false);
    }
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

  toggle() {
    if (this.isOpen) {
      this.isOpen = false;
      this.nav.setAttribute(`aria-hidden`, true);
      document.body.classList.toggle(`popup-open`, true);
      this.el.classList.toggle(`header__navigation--open`, true);
    } else {
      this.isOpen = true;
      this.nav.setAttribute(`aria-hidden`, false);
      document.body.classList.toggle(`popup-open`, false);
      this.el.classList.toggle(`header__navigation--open`, false);
    }
  }
}
