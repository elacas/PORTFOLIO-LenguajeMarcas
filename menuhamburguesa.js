document.addEventListener('DOMContentLoaded', function() {
    const botonMenu = document.querySelector("#enlace_menu");
    const menu = document.querySelector("#menu");
    
    if (botonMenu && menu) {
        botonMenu.addEventListener("click", function(e) {
            e.preventDefault(); // Evitar que el enlace haga scroll
            menu.classList.toggle("menu_desplegado");
            console.log("Menú toggled!"); // Para debug
        });
    }
});
