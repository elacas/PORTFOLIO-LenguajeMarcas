let audioLoaded = false;

boton.addEventListener('click', () => {
    if (!audioLoaded) {
        // ✅ CARGAR AUDIO SOLO AL PRIMER CLICK
        const cancionAleatoria = seleccionarCancionAleatoria();
        cargarCancion(cancionAleatoria);
        audioLoaded = true;
        }

// MÚSICA CON REPRODUCCIÓN ALEATORIA
const canciones = [
    "sonido/medieval-citytavern-ambient-235876.mp3",
    "sonido/midnight-forest-184304.mp3", 
    "sonido/fantasy-forest-1-263881.mp3"
    // Añade más canciones aquí
];

let cancionActual = 0;
let musicaActiva = false;

// Función para seleccionar canción aleatoria
function seleccionarCancionAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * canciones.length);
    return canciones[indiceAleatorio];
}

// Función para cargar nueva canción
function cargarCancion(rutaCancion) {
    const musica = document.getElementById('musica-fondo');
    musica.src = rutaCancion;
    musica.load(); // Recargar el elemento audio
}

// Script del botón música MEJORADO
const musica = document.getElementById('musica-fondo');
const boton = document.getElementById('toggle-musica');

boton.addEventListener('click', () => {
    if (musica.paused) {
        // ✅ CARGAR CANCIÓN ALEATORIA
        const cancionAleatoria = seleccionarCancionAleatoria();
        cargarCancion(cancionAleatoria);
        
        musica.play();
        boton.textContent = '🔇 Silenciar Bardos';
        musicaActiva = true;
    } else {
        musica.pause();
        boton.textContent = '🎵 Música de Taberna';
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
});
musica.volume = 0.3;
