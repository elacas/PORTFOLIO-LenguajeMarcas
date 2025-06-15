let lanzador = "#enlace_menu";
let desplegable = "#menu";
let despliegaClase = "menu_desplegado"

function nav(){
let lanz = document.querySelector(lanzador);
lanz.addEventListener("click",despliegaMenu);

}

function despliegaMenu(){
    let despl = document.querySelector(desplegable);
    despl.classList.toggle(despliegaClase)
}

nav();