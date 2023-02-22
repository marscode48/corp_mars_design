"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var MenuOpen = /*#__PURE__*/function () {
  function MenuOpen() {
    _classCallCheck(this, MenuOpen);

    this.DOM = {};
    this.DOM.hamburger = document.querySelector('.mobile-menu__btn');
    this.DOM.cover = document.querySelector('.mobile-menu__cover');
    this.DOM.mask = document.querySelector('.mobile-menu__mask');
    this.DOM.container = document.querySelector('#global-container');
    this.eventType = this._getEventType();

    this._addEvent();
  }

  _createClass(MenuOpen, [{
    key: "_getEventType",
    value: function _getEventType() {
      var isTouchCapable = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
      return isTouchCapable ? 'touchstart' : 'click';
    }
  }, {
    key: "_toggle",
    value: function _toggle() {
      this.DOM.container.classList.toggle('menu-open');
    }
  }, {
    key: "_addEvent",
    value: function _addEvent() {
      this.DOM.hamburger.addEventListener(this.eventType, this._toggle.bind(this));
      this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
      this.DOM.mask.addEventListener(this.eventType, this._toggle.bind(this));
    }
  }]);

  return MenuOpen;
}();
//# sourceMappingURL=menu-open.js.map
