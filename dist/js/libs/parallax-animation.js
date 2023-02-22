"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var TopParallaxAnimation = /*#__PURE__*/function () {
  function TopParallaxAnimation(el, el2) {
    _classCallCheck(this, TopParallaxAnimation);

    this.DOM = {};
    this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
    this.chars = this.DOM.el.innerHTML.trim().split('');
    this.DOM.el.innerHTML = this._splitText();
    this.DOM.chars = this.DOM.el.querySelectorAll('.char');
    this.DOM.el2 = document.querySelector(el2);
    this.animate();
  }

  _createClass(TopParallaxAnimation, [{
    key: "_splitText",
    value: function _splitText() {
      return this.chars.reduce(function (acc, curr) {
        curr = curr.replace(/\s+/, '&nbsp;');
        return "".concat(acc, "<span class=\"char\">").concat(curr, "</span>");
      }, '');
    }
  }, {
    key: "animate",
    value: function animate() {
      var topTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.top-parallax',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          markers: false,
          pin: true
        }
      });
      topTl.addLabel('topLabel');
      this.DOM.chars.forEach(function (c, i) {
        topTl.fromTo(c, {
          autoAlpha: 0
        }, {
          autoAlpha: 1,
          y: -50,
          duration: 0.1
        }, "topLabel+=".concat(i / 20));
      });
      topTl.fromTo(this.DOM.el2, {
        backgroundPositionY: 20
      }, {
        backgroundPositionY: 70,
        duration: 1
      }, 'topLabel');
    }
  }]);

  return TopParallaxAnimation;
}();

var FeatureParallaxAnimation = /*#__PURE__*/function () {
  function FeatureParallaxAnimation(el) {
    _classCallCheck(this, FeatureParallaxAnimation);

    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }

  _createClass(FeatureParallaxAnimation, [{
    key: "animate",
    value: function animate() {
      var el = this.DOM.el;
      var img = this.DOM.el.querySelector('.gsap-image');
      ScrollTrigger.matchMedia({
        '(max-width: 959px)': function maxWidth959px() {
          gsap.fromTo(img, {
            y: 0
          }, {
            y: -80,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              end: 'bottom 10%',
              scrub: 1,
              markers: false
            }
          });
        },
        '(min-width: 960px)': function minWidth960px() {
          gsap.fromTo(img, {
            y: 0
          }, {
            y: -100,
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              end: 'bottom top',
              scrub: 1,
              markers: false
            }
          });
        }
      });
    }
  }]);

  return FeatureParallaxAnimation;
}();

var ConceptParallaxAnimation = /*#__PURE__*/function () {
  function ConceptParallaxAnimation(els) {
    _classCallCheck(this, ConceptParallaxAnimation);

    this.DOM = {};
    this.DOM.els = document.querySelectorAll(els);
    console.log(this.DOM.els);
    this.animate();
  }

  _createClass(ConceptParallaxAnimation, [{
    key: "animate",
    value: function animate() {
      this.DOM.els.forEach(function (el) {
        var img = el.querySelector('.gsap-concept-image');
        var circle = el.querySelector('.gsap-concept-circle');
        var title = el.querySelector('.gsap-concept-title');
        var desc = el.querySelector('.gsap-concept-description');
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            end: 'bottom 25%',
            scrub: 1,
            markers: false
          }
        });
        tl.to(img, {
          scale: 1.25,
          ease: 'none',
          duration: 2
        });
        tl.fromTo(circle, {
          scale: 0.75
        }, {
          scale: 1.25,
          ease: 'none',
          duration: 2
        }, '<');
        tl.fromTo(title, {
          y: 25
        }, {
          y: 0,
          ease: 'none',
          duration: 1
        }, '<');
        tl.fromTo(desc, {
          y: 25
        }, {
          y: 0,
          ease: 'none',
          duration: 1
        }, '-=1.8');
      });
    }
  }]);

  return ConceptParallaxAnimation;
}();

var InquiryParallaxAnimation = /*#__PURE__*/function () {
  function InquiryParallaxAnimation(el) {
    _classCallCheck(this, InquiryParallaxAnimation);

    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }

  _createClass(InquiryParallaxAnimation, [{
    key: "animate",
    value: function animate() {
      ScrollTrigger.create({
        trigger: this.DOM.el,
        start: 'top 75%',
        toggleClass: 'active'
      });
      var inquiryTl = gsap.timeline({
        scrollTrigger: {
          trigger: this.DOM.el,
          start: 'top bottom',
          end: 'center center',
          scrub: 1.5,
          markers: false
        }
      });
      inquiryTl.fromTo('.inquiry-parallax .inquiry__left', {
        xPercent: -100
      }, {
        xPercent: 0
      }).fromTo('.inquiry-parallax .inquiry__right', {
        xPercent: 100
      }, {
        xPercent: 0
      }, '<');
    }
  }]);

  return InquiryParallaxAnimation;
}();
//# sourceMappingURL=parallax-animation.js.map
