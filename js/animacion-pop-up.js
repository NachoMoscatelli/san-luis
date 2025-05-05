document.addEventListener("DOMContentLoaded", () => {
    const aviso = document.getElementById("aviso");
    let visible = true;

    // Mostrar inicialmente como visible
    aviso.classList.add("visible");

    // Ocultar automáticamente después de 5 segundos
    setTimeout(() => {
        aviso.classList.remove("visible");
        aviso.classList.add("oculto");
        visible = false;
    }, 5000);

    // Alternar visibilidad con clic sobre el aviso
    aviso.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita cierre inmediato por evento global

        if (visible) {
            aviso.classList.remove("visible");
            aviso.classList.add("oculto");
            visible = false;
        } else {
            aviso.classList.remove("oculto");
            aviso.classList.add("visible");
            visible = true;
        }
    });

    // Ocultar al hacer clic/tap fuera del aviso (mobile y desktop)
    document.addEventListener("mousedown", (e) => {
        if (!aviso.contains(e.target)) {
            aviso.classList.remove("visible");
            aviso.classList.add("oculto");
            visible = false;
        }
    });
});
