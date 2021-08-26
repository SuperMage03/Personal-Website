const initializeKeyboardModal = () => {
    const modalOpenBtns = document.querySelectorAll(".keyboard-modal-openBtn");

    modalOpenBtns.forEach(modalOpenBtn => {
        const modal = modalOpenBtn.closest("article").querySelector(".keyboard-modal");
        const modalCloseBtn = modal.querySelector(".keyboard-modal-closeBtn");

        modalOpenBtn.addEventListener("click", () => {
            modal.classList.add("keyboard-modal-active");
        });

        modalCloseBtn.addEventListener("click", () => {
            modal.classList.remove("keyboard-modal-active");
        });

        window.addEventListener("click", (evt) => {
            if (evt.target === modal) {
                modal.classList.remove("keyboard-modal-active");
            }
        });
    });
};

const modalOffTransitionWait = (modalContent) => {
    const modalContentAnimeTime = getComputedStyle(modalContent).getPropertyValue("transition-duration");
    const modalContentAnimeTimeNum = Math.ceil(parseFloat(modalContentAnimeTime) * 1000);

    setTimeout(() => {
        modalContent.style.position = "";
    }, modalContentAnimeTimeNum);
};

const initializeConsoleModal = () => {
    const modal = document.querySelector(".console-modal-background");
    const modalOpenBtns = document.querySelectorAll(".console-collection-carousel .swiper-slide");

    modalOpenBtns.forEach((modalOpenBtn, index) => {
        const modalContent = modal.querySelector(`.console-modal-content:nth-child(${index+1})`);
        const modalCloseBtn = modalContent.querySelector(".console-modal-closeBtn");
        initializeConsoleModalCarousel(modalContent, index);

        modalOpenBtn.addEventListener("click", () => {
            modal.classList.add("console-modal-background-active");
            modalContent.classList.add("console-modal-content-active");
            initializeConsoleModalCarousel(modalContent, index);
            modalContent.style.position = "relative";
        });

        modalCloseBtn.addEventListener("click", () => {
            modal.classList.remove("console-modal-background-active");
            modalContent.classList.remove("console-modal-content-active");
            modalOffTransitionWait(modalContent);
        });

        window.addEventListener("click", (evt) => {
            if (evt.target === modal) {
                modal.classList.remove("console-modal-background-active");
                modalContent.classList.remove("console-modal-content-active");
                modalOffTransitionWait(modalContent);
            }
        });

        consoleModalCarousel[index].on("slideChange", () => {
            modalContent.querySelector(".console-modal-body-content-active").classList.remove("console-modal-body-content-active");
            const newSlideIndex = consoleModalCarousel[index].realIndex;
            const newSlideContent = modalContent.querySelector(`.console-modal-body-content:nth-child(${newSlideIndex+1})`);
            newSlideContent.classList.add("console-modal-body-content-active");
        });
    });
};



