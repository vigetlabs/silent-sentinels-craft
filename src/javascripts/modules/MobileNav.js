export default class MobileNav {
  constructor(el) {
    this.el = el
    this.setupDOM()
    this.bindEvents()
    this.shouldHide()
  }

  setupDOM() {
    this.menuTrigger = this.el.querySelector('.global-navigation__icon-menu')
    this.menuContainer = this.el.querySelector('.global-navigation__inner')
    this.menuContainer.classList.add('menu--transition')
    this.htmlElement = document.querySelector('html')

    this.breakpoint = 1200
    this.viewportWidth = document.documentElement.clientWidth
    this.isOpen = this.viewportWidth > this.breakpoint ? true : false
  }

  bindEvents() {
    this.menuTrigger.addEventListener('click', this.onClick.bind(this))
    window.addEventListener('resize', this.onResize.bind(this))
  }

  onClick() {
    this.isOpen = !this.isOpen
    this.menuContainer.classList.toggle('menu--active', this.isOpen)
    this.htmlElement.classList.toggle('menu--overflow', this.isOpen)
    this.menuTrigger.setAttribute('aria-expanded', this.isOpen)

    this.shouldHide()
  }

  onResize() {
    this.viewportWidth = document.documentElement.clientWidth
    this.shouldHide()
  }

  shouldHide() {
    let ariaHidden = this.viewportWidth < this.breakpoint && !this.isOpen ? 'true' : 'false'
    this.menuContainer.setAttribute('aria-hidden', ariaHidden)
  }
}
