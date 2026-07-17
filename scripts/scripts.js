document.addEventListener('DOMContentLoaded', () => {

    const headerBtn = document.querySelector('.header__btn');
    const headerNav = document.querySelector('.header__nav');
    headerBtn.addEventListener('click', () => {
        headerBtn.classList.toggle('active');
        headerNav.classList.toggle('active');
    });

    const orgSwiper = new Swiper('.organization__swiper', {
        spaceBetween: 16,
        slidesPerView: 1,

        pagination: {
            el: '.organization__pagination',
        },

        breakpoints: {
            600: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
    });

    const eventsSwiper = new Swiper('.events__swiper', {
        spaceBetween: 16,
        slidesPerView: 1,

        pagination: {
            el: '.events__pagination',
        },

        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
    });
    
});