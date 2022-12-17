class TopParallaxAnimation {
  constructor(el, el2) {
    this.DOM = {};
    this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
    this.chars = this.DOM.el.innerHTML.trim().split('');
    this.DOM.el.innerHTML = this._splitText();
    this.DOM.chars = this.DOM.el.querySelectorAll('.char');
    this.DOM.el2 = document.querySelector(el2);
    this.animate();
  }

  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, '');
  }

  animate() {
    const topTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.top-parallax',
        start: 'top top',
        end: '+=500',
        scrub: 1,
        markers: false,
        pin: true,
      },
    });

    topTl.addLabel('topLabel');

    this.DOM.chars.forEach((c, i) => {
      topTl.fromTo(c, {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        y: -50,
        duration: 0.1,
      }, `topLabel+=${i / 20}`);
    });
    topTl.to(this.DOM.el2, {
      backgroundPositionY: 100,
      duration: 1,
    }, 'topLabel');
  }
}

class FeatureParallaxAnimation {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }

  animate() {
    const el = this.DOM.el;
    const img = this.DOM.el.querySelector(".gsap-image");

    ScrollTrigger.matchMedia({
      "(max-width: 959px)": function() {
        gsap.fromTo(img,
          {y: 0},
          {
            y: -60,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              end: 'bottom 10%',
              scrub: 1,
              markers: false,
            }
          }
        )
      },
      "(min-width: 960px)": function() {
        gsap.fromTo(img,
          {y: 0},
          {
            y: -100,
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              end: 'bottom top',
              scrub: 1,
              markers: false,
            }
          }
        )
      },
    });
  }
}

class ConceptParallaxAnimation {
  constructor(els) {
    this.DOM = {};
    this.DOM.els = document.querySelectorAll(els);
    console.log(this.DOM.els)
    this.animate();
  }

  animate() {
    this.DOM.els.forEach((el) => {
      const img = el.querySelector(".gsap-concept-image");
      const circle = el.querySelector(".gsap-concept-circle");
      const title = el.querySelector(".gsap-concept-title");
      const desc = el.querySelector(".gsap-concept-description");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
          end: 'bottom 25%',
          scrub: 1,
          markers: false,
        },
      });
      
      tl.to(
        img, {
        scale: 1.5,
        ease: 'none',
        duration: 2,
        }
      );

      tl.fromTo(
        circle,
        { scale: 0.5 },
        {
          scale: 1.5,
          ease: 'none',
          duration: 2,
        },
        "<"
      );

      tl.fromTo(
        title,
        { y: 25 },
        {
          y: 0,
          ease: "none",
          duration: 1,
        },
        "<"
      );

      tl.fromTo(
        desc,
        { y: 25 },
        {
          y: 0,
          ease: "none",
          duration: 1,
        },
        "-=1.8"
      );
    });
  }
}

class ReserveParallaxAnimation {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }

  animate() {
    ScrollTrigger.create({
      trigger: this.DOM.el,
      start: 'top 75%',
      toggleClass: 'active',
    });

    const reserveTl = gsap.timeline({
      scrollTrigger: {
        trigger: this.DOM.el,
        start: 'top bottom',
        end: 'center center',
        scrub: 1.5,
        markers: false,
      },
    });

    reserveTl.fromTo('.reserve-parallax .reserve__left', {
      xPercent: -100,
    },
    {
      xPercent: 0,
    })
      .fromTo('.reserve-parallax .reserve__right', {
        xPercent: 100,
      },
      {
        xPercent: 0,
      },
      '<');
  }
}
