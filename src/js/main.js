document.addEventListener('DOMContentLoaded', () => {
  const main = new Main();
});

class Main {
  constructor() {
    this.header = document.querySelector('.header');
    this.hero = new HeroSlider('.swiper-hero');
    this.works = new WorksRoopSlider('.swiper-works');
    this._init();
  }

  _init() {
    gsap.registerPlugin(ScrollTrigger);
    new MenuOpen();
    new SmoothScroll(0);
    new FlowNestedSlider('.flow .swiper-main', '.flow .swiper-sub');
    new WorksGallerySlider('.works-page .swiper-thumb', '.works-page .swiper-main');
    this._scrollInit();
  }

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

  _inquiryParallaxAnimaion(el, inview) {
    if (inview) {
      new InquiryParallaxAnimation(el);
    }
  }

  _scrollInit() {
    new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), { once: false });
    new ScrollObserver('.swiper-hero', this.#toggleHeroAnimation.bind(this), { once: false });
    new ScrollObserver('.swiper-works', this.#toggleWorksAnimation.bind(this), { once: false });
    new ScrollObserver('.appear', this._inviewAnimation);
    new ScrollObserver('.concept-parallax', this._conceptParallaxAnimation);
    new ScrollObserver('.top-parallax', this._topParallaxAnimation);
    new ScrollObserver('.card-parallax', this._cardParallaxAnimation);
    new ScrollObserver('.inquiry-parallax', this._inquiryParallaxAnimaion);
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
