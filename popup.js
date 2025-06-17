document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById("cookiePopup");
    const btn = document.getElementById("acceptCookies");
    
    if(!localStorage.getItem('cookiesAccepted')){
        popup.classList.add("show");
    }

    btn.addEventListener("click", function(){
        localStorage.setItem('cookiesAccepted', 'true');
        popup.classList.remove("show");
    });
});


