"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SmoothScroll = /*#__PURE__*/function () {
  function SmoothScroll(gap) {
    _classCallCheck(this, SmoothScroll);

    this.DOM = {};
    this.gap = gap;
    this.DOM.links = document.querySelectorAll('a[href^="#"]');

    this._smoothScroll();
  }

  _createClass(SmoothScroll, [{
    key: "_smoothScroll",
    value: function _smoothScroll() {
      var _this = this;

      this.DOM.links.forEach(function (link) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          var hrefLink = link.getAttribute('href');
          var targetContent = document.getElementById(hrefLink.replace('#', ''));
          var rectTop = targetContent.getBoundingClientRect().top;
          var positionY = window.pageYOffset;
          var target = rectTop + positionY + _this.gap;
          window.scrollTo({
            top: target,
            behavior: 'smooth'
          });
        });
      });
    }
  }]);

  return SmoothScroll;
}();
//# sourceMappingURL=smooth-scroll.js.map
