document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('enlace_menu');
    const menu = document.getElementById('menu');
    
    hamburger.onclick = function(e) {
        e.preventDefault();
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
            menu.style.flexDirection = 'column';
        }
    };
});