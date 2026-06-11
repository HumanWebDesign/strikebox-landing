document.addEventListener('DOMContentLoaded', () => {

    // 1. Lógica del Menú Hamburguesa CORREGIDA
    const menuToggle = document.getElementById('menu-toggle'); 
    const navLinks = document.getElementById('nav-links');
    
    if (menuToggle && navLinks) {
        // CORREGIDO: El selector ahora busca bien las etiquetas <a> dentro de tu clase real
        const links = document.querySelectorAll('.enlaces-lf a');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Cierra el menú automáticamente cuando haces clic en un enlace
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Lógica del Contador
    const fechaTorneo = new Date('2026-07-11T12:00:00').getTime();

    const intervalo = setInterval(() => {
        const ahora = new Date().getTime();
        const distancia = fechaTorneo - ahora;

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        const contenedorContador = document.getElementById('contador');
        
        if (distancia < 0) {
            clearInterval(intervalo);
            contenedorContador.innerHTML = '<div class="tiempo-caja"><span class="tiempo-numero">¡HOY!</span><span class="tiempo-texto">Es el evento</span></div>';
        } else {
            contenedorContador.innerHTML = `
                <div class="tiempo-caja">
                    <span class="tiempo-numero">${dias}</span>
                    <span class="tiempo-texto">Días</span>
                </div>
                <div class="tiempo-caja">
                    <span class="tiempo-numero">${horas}</span>
                    <span class="tiempo-texto">Horas</span>
                </div>
                <div class="tiempo-caja">
                    <span class="tiempo-numero">${minutos}</span>
                    <span class="tiempo-texto">Min</span>
                </div>
                <div class="tiempo-caja">
                    <span class="tiempo-numero">${segundos}</span>
                    <span class="tiempo-texto">Seg</span>
                </div>
            `;
        }
    }, 1000);
});