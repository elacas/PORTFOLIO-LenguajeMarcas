
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById("cookiePopup");
    const btn = document.getElementById("acceptCookies");
    

    // Mostrar popup si no hay cookies aceptadas
    if(!localStorage.getItem('cookiesAccepted')){;
        popup.classList.add("show");
    }

    // Botón aceptar
    btn.addEventListener("click", function(){
        console.log("🍪 Botón aceptar clickeado");
        localStorage.setItem('cookiesAccepted', 'true');
        popup.classList.remove("show");
    });
});

