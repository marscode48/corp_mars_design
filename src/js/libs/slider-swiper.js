class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
        console.log(this.el)
        console.log(this._initSwiper)
    }

    _initSwiper() {
        return new Swiper(this.el, {
            // Optional parameters
            // direction: 'vertical',
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
        waitForTransition: false}
        ) {
        options = Object.assign({
            delay: 4000,
            disableOnInteraction: false
        }, options);
        
        this.swiper.params.autoplay = options;
        this.swiper.autoplay.start();
    }
    stop() {
        this.swiper.autoplay.stop();
    }
}

class StepSliderMain extends HeroSlider {
    constructor(el) {
        super(el);
        console.log(this.el)
    }
  
    _initSwiper() {
        return new Swiper(this.el, {
            // Optional parameters
            // direction: 'vertical',
            spaceBetween: 24,
            centeredSlides: true,
            grabCursor: true,
            pagination: {
                el: '.flow .swiper-pagination-main',
                clickable: true,
                renderBullet: (index, className) => {
                let num = ('00' + (index + 1)).slice(-2);
                return `<span class="${className}"><span class="step">STEP.</span>${num}</span>`
                },
            },
            navigation: {
                nextEl: '.flow .swiper-button-next',
                prevEl: '.flow .swiper-button-prev',
            },
            breakpoints: {
                1025: {
                    spaceBetween: 80,
                }
            },
        });
    }
}

class StepSliderSub extends HeroSlider {
    constructor(el) {
        super(el);
        console.log(this.el)
    }
  
    _initSwiper() {
      return new Swiper(this.el, {
        // Optional parameters
        // direction: 'vertical',
        spaceBetween: 24,
        grabCursor: true,
        nested: true,
        pagination: {
            el: '.flow .swiper-pagination-sub',
            clickable: true,
        },
      });
    }
}

class HousesSider extends HeroSlider {
    constructor(el) {
        super(el);
        console.log(this.el)
        this.slideLength = document.querySelectorAll('.houses .swiper-slide').length;
        console.log(this.slideLength);
    }

    _initSwiper() {
        return new Swiper(this.el, {
            allowTouchMove: false,
            slidesPerView: 'auto',
            spaceBetween: 0,
            loop: true,
            loopedSlides: this.slideLength,
            speed: 6000,
            grabCursor: true,
        });
    }

    start(options = {
        delay: 0,
        disableOnInteraction: false
    }
        ) {
        options = Object.assign({
            delay: 4000,
            disableOnInteraction: false
        }, options);
        
        this.swiper.params.autoplay = options;
        this.swiper.autoplay.start();
    }
}