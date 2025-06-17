document.addEventListener('DOMContentLoaded', function() {
    // ✅ AHORA SÍ funcionará
    const popup = document.getElementById("cookiePopup");
    const btn = document.getElementById("acceptCookies");
    
    console.log("Popup:", popup); // Debug
    console.log("Button:", btn);  // Debug
    
    if(!localStorage.cookiesAccepted){
        popup.classList.add("show");
    }

    btn.addEventListener("click", function(){
        localStorage.cookiesAccepted = "true";
        popup.classList.remove("show");
    });
});