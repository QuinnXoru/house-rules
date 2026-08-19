const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


menuToggle.addEventListener("click", function () {

    const isOpen =
        navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

});


document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });