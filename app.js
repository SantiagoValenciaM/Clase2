// // Condicionales if, if else, switch

// let num1 = 3;
// let num2 = 20;

// if (num1>num2) {
//     console.log("El numero "+ num1 + " es mayor al numero " + num2);
// } else {
//     console.log("El numero "+ num2 + " es mayor al numero " + num1);
// }

// // Pedir la edad del usuario, decirle si es mayor de edad
// // siempre y cuando te de un valor mayor a 0

// let edad = prompt("Dame tu edad");

// if (edad>0) {
//     if(edad>=18){
//         document.write("Eres mayor de edad");
//     } else {
//         document.write("Eres menor de edad");
//     }
// } else {
//     document.write("Edad no valida");
// }

let dia = prompt("Dame el dia de la semana").toLowerCase();

switch (dia) {
    case 'lunes':
        console.log("El dia que seleccionastes es Lunes");
        break;
    case 'martes':
        console.log("El dia que seleccionastes es Martes");
        break;
    case 'miercoles':
        console.log("El dia que seleccionastes es Miercoles");
        break;
    case 'jueves':
        console.log("El dia que seleccionastes es Jueves");
        break;
    case 'viernes':
        console.log("El dia que seleccionastes es Viernes");
        break;
    case 'sabado':
        console.log("El dia que seleccionastes es Sabado");
        break;
    case 'domingo':
        console.log("El dia que seleccionastes es Domingo");
        break;

    default:
        console.log("Opcion no es valida")
        break;
}