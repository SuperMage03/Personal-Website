const consoleCollectionCarousel = new Swiper('.console-collection-carousel', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const consoleModalCarousel = new Swiper('.console-modal-carousel', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const initializeConsoleModalCarousel = (modalContent, index) => {
    const curActiveSlide = consoleModalCarousel[index].realIndex;
    const curActiveSlideContent = modalContent.querySelector(`.console-modal-body-content:nth-child(${curActiveSlide+1})`);
    curActiveSlideContent.classList.add("console-modal-body-content-active");
}

