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

// let dia = prompt("Dame el dia de la semana").toLowerCase();

// switch (dia) {
//     case 'lunes':
//         console.log("El dia que seleccionastes es Lunes");
//         break;
//     case 'martes':
//         console.log("El dia que seleccionastes es Martes");
//         break;
//     case 'miercoles':
//         console.log("El dia que seleccionastes es Miercoles");
//         break;
//     case 'jueves':
//         console.log("El dia que seleccionastes es Jueves");
//         break;
//     case 'viernes':
//         console.log("El dia que seleccionastes es Viernes");
//         break;
//     case 'sabado':
//         console.log("El dia que seleccionastes es Sabado");
//         break;
//     case 'domingo':
//         console.log("El dia que seleccionastes es Domingo");
//         break;

//     default:
//         console.log("Opcion no es valida")
//         break;
// }

// Operador ternario

// let num1 = 15;
// let num2 = 20;

//                         // condition ? true : false
// let valor = (num1>num2) ? "El numero 1 es mayor" : "El numero 2 es mayor";

// Pedir 2 numeros y que el programa nos diga cual es mayor
// cual es el menor y si son iguales
function calcularMayor() {
    
    let num1 = document.getElementById("numA").value;
    let num2 = document.getElementById("numB").value;
    
    if (parseFloat(num1)>parseFloat(num2)) {
        console.log("El numero 1: "+num1+" es mayor que el numero 2: "+num2);
    } else if (num1==num2){
        console.log("Ambos numeros son iguales")
    } else {
        console.log("El numero 2: "+num2+" es mayor que el numero 1: "+num1);
    }
}

// Pedir un numero y que diga si es par o impar en consola
function calcularPares() {

    let a = document.getElementById("numPar").value;
    let par = a%2;
    
    if (par == 0) {
        console.log("El numero es par");
    }else{
        console.log("El numero es impar");
    }
}


// Pedir dos numeros enteros y devolver el cociente 

function calcularCociente() {
    
    let b = document.getElementById("numero1").value;
    let c = document.getElementById("numero2").value;
    
    let res = parseFloat(b)/parseFloat(c);
    
    if (b == 0) {
        console.log("Error, el 1er numero es 0");
    } else if (c == 0) {
        console.log("Error, el 2do numero es 0");
    }
    
    console.log(res);
}
