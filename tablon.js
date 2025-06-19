
// 🔥 CONFIGURACIÓN FIREBASE
// ⚠️ REEMPLAZA CON TU CONFIGURACIÓN REAL
const firebaseConfig = {
  apiKey: "AIzaSyAHKPomjX6EekyW4P_lLiVEyy85Rgn0lQc",
  authDomain: "tablon-portfolio.firebaseapp.com",
  projectId: "tablon-portfolio",
  storageBucket: "tablon-portfolio.firebasestorage.app",
  messagingSenderId: "645195283670",
  appId: "1:645195283670:web:bf9de756d9379b0064dd77",
  measurementId: "G-TX8KTXCRXT"
}
// 🚀 INICIALIZAR FIREBASE
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 🏰 TABLÓN DE PERGAMINOS CON FIREBASE
class Tablon {
    constructor() {
        this.notasRef = db.collection('notas');
        this.init();
    }

    init() {
        // Referencias a elementos
        this.autorInput = document.getElementById('autor-nota');
        this.textoTextarea = document.getElementById('texto-nota');
        this.agregarBtn = document.getElementById('agregar-nota');
        this.tablonContainer = document.getElementById('tablon-notas');

        // Event listeners
        this.agregarBtn.addEventListener('click', () => this.agregarNota());
        
        // Enter + Ctrl para agregar nota
        this.textoTextarea.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                this.agregarNota();
            }
        });

        // 🔄 ESCUCHAR CAMBIOS EN TIEMPO REAL
        this.escucharCambios();
    }

    // 📡 MAGIA: ESTO ACTUALIZA EN TIEMPO REAL
    escucharCambios() {
        this.notasRef.orderBy('fecha', 'desc').onSnapshot((snapshot) => {
            // Limpiar tablón
            this.tablonContainer.innerHTML = '';
            
            // Mostrar cada nota de Firebase
            snapshot.forEach((doc) => {
                const nota = { id: doc.id, ...doc.data() };
                this.crearElementoNota(nota);
            });
        });
    }

    // ➕ AGREGAR NUEVA NOTA A FIREBASE
    async agregarNota() {
        const autor = this.autorInput.value.trim();
        const texto = this.textoTextarea.value.trim();

        // Validaciones
        if (!autor) {
            alert('¡Escribe tu nombre, aventurero!');
            this.autorInput.focus();
            return;
        }

        if (!texto) {
            alert('¡No puedes clavar un pergamino vacío!');
            this.textoTextarea.focus();
            return;
        }

        // Crear nueva nota
        const nuevaNota = {
            autor: autor,
            texto: texto,
            fecha: firebase.firestore.Timestamp.now(),
            fechaTexto: new Date().toLocaleDateString('es-ES'),
            posicion: this.generarPosicionAleatoria(),
            rotacion: this.generarRotacionAleatoria(),
            color: this.generarColorAleatorio()
        };

        try {
            // 🚀 GUARDAR EN FIREBASE (¡SE VE EN TODAS LAS WEBS!)
            await this.notasRef.add(nuevaNota);
            this.limpiarFormulario();
            console.log('✅ Nota guardada en Firebase');
        } catch (error) {
            console.error('❌ Error al guardar:', error);
            alert('Error al guardar la nota. Inténtalo de nuevo.');
        }
    }

    // 🗑️ ELIMINAR NOTA DE FIREBASE
    async eliminarNota(id, elemento) {
        try {
            // Animación de salida
            elemento.style.transform = 'scale(0) rotate(180deg)';
            elemento.style.transition = 'transform 0.3s ease-in';

            setTimeout(async () => {
                // 🗑️ ELIMINAR DE FIREBASE
                await this.notasRef.doc(id).delete();
                console.log('🗑️ Nota eliminada de Firebase');
            }, 300);

        } catch (error) {
            console.error('❌ Error al eliminar:', error);
        }
    }

    // 🎲 FUNCIONES DE GENERACIÓN ALEATORIA
    generarPosicionAleatoria() {
        return {
            top: Math.random() * 300 + 20 + 'px',
            left: Math.random() * 70 + 10 + '%'
        };
    }

    generarRotacionAleatoria() {
        return (Math.random() - 0.5) * 20;
    }

    generarColorAleatorio() {
        const colores = ['#F4E4BC', '#F5DEB3', '#FAEBD7', '#F0E68C', '#DEB887'];
        return colores[Math.floor(Math.random() * colores.length)];
    }

    // 🏗️ CREAR ELEMENTO VISUAL
    crearElementoNota(nota) {
        const elemento = document.createElement('div');
        elemento.className = 'nota-pergamino';
        elemento.style.top = nota.posicion.top;
        elemento.style.left = nota.posicion.left;
        elemento.style.transform = `rotate(${nota.rotacion}deg)`;
        elemento.style.backgroundColor = nota.color;

        elemento.innerHTML = `
            <div class="nota-contenido">
                <div class="nota-texto">${nota.texto}</div>
                <div class="nota-firma">- ${nota.autor}</div>
                <div class="nota-fecha">${nota.fechaTexto}</div>
            </div>
            <div class="nota-eliminar" title="Quitar pergamino">❌</div>
        `;

        // Event listener para eliminar
        elemento.querySelector('.nota-eliminar').addEventListener('click', (e) => {
            e.stopPropagation();
            intentarBorrar(nota.id, elemento);
        });

        // Efectos hover
        elemento.addEventListener('mouseenter', () => {
            elemento.style.zIndex = '1000';
            elemento.style.transform = `scale(1.05) rotate(0deg)`;
        });

        elemento.addEventListener('mouseleave', () => {
            elemento.style.zIndex = '10';
            elemento.style.transform = `scale(1) rotate(${nota.rotacion}deg)`;
        });

        this.tablonContainer.appendChild(elemento);
        return elemento;
    }

    // 🧹 LIMPIAR FORMULARIO
    limpiarFormulario() {
        this.autorInput.value = '';
        this.textoTextarea.value = '';
        this.autorInput.focus();
    }
}

// 🚀 INICIALIZAR TABLÓN
document.addEventListener('DOMContentLoaded', () => {
    new Tablon();
});
