// MÚSICA CON REPRODUCCIÓN ALEATORIA
const canciones = [
    "sonido/medieval-citytavern-ambient-235876.mp3",
    "sonido/midnight-forest-184304.mp3", 
    "sonido/fantasy-forest-1-263881.mp3"
];

let audioLoaded = false;
let musicaActiva = false;

// Elementos del DOM
const musica = document.getElementById('musica-fondo');
const boton = document.getElementById('toggle-musica');

// Configurar volumen
musica.volume = 0.3;

// Función para seleccionar canción aleatoria
function seleccionarCancionAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * canciones.length);
    return canciones[indiceAleatorio];
}

// Función para cargar nueva canción
function cargarCancion(rutaCancion) {
    musica.src = rutaCancion;
    musica.load();
}

// ✅ UN SOLO EVENT LISTENER - FUNCIONALIDAD COMPLETA
boton.addEventListener('click', () => {
    if (musica.paused) {
        // ✅ CARGAR CANCIÓN ALEATORIA solo si no está cargada
        if (!audioLoaded) {
            const cancionAleatoria = seleccionarCancionAleatoria();
            cargarCancion(cancionAleatoria);
            audioLoaded = true;
        }
        
        musica.play();
        boton.textContent = '🔇 Silenciar Bardos';
        musicaActiva = true;
    } else {
        musica.pause();
        boton.textContent = '🎵 Música';
        musicaActiva = false;
    }
});

// ✅ CUANDO TERMINE UNA CANCIÓN, PONER OTRA ALEATORIA
musica.addEventListener('ended', () => {
    if (musicaActiva) {
        const nuevaCancion = seleccionarCancionAleatoria();
        cargarCancion(nuevaCancion);
        musica.play();
    }
});
