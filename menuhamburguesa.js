let lanzador = "#enlace_menu";
let desplegable = "#menu";
let despliegaClase = "menu_desplegado"

function nav(){
let lanz = document.querySelector(lanzador);
lanz.addEventListener("click",despliegaMenu);
}

function despliegaMenu(){
    let despl = document.querySelector(desplegable);
    let musicButton = document.querySelector("#toggle-musica");
    
    despl.classList.toggle(despliegaClase);

    if (despl.classList.contains(despliegaClase)) {
        musicButton.style.display = 'none';
    } else {
        musicButton.style.display = 'block';
    }

}

nav();

