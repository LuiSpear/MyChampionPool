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