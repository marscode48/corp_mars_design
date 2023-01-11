document.addEventListener('DOMContentLoaded', () => {
  const main = new Main();
});

class Main {
  constructor() {
    // this.side = document.querySelector('#side-btn');
    // this.bg = document.querySelector('.bg');
    this.header = document.querySelector('.header');
    this.hero = new HeroSlider('.swiper-hero');
    this.works = new WorksRoopSlider('.swiper-works');
    this._init();
  }

  _init() {
    gsap.registerPlugin(ScrollTrigger);
    // new MvScaleChange();
    new MenuOpen();
    new SmoothScroll(0);
    new FlowNestedSlider('.flow .swiper-main', '.flow .swiper-sub');
    new WorksGallerySlider('.works-page .swiper-thumb', '.works-page .swiper-main');
    // new TopParallaxAnimation('.gsap-top-title', '.gsap-top-image');
    // new SideParallaxAnimation('.gsap-side-image');
    // new MenuFadeIn(520);
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

  _topParallaxAnimation(el, inview) {
    if (inview) {
      new TopParallaxAnimation('.gsap-top-title', '.gsap-top-image');
    }
  }

  _conceptParallaxAnimation(el, inview) {
    if (inview) {
      new FeatureParallaxAnimation(el);
    }
  }

  _cardParallaxAnimation(el, inview) {
    if (inview) {
      new ConceptParallaxAnimation('.gsap-card');
    }
  }

  _contactParallaxAnimaion(el, inview) {
    if (inview) {
      new ContactParallaxAnimation(el);
    }
  }

  // _sideAnimation(el, inview) {
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

  _scrollInit() {
    new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), { once: false });
    new ScrollObserver('.swiper-hero', this.#toggleHeroAnimation.bind(this), { once: false });
    new ScrollObserver('.swiper-works', this.#toggleWorksAnimation.bind(this), { once: false });
    // new ScrollObserver('.menu__item', this._inviewAnimation);
    // new ScrollObserver('.site-title', this._inviewAnimation);
    // new ScrollObserver('.cover-slide', this._inviewAnimation);
    new ScrollObserver('.appear', this._inviewAnimation);
    new ScrollObserver('.concept-parallax', this._conceptParallaxAnimation);
    new ScrollObserver('.top-parallax', this._topParallaxAnimation);
    new ScrollObserver('.card-parallax', this._cardParallaxAnimation);
    new ScrollObserver('.contact-parallax', this._contactParallaxAnimaion);
    // new ScrollObserver('#menu', this._sideAnimation.bind(this), { once: false, rootMargin: '-300px 0px 0px 0px' });
    // new ScrollObserver('#location', this._fadeInAnimation.bind(this), { once: false, rootMargin: '-300px 0px 0px 0px' });
  }

  #toggleHeroAnimation(el, inview) {
    if (inview) {
      this.hero.start();
      console.log('hero start is called');
    } else {
      this.hero.stop();
      console.log('hero stop is called');
    }
  }

  #toggleWorksAnimation(el, inview) {
    if (inview) {
      this.works.start();
      console.log('works start is called');
    } else {
      this.works.stop();
      console.log('works stop is called');
    }
  }
}
