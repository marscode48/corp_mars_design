"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      options = _objectSpread({
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

var FlowNestedSlider = /*#__PURE__*/function () {
  function FlowNestedSlider(el, el2) {
    _classCallCheck(this, FlowNestedSlider);

    this.el = el;
    this.el2 = el2;
    this.swiperSub = this._initSwiperSub();
    this.swiperMain = this._initSwiperMain();
  }

  _createClass(FlowNestedSlider, [{
    key: "_initSwiperSub",
    value: function _initSwiperSub() {
      return new Swiper(this.el2, {
        spaceBetween: 24,
        grabCursor: true,
        nested: true,
        pagination: {
          el: '.flow .swiper-pagination-sub',
          clickable: true
        }
      });
    }
  }, {
    key: "_initSwiperMain",
    value: function _initSwiperMain() {
      return new Swiper(this.el, {
        spaceBetween: 24,
        centeredSlides: true,
        grabCursor: true,
        pagination: {
          el: '.flow .swiper-pagination-main',
          clickable: true,
          renderBullet: function renderBullet(index, className) {
            var num = "00".concat(index + 1).slice(-2);
            return "<span class=\"".concat(className, "\">").concat(num, "</span>");
          }
        },
        navigation: {
          nextEl: '.flow .swiper-button-next',
          prevEl: '.flow .swiper-button-prev'
        },
        breakpoints: {
          1025: {
            spaceBetween: 80
          }
        }
      });
    }
  }]);

  return FlowNestedSlider;
}();

var HousesRoopSlider = /*#__PURE__*/function () {
  function HousesRoopSlider(el) {
    _classCallCheck(this, HousesRoopSlider);

    this.el = el;
    this.slideLength = document.querySelectorAll('.houses .swiper-slide').length;
    this.swiper = this._initSwiper();
  }

  _createClass(HousesRoopSlider, [{
    key: "_initSwiper",
    value: function _initSwiper() {
      return new Swiper(this.el, {
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: true,
        loopedSlides: this.slideLength,
        speed: 6000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false
        },
        freeMode: {
          enabled: true,
          momentum: false
        },
        grabCursor: true,
        on: {
          touchEnd: function touchEnd(swiper) {
            swiper.slideTo(swiper.activeIndex + 1);
          }
        }
      });
    }
  }, {
    key: "start",
    value: function start() {
      this.swiper.autoplay.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.swiper.autoplay.stop();
    }
  }]);

  return HousesRoopSlider;
}();

var HousesGallerySlider = /*#__PURE__*/function () {
  function HousesGallerySlider(el, el2) {
    _classCallCheck(this, HousesGallerySlider);

    this.el = el;
    this.el2 = el2;
    this.swiperSub = this._initSwiperSub();
    this.swiperMain = this._initSwiperMain();
  }

  _createClass(HousesGallerySlider, [{
    key: "_initSwiperSub",
    value: function _initSwiperSub() {
      return new Swiper(this.el, {
        slidesPerView: 3,
        spaceBetween: 12,
        grabCursor: true,
        scrollbar: {
          el: '.houses-page .swiper-scrollbar',
          draggable: true
        },
        breakpoints: {
          600: {
            slidesPerView: 5
          }
        }
      });
    }
  }, {
    key: "_initSwiperMain",
    value: function _initSwiperMain() {
      return new Swiper(this.el2, {
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        speed: 700,
        grabCursor: true,
        navigation: {
          nextEl: '.houses-page .swiper-button-next',
          prevEl: '.houses-page .swiper-button-prev'
        },
        thumbs: {
          swiper: this.swiperSub
        }
      });
    }
  }]);

  return HousesGallerySlider;
}();
//# sourceMappingURL=slider-swiper.js.map
