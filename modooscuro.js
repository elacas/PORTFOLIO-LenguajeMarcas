document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-theme');
    const toggleIcon = toggleButton.querySelector('img');
    const body = document.body;
    
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        toggleIcon.src = 'images/elven_icon_light.png'; // Mostrar icono claro en modo oscuro
    } else {
        toggleIcon.src = 'images/elven_icon_dark.png'; // Mostrar icono oscuro en modo claro
    }
    
    // Toggle al hacer click
    toggleButton.addEventListener('click', function() {
        if (body.getAttribute('data-theme') === 'dark') {
            // Cambiar a modo claro
            body.removeAttribute('data-theme');
            toggleIcon.src = 'images/elven_icon_dark.png';
            localStorage.setItem('theme', 'light');
        } else {
            // Cambiar a modo oscuro
            body.setAttribute('data-theme', 'dark');
            toggleIcon.src = 'images/elven_icon_light.png';
            localStorage.setItem('theme', 'dark');
        }
    });
});



