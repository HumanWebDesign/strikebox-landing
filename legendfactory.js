document.addEventListener('DOMContentLoaded', () => {
    // Configura aquí la fecha del próximo torneo Legend Factory
    // Formato: 'YYYY-MM-DDTHH:MM:SS'
    const fechaTorneo = new Date('2026-07-11T12:00:00').getTime();

    // Actualizar el contador cada segundo
    const intervalo = setInterval(() => {
        const ahora = new Date().getTime();
        const distancia = fechaTorneo - ahora;

        // Cálculos matemáticos de tiempo
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        // Renderizar en el HTML
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