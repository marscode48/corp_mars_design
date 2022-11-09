"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
    console.log(this.el);
    console.log(this._initSwiper);
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

var StepSliderMain = /*#__PURE__*/function (_HeroSlider) {
  _inherits(StepSliderMain, _HeroSlider);

  var _super = _createSuper(StepSliderMain);

  function StepSliderMain(el) {
    var _this;

    _classCallCheck(this, StepSliderMain);

    _this = _super.call(this, el);
    console.log(_this.el);
    return _this;
  }

  _createClass(StepSliderMain, [{
    key: "_initSwiper",
    value: function _initSwiper() {
      return new Swiper(this.el, {
        // Optional parameters
        // direction: 'vertical',
        spaceBetween: 24,
        centeredSlides: true,
        grabCursor: true,
        pagination: {
          el: '.flow .swiper-pagination-main',
          clickable: true,
          renderBullet: function renderBullet(index, className) {
            var num = "00".concat(index + 1).slice(-2);
            return "<span class=\"".concat(className, "\"><span class=\"step\">STEP.</span>").concat(num, "</span>");
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

  return StepSliderMain;
}(HeroSlider);

var StepSliderSub = /*#__PURE__*/function (_HeroSlider2) {
  _inherits(StepSliderSub, _HeroSlider2);

  var _super2 = _createSuper(StepSliderSub);

  function StepSliderSub(el) {
    var _this2;

    _classCallCheck(this, StepSliderSub);

    _this2 = _super2.call(this, el);
    console.log(_this2.el);
    return _this2;
  }

  _createClass(StepSliderSub, [{
    key: "_initSwiper",
    value: function _initSwiper() {
      return new Swiper(this.el, {
        // Optional parameters
        // direction: 'vertical',
        spaceBetween: 24,
        grabCursor: true,
        nested: true,
        pagination: {
          el: '.flow .swiper-pagination-sub',
          clickable: true
        }
      });
    }
  }]);

  return StepSliderSub;
}(HeroSlider);

var HousesSider = /*#__PURE__*/function (_HeroSlider3) {
  _inherits(HousesSider, _HeroSlider3);

  var _super3 = _createSuper(HousesSider);

  function HousesSider(el) {
    var _this3;

    _classCallCheck(this, HousesSider);

    _this3 = _super3.call(this, el);
    console.log(_this3.el);
    _this3.slideLength = document.querySelectorAll('.houses .swiper-slide').length;
    console.log(_this3.slideLength);
    return _this3;
  }

  _createClass(HousesSider, [{
    key: "_initSwiper",
    value: function _initSwiper() {
      return new Swiper(this.el, {
        allowTouchMove: false,
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: true,
        loopedSlides: this.slideLength,
        speed: 6000,
        grabCursor: true
      });
    }
  }, {
    key: "start",
    value: function start() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        delay: 0,
        disableOnInteraction: false
      };
      options = _objectSpread({
        delay: 4000,
        disableOnInteraction: false
      }, options);
      this.swiper.params.autoplay = options;
      this.swiper.autoplay.start();
    }
  }]);

  return HousesSider;
}(HeroSlider);
//# sourceMappingURL=slider-swiper.js.map
