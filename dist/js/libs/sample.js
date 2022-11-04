"use strict";

var scorrllLinks = document.querySelectorAll('a[href^="#"]');
scorrllLinks.forEach(function (scorrllLink) {
  scorrllLink.addEventListener("click", function (e) {
    e.preventDefault();
    var hrefLink = scorrllLink.getAttribute("href");
    var targetContent = document.getElementById(hrefLink.replace("#", ""));
    var rectTop = targetContent.getBoundingClientRect().top;
    var positionY = window.pageYOffset;
    var target = rectTop + positionY;
    window.scrollTo({
      top: target,
      behavior: "smooth"
    });
  });
});
//# sourceMappingURL=sample.js.map
