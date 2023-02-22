class MenuOpen {
  constructor() {
    this.DOM = {};
    this.DOM.hamburger = document.querySelector('.mobile-menu__btn');
    this.DOM.cover = document.querySelector('.mobile-menu__cover');
    this.DOM.mask = document.querySelector('.mobile-menu__mask');
    this.DOM.container = document.querySelector('#global-container');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    const isTouchCapable = 'ontouchstart' in window
      || (window.DocumentTouch && document instanceof window.DocumentTouch)
      || navigator.maxTouchPoints > 0
      || window.navigator.msMaxTouchPoints > 0;

    return isTouchCapable ? 'touchstart' : 'click';
  }

  _toggle() {
    this.DOM.container.classList.toggle('menu-open');
  }

  _addEvent() {
    this.DOM.hamburger.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.mask.addEventListener(this.eventType, this._toggle.bind(this));
  }
}
