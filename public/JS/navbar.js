function toggleNavbar() {
    const navLinkElement = document.querySelector(".nav-links");
    const navBurger = document.querySelector(".nav-burger");
    const navLinks = document.querySelectorAll(".nav-links > li");

    if (!navLinkElement.classList.contains("nav-links-active")) {
        navLinks.forEach((link, index) => {
            // link.style.opacity = "1";
            // link.style.transform = "translateX(0px)"
            // link.style.transition = `all 0.5s ease ${index / 7 + 0.5}s`;
            link.style.setProperty("animation", `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`);
        });
    }

    else {
        navLinks.forEach(link => {
            link.style.setProperty("animation", "initial");
        });
    }

    navLinkElement.classList.toggle("nav-links-active");
    navBurger.classList.toggle("nav-burger-active");
    document.body.classList.toggle("lock-scroll");

    smoothScrollToTop();
}

function toggleNavExpandable(id) {
    const navExpandable = document.querySelector(id);
    navExpandable.classList.toggle("nav-expandable-list-active");
}

function smoothScrollToTop() {
    document.body.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}