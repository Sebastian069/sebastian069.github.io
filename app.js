// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Actualizar lista en pantalla
    actualizarLista();

    // Limpiar campo de texto
    input.value = "";
}

// Función para actualizar la lista visible
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar lista previa

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpiar resultado previo

    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    // Generar índice aleatorio
    let indice = Math.floor(Math.random() * amigos.length);
    let seleccionado = amigos[indice];

    // Mostrar resultado
    let li = document.createElement("li");
    li.textContent = "🎉 El amigo secreto es: " + seleccionado;
    resultado.appendChild(li);
}
