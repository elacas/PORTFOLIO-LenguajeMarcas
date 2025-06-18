document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-theme');
    const body = document.body;
    
    // Cargar tema guardado (SIN tocar la imagen)
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        // NO cambiar imagen
    }
    
    // Toggle al hacer click (SIN tocar la imagen)
    toggleButton.addEventListener('click', function() {
        if (body.getAttribute('data-theme') === 'dark') {
            // Cambiar a modo claro
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            // NO cambiar imagen
        } else {
            // Cambiar a modo oscuro
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            // NO cambiar imagen
        }
    });
});
