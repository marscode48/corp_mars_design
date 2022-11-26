class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      loop: true,
      loopAdditionalSlides: 1,
      speed: 2000,
      followFinger: false,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  start(options = {
    delay: 5000,
    disableOnInteraction: false,
    waitForTransition: false,
  }) {
    options = {
      delay: 4000,
      disableOnInteraction: false,
      ...options,
    };

    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }

  stop() {
    this.swiper.autoplay.stop();
  }
}

class FlowNestedSlider {
  constructor(el, el2) {
    this.el = el;
    this.el2 = el2;
    this.swiperSub = this._initSwiperSub();
    this.swiperMain = this._initSwiperMain();
  }

  _initSwiperSub() {
    return new Swiper(this.el2, {
      spaceBetween: 24,
      grabCursor: true,
      nested: true,
      pagination: {
        el: '.flow .swiper-pagination-sub',
        clickable: true,
      },
    });
  }

  _initSwiperMain() {
    return new Swiper(this.el, {
      spaceBetween: 24,
      centeredSlides: true,
      grabCursor: true,
      pagination: {
        el: '.flow .swiper-pagination-main',
        clickable: true,
        renderBullet: (index, className) => {
          const num = (`00${index + 1}`).slice(-2);
          return `<span class="${className}"><span class="step">STEP.</span>${num}</span>`;
        },
      },
      navigation: {
        nextEl: '.flow .swiper-button-next',
        prevEl: '.flow .swiper-button-prev',
      },
      breakpoints: {
        1025: {
          spaceBetween: 80,
        },
      },
    });
  }
}

class HousesRoopSlider {
  constructor(el) {
    this.el = el;
    this.slideLength = document.querySelectorAll('.houses .swiper-slide').length;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      slidesPerView: 'auto',
      spaceBetween: 0,
      loop: true,
      loopedSlides: this.slideLength,
      speed: 6000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      freeMode: {
        enabled: true,
        momentum: false,
      },
      grabCursor: true,
      on: {
        touchEnd: (swiper) => {
          swiper.slideTo(swiper.activeIndex + 1);
        }
      }
    });
  }

  start() {
    this.swiper.autoplay.start();
  }

  stop() {
    this.swiper.autoplay.stop();
  }
}

class HousesGallerySlider {
  constructor(el, el2) {
    this.el = el;
    this.el2 = el2;
    this.swiperSub = this._initSwiperSub();
    this.swiperMain = this._initSwiperMain();
  }

  _initSwiperSub() {
    return new Swiper(this.el, {
      slidesPerView: 3,
      spaceBetween: 12,
      grabCursor: true,
      scrollbar: {
        el: '.houses-page .swiper-scrollbar',
        draggable: true,
      },
      breakpoints: {
        600: {
          slidesPerView: 5,
        },
      },
    });
  }

  _initSwiperMain() {
    return new Swiper(this.el2, {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      speed: 700,
      grabCursor: true,
      navigation: {
        nextEl: '.houses-page .swiper-button-next',
        prevEl: '.houses-page .swiper-button-prev',
      },
      thumbs: {
        swiper: this.swiperSub,
      },
    });
  }
}
