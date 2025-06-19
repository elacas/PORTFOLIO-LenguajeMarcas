/*document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById("cookiePopup");
    const btn = document.getElementById("acceptCookies");
    
    if(!localStorage.getItem('cookiesAccepted')){
        popup.classList.add("show");
        console.log("🍪 Mostrando popup de cookies")
    }
    

    btn.addEventListener("click", function(){
        localStorage.setItem('cookiesAccepted', 'true');
        popup.classList.remove("show");
        console.log("✅ Cookies aceptadas")
    });

});
*/
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById("cookiePopup");
    const btn = document.getElementById("acceptCookies");
    
    // 🔍 DEBUG: Verificar si encuentra los elementos
    console.log("🍪 Popup encontrado:", popup);
    console.log("🍪 Botón encontrado:", btn);
    console.log("🍪 Cookies ya aceptadas:", localStorage.getItem('cookiesAccepted'));
    
    if(!popup) {
        console.error("❌ No se encuentra el elemento cookiePopup");
        return;
    }
    
    if(!btn) {
        console.error("❌ No se encuentra el botón acceptCookies");
        return;
    }
    
    // Mostrar popup si no hay cookies aceptadas
    if(!localStorage.getItem('cookiesAccepted')){
        console.log("🍪 Intentando mostrar popup...");
        popup.classList.add("show");
        console.log("🍪 Clases del popup:", popup.classList);
    } else {
        console.log("🍪 Cookies ya aceptadas, no mostrando popup");
    }

    // Botón aceptar
    btn.addEventListener("click", function(){
        console.log("🍪 Botón aceptar clickeado");
        localStorage.setItem('cookiesAccepted', 'true');
        popup.classList.remove("show");
    });
});

