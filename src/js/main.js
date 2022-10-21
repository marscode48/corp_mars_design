document.addEventListener('DOMContentLoaded', () => {
  const main = new Main();
});

class Main {
  constructor() {
    // this.side = document.querySelector('#side-btn');
    // this.bg = document.querySelector('.bg');
    this.header = document.querySelector('.header');
    this.hero = new HeroSlider('.swiper-hero');
    this.houses = new HousesSider('.swiper-houses');
    this._init();
  }

  _init() {
    // new MvScaleChange();
    new MenuOpen();
    new StepSliderMain('.swiper-main');
    new StepSliderSub('.swiper-sub');
    // new MenuFadeIn(520);
    new SmoothScroll(80);
    // Pace.on('done', this._paceDone.bind(this));
    this._scrollInit();
  }

  // _paceDone() {
  //   this._scrollInit();
  // }

  _navAnimation(el, inview) {
    if (inview) {
      this.header.classList.remove('triggered');
    } else {
      this.header.classList.add('triggered');
    }
  }

  _inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add('inview');
    }
  }

  // _sideAnimation(el, inview) {
  //   if (inview) {
  //     this.side.classList.add('inview');
  //   } else {
  //     this.side.classList.remove('inview');
  //   }
  // }

  // _textAnimation(el, inview) {
  //   if (inview) {
  //     const ta = new TweenTextAnimation(el);
  //     ta.animate();
  //   }
  // }

  // _fadeInAnimation(el, inview) {
  //   if (inview) {
  //     this.bg.classList.add('inview');
  //   } else {
  //     this.bg.classList.remove('inview');
  //   }
  // }

  _scrollInit() {
    new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), { once: false });
    new ScrollObserver('.swiper-hero', this.#toggleHeroAnimation.bind(this), { once: false });
    new ScrollObserver('.swiper-houses', this.#toggleHousesAnimation.bind(this), { once: false });
    // new ScrollObserver('.menu__item', this._inviewAnimation);
    // new ScrollObserver('.site-title', this._inviewAnimation);
    // new ScrollObserver('.cover-slide', this._inviewAnimation);
    new ScrollObserver('.appear', this._inviewAnimation);
    // new ScrollObserver('.tween-animate-title', this._textAnimation, { rootMargin: '-100px 0px' });
    // new ScrollObserver('#menu', this._sideAnimation.bind(this), { once: false, rootMargin: '-300px 0px 0px 0px' });
    // new ScrollObserver('#location', this._fadeInAnimation.bind(this), { once: false, rootMargin: '-300px 0px 0px 0px' });
  }

  #toggleHeroAnimation(el, inview) {
    if(inview) {
        this.hero.start();
        console.log('hero start is called')
    } else {
        this.hero.stop();
        console.log('hero stop is called')
    }
  }

  #toggleHousesAnimation(el, inview) {
    if(inview) {
        this.houses.start();
        console.log('houses start is called')
    } else {
        this.houses.stop();
        console.log('houses stop is called')
    }
  }
}
