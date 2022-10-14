"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var HeroSlider = /*#__PURE__*/function () {
  function HeroSlider(el) {
    _classCallCheck(this, HeroSlider);

    this.el = el;
    this.swiper = this._initSwiper();
    console.log(this.el);
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
          el: '.flow01 .swiper-pagination-main',
          clickable: true,
          renderBullet: function renderBullet(index, className) {
            var num = ('00' + (index + 1)).slice(-2);
            return '<span class="' + className + '"><span class="step">STEP.</span>' + num + '</span>';
          }
        },
        navigation: {
          nextEl: '.flow01 .swiper-button-next',
          prevEl: '.flow01 .swiper-button-prev'
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

    _this2 = _super2.call(this, el); // this.el = el;
    // this.swiper = this._initSwiper();

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
          el: '.flow01 .swiper-pagination-sub',
          clickable: true
        }
      });
    }
  }]);

  return StepSliderSub;
}(HeroSlider);
//# sourceMappingURL=swiper-slider.js.map
