class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
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