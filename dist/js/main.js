"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

document.addEventListener('DOMContentLoaded', function () {
  var main = new Main();
});

var _toggleHeroAnimation = /*#__PURE__*/new WeakSet();

var _toggleHousesAnimation = /*#__PURE__*/new WeakSet();

var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);

    _classPrivateMethodInitSpec(this, _toggleHousesAnimation);

    _classPrivateMethodInitSpec(this, _toggleHeroAnimation);

    // this.side = document.querySelector('#side-btn');
    // this.bg = document.querySelector('.bg');
    this.header = document.querySelector('.header');
    this.hero = new HeroSlider('.swiper-hero');
    this.houses = new HousesRoopSlider('.swiper-houses');

    this._init();
  }

  _createClass(Main, [{
    key: "_init",
    value: function _init() {
      gsap.registerPlugin(ScrollTrigger); // new MvScaleChange();

      new MenuOpen();
      new SmoothScroll(0);
      new FlowNestedSlider('.flow .swiper-main', '.flow .swiper-sub');
      new HousesGallerySlider('.houses-page .swiper-thumb', '.houses-page .swiper-main'); // new TopParallaxAnimation('.gsap-top-title', '.gsap-top-image');
      // new SideParallaxAnimation('.gsap-side-image');
      // new MenuFadeIn(520);
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
    }
  }, {
    key: "_inviewAnimation",
    value: function _inviewAnimation(el, inview) {
      if (inview) {
        el.classList.add('inview');
      }
    }
  }, {
    key: "_topParallaxAnimation",
    value: function _topParallaxAnimation(el, inview) {
      if (inview) {
        new TopParallaxAnimation('.gsap-top-title', '.gsap-top-image');
      }
    }
  }, {
    key: "_conceptParallaxAnimation",
    value: function _conceptParallaxAnimation(el, inview) {
      if (inview) {
        new FeatureParallaxAnimation(el);
      }
    }
  }, {
    key: "_cardParallaxAnimation",
    value: function _cardParallaxAnimation(el, inview) {
      if (inview) {
        new ConceptParallaxAnimation('.gsap-card');
      }
    }
  }, {
    key: "_reserveParallaxAnimaion",
    value: function _reserveParallaxAnimaion(el, inview) {
      if (inview) {
        new ReserveParallaxAnimation(el);
      }
    } // _sideAnimation(el, inview) {
    //   if (inview) {
    //     this.side.classList.add('inview');
    //   } else {
    //     this.side.classList.remove('inview');
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
      });
      new ScrollObserver('.swiper-hero', _classPrivateMethodGet(this, _toggleHeroAnimation, _toggleHeroAnimation2).bind(this), {
        once: false
      });
      new ScrollObserver('.swiper-houses', _classPrivateMethodGet(this, _toggleHousesAnimation, _toggleHousesAnimation2).bind(this), {
        once: false
      }); // new ScrollObserver('.menu__item', this._inviewAnimation);
      // new ScrollObserver('.site-title', this._inviewAnimation);
      // new ScrollObserver('.cover-slide', this._inviewAnimation);

      new ScrollObserver('.appear', this._inviewAnimation);
      new ScrollObserver('.concept-parallax', this._conceptParallaxAnimation);
      new ScrollObserver('.top-parallax', this._topParallaxAnimation);
      new ScrollObserver('.card-parallax', this._cardParallaxAnimation);
      new ScrollObserver('.reserve-parallax', this._reserveParallaxAnimaion); // new ScrollObserver('#menu', this._sideAnimation.bind(this), { once: false, rootMargin: '-300px 0px 0px 0px' });
      // new ScrollObserver('#location', this._fadeInAnimation.bind(this), { once: false, rootMargin: '-300px 0px 0px 0px' });
    }
  }]);

  return Main;
}();

function _toggleHeroAnimation2(el, inview) {
  if (inview) {
    this.hero.start();
    console.log('hero start is called');
  } else {
    this.hero.stop();
    console.log('hero stop is called');
  }
}

function _toggleHousesAnimation2(el, inview) {
  if (inview) {
    this.houses.start();
    console.log('houses start is called');
  } else {
    this.houses.stop();
    console.log('houses stop is called');
  }
}
//# sourceMappingURL=main.js.map
