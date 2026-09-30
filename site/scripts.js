// ========================================
// MANCHA DE CAFÉ
// INTERAÇÕES DO SITE
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", (evento) => {

            const destinoId = link.getAttribute("href");

            const destino = document.querySelector(destinoId);

            if (!destino) {
                return;
            }

            evento.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

});