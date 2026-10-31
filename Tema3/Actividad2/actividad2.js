const listaCompraUI = document.getElementById("listaCompra");
const inputProducto = document.getElementById("inputProducto");
const btnAnadir = document.getElementById("btnAnadir");
const btnQuitar = document.getElementById("btnQuitar");
const btnVaciar = document.getElementById("btnVaciar");

const btnVoz = document.getElementById("btnVoz");
const estadoVoz = document.getElementById("estadoVoz");
const comandoTexto = document.getElementById("comandoTexto");


// Cargamos la lista de antes o un array vacio si es la primera vez
let miLista = JSON.parse(localStorage.getItem("listaCompra")) || [];

// Funcion para pintar la lista en pantalla y guardarla
function actualizarPantalla() {
    listaCompraUI.innerHTML = ""; // limpiamos

    miLista.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = producto;
        listaCompraUI.appendChild(li);
    });

    // Guardamos para que no se borre al recargar
    localStorage.setItem("listaCompra", JSON.stringify(miLista));
}

actualizarPantalla();


// sin micro
btnAnadir.addEventListener("click", () => {
    const producto = inputProducto.value.trim().toLowerCase();
    if (producto) {
        miLista.push(producto);
        actualizarPantalla();
        inputProducto.value = "";
    }
});

btnQuitar.addEventListener("click", () => {
    const producto = inputProducto.value.trim().toLowerCase();
    if (producto) {
        const indice = miLista.indexOf(producto);
        if (indice !== -1) {
            miLista.splice(indice, 1);
            actualizarPantalla();
        } else {
            alert("Ese producto no esta en la lista.");
        }
        inputProducto.value = "";
    }
});

btnVaciar.addEventListener("click", () => {
    miLista = [];
    actualizarPantalla();
});

// Para que el navegador hable
function hablar(texto) {
    // Comprobamos que el navegador lo soporta
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
        console.log("El navegador no soporta síntesis de voz.");
        return;
    }

    // Cortamos si estaba diciendo otra cosa para que no se pisen los audios
    window.speechSynthesis.cancel();

    const mensaje = new SpeechSynthesisUtterance(texto);
    mensaje.lang = "es-ES";
    window.speechSynthesis.speak(mensaje);
}


// Pillamos la API con o sin prefijo webkit
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    // Navegador no compatible
    estadoVoz.textContent = "Tu navegador no soporta la voz. Usa los botones.";
    btnVoz.disabled = true;
} else {
    const recognition = new SpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.continuous = false; // que pare de escuchar al terminar la frase
    recognition.interimResults = false;

    let escuchando = false;

    // Boton del micro
    btnVoz.addEventListener("click", () => {
        if (!escuchando) {
            recognition.start();
        } else {
            recognition.stop();
        }
    });

    // Eventos para cambiar el texto de estado
    recognition.onstart = () => {
        escuchando = true;
        estadoVoz.textContent = "Estado: Escuchando...";
        btnVoz.textContent = "Detener";
    };

    recognition.onend = () => {
        escuchando = false;
        estadoVoz.textContent = "Estado: Inactivo";
        btnVoz.textContent = "Activar Microfono";
    };

    // Gestion de errores
    recognition.onerror = (event) => {
        if (event.error === "not-allowed") {
            estadoVoz.textContent = "Error: Permiso de microfono denegado.";
        } else if (event.error === "no-speech") {
            estadoVoz.textContent = "Error: Silencio.";
        } else {
            estadoVoz.textContent = "Error: " + event.error;
        }
    };

    // Cuando entiende una frase
    recognition.onresult = (event) => {
        // Sacamos el texto y lo limpiamos
        const transcript = event.results[0][0].transcript.trim().toLowerCase();
        comandoTexto.textContent = transcript;

        if (transcript.includes("añade") || transcript.includes("añadir")) {
            // quitamos la palabra clave para quedarnos solo con el nombre del producto
            let producto = transcript.replace("añade", "").replace("añadir", "").trim();

            if (producto) {
                miLista.push(producto);
                actualizarPantalla();
                hablar("Añadido " + producto);
            }

        } else if (transcript.includes("quita") || transcript.includes("quitar")) {
            let producto = transcript.replace("quita", "").replace("quitar", "").trim();
            const indice = miLista.indexOf(producto);

            if (indice !== -1) {
                miLista.splice(indice, 1);
                actualizarPantalla();
                hablar("He quitado " + producto);
            } else {
                // producto no esta
                hablar("El producto " + producto + " no esta en la lista.");
            }

        } else if (transcript.includes("vaciar") || transcript.includes("vacía")) {
            miLista = [];
            actualizarPantalla();
            hablar("He vaciado la lista completa.");

        } else {
            // no entendemos la orden
            hablar("No he entendido la orden. Prueba a decir añade, quita o vaciar.");
        }
    };
}