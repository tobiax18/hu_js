// MINI APP - GESTIÓN DE PRODUCTOS
// DOM + LOCAL STORAGE + FETCH API + CRUD

// 1 VARIABLES Y SELECCIÓN DEL DOM

const inputNombre = document.getElementById("inputNombre");
const inputPrecio = document.getElementById("inputPrecio");

const btnAgregar = document.getElementById("btnAgregar");
const btnSincronizar = document.getElementById("btnSincronizar");

const listaProductos = document.getElementById("listaProductos");

// Arreglo global de productos
let productos = [];


// 2 CONFIGURACIÓN DE API (JSON SERVER)

// Cambia esta URL si usas otro puerto
const API_URL = "http://localhost:3000/productos";


// 3 FUNCIONES DE LOCAL STORAGE

// Guardar productos en Local Storage
function guardarLocalStorage() {

    localStorage.setItem("productos", JSON.stringify(productos));

    console.log("Productos guardados en Local Storage");

}

// Cargar productos desde Local Storage
function cargarLocalStorage() {

    const datosGuardados = localStorage.getItem("productos");

    if (datosGuardados) {

        productos = JSON.parse(datosGuardados);

        productos.forEach(producto => {
            crearProductoDOM(producto);
        });

        console.log("Productos cargados desde Local Storage:", productos.length);
    }
}


// 4 MANIPULACIÓN DEL DOM

// Crear producto en el DOM
function crearProductoDOM(producto) {

    const li = document.createElement("li");

    li.textContent = `${producto.nombre} - $${producto.precio} `;


    // Botón eliminar
    const btnEliminar = document.createElement("button");

    btnEliminar.textContent = "Eliminar";


    btnEliminar.addEventListener("click", async function () {

        // Eliminar del DOM
        listaProductos.removeChild(li);

        // Eliminar del arreglo
        productos = productos.filter(p => p.id !== producto.id);

        // Guardar cambios
        guardarLocalStorage();

        // Eliminar de la API
        await eliminarProductoAPI(producto.id);

        console.log("Producto eliminado:", producto.nombre);

    });


    li.appendChild(btnEliminar);

    listaProductos.appendChild(li);

}


// 5 AGREGAR PRODUCTOS

btnAgregar.addEventListener("click", async function () {

    const nombre = inputNombre.value.trim();
    const precio = parseFloat(inputPrecio.value);


    // Validación
    if (nombre === "" || isNaN(precio)) {

        console.error("Datos inválidos");
        return;

    }


    // Crear objeto producto
    const producto = {
        id: Date.now(),
        nombre,
        precio
    };


    // Guardar en arreglo
    productos.push(producto);


    // Mostrar en DOM
    crearProductoDOM(producto);


    // Guardar en Local Storage
    guardarLocalStorage();


    // Enviar a API
    await crearProductoAPI(producto);


    // Limpiar inputs
    inputNombre.value = "";
    inputPrecio.value = "";

    inputNombre.focus();

    console.log("Producto agregado:", producto);

});


// 6 FETCH API - GET

async function obtenerProductosAPI() {

    try {

        const response = await fetch(API_URL);

        const data = await response.json();

        console.log("Productos desde API:", data);

    } catch (error) {

        console.error("Error al obtener productos:", error);

    }
}


// 7 FETCH API - POST

async function crearProductoAPI(producto) {

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(producto)

        });

        const data = await response.json();

        console.log("Producto enviado a API:", data);

    } catch (error) {

        console.error("Error al crear producto:", error);

    }
}


// 8 FETCH API - DELETE

async function eliminarProductoAPI(id) {

    try {

        await fetch(`${API_URL}/${id}`, {

            method: "DELETE"

        });

        console.log("Producto eliminado en API");

    } catch (error) {

        console.error("Error al eliminar producto:", error);

    }
}


// 9 FETCH API - PUT

async function actualizarProductoAPI(id, productoActualizado) {

    try {

        const response = await fetch(`${API_URL}/${id}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(productoActualizado)

        });

        const data = await response.json();

        console.log("Producto actualizado:", data);

    } catch (error) {

        console.error("Error al actualizar producto:", error);

    }
}

// 10 BOTÓN SINCRONIZAR
btnSincronizar.addEventListener("click", function () {

    obtenerProductosAPI();

});

// 11 INICIALIZACIÓN
cargarLocalStorage();
