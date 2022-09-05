// let numero1 = parseInt(prompt(' ingrese un numero no mayor a mil'));
// let numero2 = parseInt(prompt(' ingrese un numero entre 10 y 50'));
// if (numero1 <= 1000) {
//     alert("bien hecho en el primer numero!!");
// } else {
//     alert("ingresaste mal el primer numero");
// }
// if ((numero2 <= 50) && (numero2 >= 10)) {
//     alert(" bien hecho en el segundo numero");
// } else {
//     alert("ingresaste mal el segundo numero");
// }
let saludo = prompt("ingrese la palabra hola").toLowerCase();
if (saludo == "hola") {
    alert("hola gracias por saludar");
} else {
    alert("no saludaste correctamente porque escribiste " + saludo);
}