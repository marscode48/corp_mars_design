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

var _toggleWorksAnimation = /*#__PURE__*/new WeakSet();

var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);

    _classPrivateMethodInitSpec(this, _toggleWorksAnimation);

    _classPrivateMethodInitSpec(this, _toggleHeroAnimation);

    this.header = document.querySelector('.header');
    this.hero = new HeroSlider('.swiper-hero');
    this.works = new WorksRoopSlider('.swiper-works');

    this._init();
  }

  _createClass(Main, [{
    key: "_init",
    value: function _init() {
      gsap.registerPlugin(ScrollTrigger);
      new MenuOpen();
      new SmoothScroll(0);
      new FlowNestedSlider('.flow .swiper-main', '.flow .swiper-sub');
      new WorksGallerySlider('.works-page .swiper-thumb', '.works-page .swiper-main');

      this._scrollInit();
    }
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
    key: "_inquiryParallaxAnimaion",
    value: function _inquiryParallaxAnimaion(el, inview) {
      if (inview) {
        new InquiryParallaxAnimation(el);
      }
    }
  }, {
    key: "_scrollInit",
    value: function _scrollInit() {
      new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {
        once: false
      });
      new ScrollObserver('.swiper-hero', _classPrivateMethodGet(this, _toggleHeroAnimation, _toggleHeroAnimation2).bind(this), {
        once: false
      });
      new ScrollObserver('.swiper-works', _classPrivateMethodGet(this, _toggleWorksAnimation, _toggleWorksAnimation2).bind(this), {
        once: false
      });
      new ScrollObserver('.appear', this._inviewAnimation);
      new ScrollObserver('.concept-parallax', this._conceptParallaxAnimation);
      new ScrollObserver('.top-parallax', this._topParallaxAnimation);
      new ScrollObserver('.card-parallax', this._cardParallaxAnimation);
      new ScrollObserver('.inquiry-parallax', this._inquiryParallaxAnimaion);
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

function _toggleWorksAnimation2(el, inview) {
  if (inview) {
    this.works.start();
    console.log('works start is called');
  } else {
    this.works.stop();
    console.log('works stop is called');
  }
}
//# sourceMappingURL=main.js.map
