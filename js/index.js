// Función para el formulario de suscripción
function mostrarMensaje(event) {
    // 1. Previene el envío del formulario (para que la página no se recargue)
    event.preventDefault();

    // 2. Muestra el mensaje de éxito
    const mensajeDiv = document.getElementById('mensajeExito');
    mensajeDiv.style.display = 'block';

    // Opcional: Oculta el formulario después de enviar (o lo resetea)
    const form = document.getElementById('boletinForm');
    form.reset(); // Limpia los campos
    // form.style.display = 'none'; // Descomentar para ocultar el formulario

    return false; // Asegura que no se recargue la página 
}

// Función para toggle de builds colapsables (acordeón)
function toggleBuild(buildId) {
    const content = document.getElementById(buildId);
    const arrow = document.getElementById('arrow-' + buildId);

    // Toggle la clase active
    content.classList.toggle('active');
    arrow.classList.toggle('rotate');
}



// Función para toggle de audiodescripción en videos
function toggleAudioDescription(videoId) {
    const iframe = document.getElementById(videoId);
    const status = document.getElementById(`status-${videoId}`);
    const normalId = iframe.getAttribute('data-normal');
    const adId = iframe.getAttribute('data-ad');
    const currentSrc = iframe.src;

    // Si el video tiene audiodescripción diferente
    if (normalId !== adId) {
        if (currentSrc.includes(normalId)) {
            // Cambia al video con audiodescripción
            iframe.src = `https://www.youtube.com/embed/${adId}`;
            status.innerHTML = `<span class="status-badge ad-enabled">Con Audiodescripción</span>`;
        } else {
            // Cambia al video normal
            iframe.src = `https://www.youtube.com/embed/${normalId}`;
            status.innerHTML = `<span class="status-badge">Sin Audiodescripción</span>`;
        }
    } else {
        // Si no hay audiodescripción disponible
        status.innerHTML = `<span class="status-badge ad-disabled">No disponible audiodescripción</span>`;
        setTimeout(() => {
            status.innerHTML = `<span class="status-badge">Sin Audiodescripción</span>`;
        }, 2000);
    }
}