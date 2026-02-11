// GESTIÓN DE DATOS CON OBJETOS, SETS Y MAPS
// Descripción: Manejo de estructuras de datos avanzadas en JavaScript con validaciones.

// 1 CREACIÓN DEL OBJETO DE PRODUCTOS

// Creamos un objeto que almacena varios productos
const productos = {
    producto1: { id: 1, nombre: "Laptop", precio: 2500 },
    producto2: { id: 2, nombre: "Mouse", precio: 80 },
    producto3: { id: 3, nombre: "Teclado", precio: 150 }
};


// 2 VALIDACIÓN DE PRODUCTOS

// Función para validar que cada producto tenga
// id, nombre y precio correctos
function validarProducto(producto) {

    if (
        typeof producto.id !== "number" ||
        typeof producto.nombre !== "string" ||
        typeof producto.precio !== "number"
    ) {
        console.error("Error: Producto con datos inválidos ->", producto);
        return false;
    }

    return true;
}

// Validamos todos los productos
for (let clave in productos) {
    validarProducto(productos[clave]);
}


// 3 USO DE SET (UNICIDAD DE DATOS)

// Creamos un Set con números repetidos
const numeros = new Set([1, 2, 2, 3, 4, 4, 5]);

console.log("Contenido inicial del Set (sin duplicados):");
console.log(numeros);

// Agregar un nuevo número
numeros.add(6);

// Verificar si existe un número
console.log("¿Existe el número 3?", numeros.has(3));

// Eliminar un número
numeros.delete(2);

console.log("Set después de modificaciones:");

// Recorrer el Set con for...of
for (const numero of numeros) {
    console.log(numero);
}


// 4 CREACIÓN DE MAP (CLAVE - VALOR)

// Creamos un Map que relaciona categoría con nombre del producto
const categorias = new Map();

categorias.set("Tecnología", "Laptop");
categorias.set("Accesorios", "Mouse");
categorias.set("Periféricos", "Teclado");


// 5 ITERACIÓN SOBRE LAS ESTRUCTURAS

console.log("=== LISTA COMPLETA DE PRODUCTOS ===");

// Usando for...in para recorrer el objeto
for (let clave in productos) {
    console.log(`${clave}:`, productos[clave]);
}

// Usando Object.keys(), Object.values(), Object.entries()
console.log("Claves del objeto:", Object.keys(productos));
console.log("Valores del objeto:", Object.values(productos));
console.log("Entradas del objeto:", Object.entries(productos));


console.log("=== RECORRIDO DEL MAP ===");

// Usando forEach para recorrer el Map
categorias.forEach((valor, clave) => {
    console.log(`Categoría: ${clave} -> Producto: ${valor}`);
});


// 6 PRUEBAS FINALES

console.log("=== RESUMEN FINAL ===");
console.log("Productos:", productos);
console.log("Productos únicos (Set):", numeros);
console.log("Categorías (Map):", categorias);
