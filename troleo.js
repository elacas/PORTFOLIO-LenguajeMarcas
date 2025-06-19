// 🎭 SISTEMA DE TROLLEO EDUCATIVO v1.0
let intentosFailidos = 0;

function intentarBorrar(noteId) {
    console.log("🔥 Intento de borrado detectado:", noteId);
    
    // 1. Animación de esperanza
    mostrarAnimacionBorrado();
    
    // 2. El intento "real" (que fallará)
    setTimeout(() => {
        db.collection('notas').doc(noteId).delete()
        .then(() => {
            // Esto nunca pasará 😈
            console.log("Borrado exitoso");
        })
        .catch((error) => {
            // ¡AQUÍ LA VENGANZA!
            console.log("🛡️ Firebase ha bloqueado el ataque");
            ejecutarVenganza();
        });
    }, 1500);
}

function ejecutarVenganza() {
    intentosFailidos++;
    const mensaje = obtenerMensajeEscalado();
    mostrarToastFantasia(mensaje);
}

function obtenerMensajeEscalado() {
    if (intentosFailidos === 1) return "¡Ups! Parece que no tienes permisos 😜";
    if (intentosFailidos === 3) return "¿Sigues intentando? Admirable 🤨";
    if (intentosFailidos === 5) return "Esto es... persistencia o terquedad 🤔";
    if (intentosFailidos === 10) return "¿En serio? ¿10 intentos? 😂";
    if (intentosFailidos > 15) return "Está bien, respeto tu dedicación al caos 👏";
    
    // Mensajes aleatorios para el resto
    const mensajes = [
        "Este pergamino está protegido por magia élfica ✨",
        "Error 403: Privilegios insuficientes, aventurero 🛡️",
        "Los moderadores del reino han hablado 👑",
        "¿Quizás deberías escribir algo bonito en su lugar? 🌸"
    ];
    return mensajes[Math.floor(Math.random() * mensajes.length)];
}

function mostrarAnimacionBorrado() {
    // Aquí conectas con tu animación actual
    console.log("✨ Mostrando animación de borrado...");
    // Tu animación actual ya funciona, ¡mantenla!
}

function mostrarToastFantasia(mensaje) {
    // Crear el toast
    const toast = document.createElement('div');
    toast.className = 'toast-fantasia';
    toast.textContent = mensaje;
    
    // Añadirlo al body
    document.body.appendChild(toast);
    
    // Removerlo después de 3 segundos
    setTimeout(() => {
        toast.remove();
    }, 3000);
}
