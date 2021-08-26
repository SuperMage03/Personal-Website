const mediaQuery = window.matchMedia("(max-width: 768px)");

function handleWindowSizeChange(e) {
    if (e.matches && document.querySelector(".lock-scroll") != null) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

mediaQuery.addEventListener("change", handleWindowSizeChange);
