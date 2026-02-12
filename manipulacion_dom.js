// MINI APP - LISTA DE NOTAS CON LOCAL STORAGE

// 1 SELECCIÓN DE ELEMENTOS DEL DOM

// Seleccionamos usando getElementById
const inputNota = document.getElementById("inputNota");

// Seleccionamos usando querySelector
const btnAgregar = document.querySelector("#btnAgregar");
const listaNotas = document.querySelector("#listaNotas");

// Verificamos que existen
console.log("Input:", inputNota);
console.log("Botón:", btnAgregar);
console.log("Lista:", listaNotas);


// 2 ARREGLO EN MEMORIA PARA LAS NOTAS

let notas = [];


// 3 FUNCIÓN PARA GUARDAR EN LOCAL STORAGE

function guardarNotas() {

    localStorage.setItem("notas", JSON.stringify(notas));

    console.log("Notas guardadas en Local Storage:", notas.length);
}


// 4 FUNCIÓN PARA CREAR UNA NOTA EN EL DOM

function crearNotaElemento(textoNota) {

    // Crear elemento li
    const li = document.createElement("li");

    // Crear texto de la nota
    li.textContent = textoNota + " ";


    // Crear botón eliminar
    const btnEliminar = document.createElement("button");

    btnEliminar.textContent = "Eliminar";


    // Evento para eliminar nota
    btnEliminar.addEventListener("click", function () {

        // Eliminar del DOM usando removeChild
        listaNotas.removeChild(li);

        // Eliminar del arreglo
        notas = notas.filter(nota => nota !== textoNota);

        // Guardar cambios
        guardarNotas();

        console.log("Nota eliminada:", textoNota);

    });


    // Agregar botón al li
    li.appendChild(btnEliminar);


    // Agregar li a la lista
    listaNotas.appendChild(li);

}


// 5 EVENTO PARA AGREGAR NOTAS

btnAgregar.addEventListener("click", function () {

    const textoNota = inputNota.value.trim();


    // Validación
    if (textoNota === "") {

        console.log("Por favor escribe una nota válida.");
        return;

    }


    // Agregar al arreglo
    notas.push(textoNota);


    // Crear en el DOM
    crearNotaElemento(textoNota);


    // Guardar en Local Storage
    guardarNotas();


    // Limpiar input
    inputNota.value = "";

    // Enfocar input
    inputNota.focus();


    console.log("Nota agregada:", textoNota);

});


// 6 CARGAR NOTAS DESDE LOCAL STORAGE

function cargarNotas() {

    const notasGuardadas = localStorage.getItem("notas");

    if (notasGuardadas) {

        notas = JSON.parse(notasGuardadas);

        // Renderizar cada nota
        notas.forEach(function (nota) {

            crearNotaElemento(nota);

        });

        console.log("Notas cargadas:", notas.length);

    }

}

// 7 INICIALIZAR APP
// Cargar notas al abrir la página
cargarNotas();
