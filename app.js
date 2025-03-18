// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];  // Lista de ammigos

function agregarAmigo() {
    let input = document.getElementById ("amigo");
    let nombre = input.value.trim();

    if (!nombre) {
        mostrarMensaje ("Para jugar al amigo Secreto debes ingresar el nombre de tus amigos.", "red");
        return;
    }
   
    if (amigos.includes(nombre)) {
        mostrarMensaje("Este amigo ya está en la lista, por favor ingrese otro.", "red");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpia el campo de entrada
}

function actualizarLista() {
    let lista = document.getElementById ("listaAmigos");
    lista.innerHTML = "";  // Limpia la lista

    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    })
}

// Detecta cuando se presiona "Enter" en el campo de entrada
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();   // Evita que se recargue la página
        agregarAmigo();           // Llama a la funcion que agrega el amigo
    }
})

function sortearAmigo() {
    if (amigos.length < 2) {
        mostrarMensaje("Debes agregar al menos dos amigos para poder jugar.", "red");
        return;    
    }
    
    let mezclados = [...amigos];  // Copia de la lista
    do {
        mezclados = [...amigos].sort(() => Math.random() - 0.5);      // Mezcla la lista aleatoriamente
    }   while (amigos.some((nombre, i) => nombre === mezclados[i]));   // Asegura que no se asigne asi mismo

    let resultado = amigos.map((nombre, i) => `${nombre} -> ${mezclados[i]}`).join("<br>");

    document.getElementById("resultado").innerHTML = `<strong> Resultados del sorteo: </strog><br>${resultado}`;
}

function limpiarLista() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    mostrarMensaje("La lista de amigos, fué eliminada.", "blue");
}

function mostrarMensaje(texto, color) {
    let mensaje = document.getElementById("mensaje");
    mensaje.textContent = texto;
    mensaje.style.color = color;
    mensaje.style.fontSize = "20px";
    mensaje.style.fontWeight = "bold";
}