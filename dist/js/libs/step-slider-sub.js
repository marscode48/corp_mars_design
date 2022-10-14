"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var StepSliderSub = /*#__PURE__*/function () {
  function StepSliderSub(el) {
    _classCallCheck(this, StepSliderSub);

    this.el = el;
    this.swiper = this._initSwiper();
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
    } // start(options = {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     waitForTransition: false}
    //     ) {
    //     options = Object.assign({
    //         delay: 4000,
    //         disableOnInteraction: false
    //     }, options);
    //     this.swiper.params.
    //     play = options;
    //     this.swiper.autoplay.start();
    // }
    // stop() {
    //     this.swiper.autoplay.stop();
    // }

  }]);

  return StepSliderSub;
}(); // const mySwiper_sub = new Swiper('.flow01 .swiper-sub', {
//   spaceBetween: 24,
//   grabCursor: true,
//   nested: true,
//   pagination: {
//     el: '.flow01 .swiper-pagination-sub',
//     clickable: true,
//   },
// });
// const mySwiper_main = new Swiper('.flow01 .swiper-main', {
//   spaceBetween: 24,
//   centeredSlides: true,
//   grabCursor: true,
//   pagination: {
//     el: '.flow01 .swiper-pagination-main',
//     clickable: true,
//     renderBullet: (index, className) => {
//       let num = ('00' + (index + 1)).slice(-2);
//       return '<span class="' + className + '"><span class="step">STEP.</span>' + num + '</span>';
//     },
//   },
//   navigation: {
//     nextEl: '.flow01 .swiper-button-next',
//     prevEl: '.flow01 .swiper-button-prev',
//   },
//   breakpoints: {
//     1025: {
//       spaceBetween: 80,
//     }
//   },
// });
//# sourceMappingURL=step-slider-sub.js.map
