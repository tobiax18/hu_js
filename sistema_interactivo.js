// ============================================
// SISTEMA INTERACTIVO DE MENSAJES
// Descripción: Programa que solicita nombre y edad,
// valida la entrada y muestra mensajes dinámicos.
// ============================================


// 1 SOLICITAR DATOS AL USUARIO

// Solicitar el nombre del usuario
let userName = prompt("Por favor, ingresa tu nombre:");

// Solicitar la edad del usuario (se recibe como texto)
let userAgeInput = prompt("Por favor, ingresa tu edad:");

// Convertimos la edad a número
let userAge = Number(userAgeInput);


// 2 VALIDACIÓN DE LA EDAD

// Verificamos si la edad ingresada NO es un número válido
if (isNaN(userAge) || userAgeInput.trim() === "") {

    console.error("Error: Por favor, ingresa una edad válida en números.");

} else {


    // 3 CONDICIONALES Y MENSAJES DINÁMICOS

    // Validamos si es menor de edad
    if (userAge < 18) {

        let message = `Hola ${userName}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
        alert(message);
        console.log(message);

    } else {

        // Si es mayor o igual a 18
        let message = `Hola ${userName}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
        alert(message);
        console.log(message);

    }
}
