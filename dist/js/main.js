"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

document.addEventListener('DOMContentLoaded', function () {
  var main = new Main();
});

var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);

    // this.side = document.querySelector('#side-btn');
    // this.bg = document.querySelector('.bg');
    this.header = document.querySelector('.header');

    this._init();
  }

  _createClass(Main, [{
    key: "_init",
    value: function _init() {
      // new MvScaleChange();
      new MenuOpen(); // new MenuFadeIn(520);
      // new SmoothScroll(80);
      // Pace.on('done', this._paceDone.bind(this));

      this._scrollInit();
    } // _paceDone() {
    //   this._scrollInit();
    // }

  }, {
    key: "_navAnimation",
    value: function _navAnimation(el, inview) {
      if (inview) {
        this.header.classList.remove('triggered');
      } else {
        this.header.classList.add('triggered');
      }
    } // _inviewAnimation(el, inview) {
    //   if (inview) {
    //     el.classList.add('inview');
    //   }
    // }
    // _sideAnimation(el, inview) {
    //   if (inview) {
    //     this.side.classList.add('inview');
    //   } else {
    //     this.side.classList.remove('inview');
    //   }
    // }
    // _textAnimation(el, inview) {
    //   if (inview) {
    //     const ta = new TweenTextAnimation(el);
    //     ta.animate();
    //   }
    // }
    // _fadeInAnimation(el, inview) {
    //   if (inview) {
    //     this.bg.classList.add('inview');
    //   } else {
    //     this.bg.classList.remove('inview');
    //   }
    // }

  }, {
    key: "_scrollInit",
    value: function _scrollInit() {
      new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {
        once: false
      }); // new ScrollObserver('.menu__item', this._inviewAnimation);
      // new ScrollObserver('.site-title', this._inviewAnimation);
      // new ScrollObserver('.cover-slide', this._inviewAnimation);
      // new ScrollObserver('.appear', this._inviewAnimation);
      // new ScrollObserver('.tween-animate-title', this._textAnimation, { rootMargin: '-100px 0px' });
      // new ScrollObserver('#menu', this._sideAnimation.bind(this), { once: false, rootMargin: '-300px 0px 0px 0px' });
      // new ScrollObserver('#location', this._fadeInAnimation.bind(this), { once: false, rootMargin: '-300px 0px 0px 0px' });
    }
  }]);

  return Main;
}();
//# sourceMappingURL=main.js.map
