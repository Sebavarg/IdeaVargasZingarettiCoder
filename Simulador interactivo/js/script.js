 let nombreProf = prompt("Bienvenido al Portal del Profesor/Maestro. \n Ingrese su nombre. Recuerde inspeccionar la consola para mas info");
 do {
     opcionElegida = menu();
     switch (opcionElegida) {
         case "1":
             promedio();
             break;
         case "2":
             escala();
             break;
         case "3":
             alert("Gracias por su visita")
             break;
     }
 } while (opcionElegida != 3);

 function menu() {
     let option = prompt("Hola " + nombreProf + " ingrese una opcion : \n  1/Obtener Promedio de Notas. \n 2/ Obtener Escala de Notas \n 3/Salir")
     while (option == 0 || option > 3) {
         option = prompt(nombreProf + " Recuerde ingresar un numero del 1 al 3. \n 1 Obtener Promedio de Notas. \n 2/ Obtener Escala de Notas \n 3/Salir")
     }
     return option;
 }

 function promedio() {
     let alumnosTotales = prompt("Ingrese la cantidad de alumnos que tiene en el curso");
     let x = parseInt(alumnosTotales);
     let notaTotal = 0;
     let notaIndividual = 0;
     for (let index = 1; index < x + 1; index++) {
         notaIndividual = parseInt(prompt("Usted indico que tiene " + alumnosTotales + " cantidad de alumnos. Ingrese nota de alumno numero " + index));
         notaTotal = (notaTotal + notaIndividual);
     }
     let promedio = (notaTotal / alumnosTotales);
     alert(" el promedio general del curso es " + promedio);
 }

 function escala() {
     let nota = prompt("Ingrese cual es la nota maxima, el total de puntos, para generar su escala de notas");
     let inicio = 1;
     let notaMin = (nota * (inicio - 0.5)) / 10;
     let notaMax = (nota * (inicio + 0.5)) / 10;

     for (let i = 1; i < 11; i++) {
         notaMin = (nota * (i - 0.5)) / 10;
         if (i == 1) {
             notaMin = 0;
         }
         notaMax = ((nota * (i + 0.5)) / 10) - 0.1;
         if (i == 10) {
             notaMax = nota;
         }
         console.log("La nota " + i + " es desde " + notaMin + "puntos hasta " + notaMax + " puntos ");
     }
     alert("Recuerde revisar consola para acceder a la escala. Cosulte a su programador más cercano")
 }