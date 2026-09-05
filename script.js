document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("typing-title");
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const year = document.getElementById("year");

    const text = "Aspiring Software Developer";
    let index = 0;

    title.textContent = "";

    function typeTitle() {
        if (index < text.length) {
            title.textContent += text[index];
            index += 1;
            setTimeout(typeTitle, 70);
        }
    }

    typeTitle();

    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });

    year.textContent = new Date().getFullYear();
});
