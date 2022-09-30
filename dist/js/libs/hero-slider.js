"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var HeroSlider = /*#__PURE__*/function () {
  function HeroSlider(el) {
    _classCallCheck(this, HeroSlider);

    this.el = el;
    this.swiper = this._initSwiper();
  }

  _createClass(HeroSlider, [{
    key: "_initSwiper",
    value: function _initSwiper() {
      return new Swiper(this.el, {
        // Optional parameters
        // direction: 'vertical',
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        loop: true,
        loopAdditionalSlides: 1,
        speed: 2000,
        followFinger: false,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });
    }
  }, {
    key: "start",
    value: function start() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        delay: 5000,
        disableOnInteraction: false,
        waitForTransition: false
      };
      options = Object.assign({
        delay: 4000,
        disableOnInteraction: false
      }, options);
      this.swiper.params.autoplay = options;
      this.swiper.autoplay.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.swiper.autoplay.stop();
    }
  }]);

  return HeroSlider;
}();
//# sourceMappingURL=hero-slider.js.map
