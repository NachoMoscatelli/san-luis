document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    function handleScroll() {
        if (window.innerWidth > 650) {
            header.style.transition = "background-color ease-in 1s"; // Animación activada

            if (window.scrollY > 50) {
                header.classList.add("solid");
            } else {
                header.classList.remove("solid");
            }
        } else {
            header.style.transition = "none"; // Sin animación en móviles
            header.classList.add("solid"); // Siempre sólido en móviles
        }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll(); // Ejecutar una vez al cargar
});
