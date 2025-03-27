document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { // Cambia el valor según cuándo quieras que el fondo se vuelva sólido
            header.classList.add("solid");
        } else {
            header.classList.remove("solid");
        }
    });
});