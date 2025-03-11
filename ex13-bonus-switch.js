/**
 * Un buen caso para usar switch
 *
 * Queremos escribir un script que, dado un mes del año, nos diga en que trimestre nos encomtramos.
 *
 * Por ejemplo, si mes = 4, deberíamos mostrar por el terminal "Nos encontramos en el segundo trimestre"
 *
 * Explora esta información para averiguar como usar el condicional 'switch'; y cómo se pueden agrupar varios casos: https://javascript.info/switch#grouping-of-case
 *
 */

let mes = 122;
switch (mes) {
    case 1:
    case 2:
    case 3:
        console.log("Primer Trimestre");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Segundo Trimestre");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Tercer Trimestre");
        break;    
    case 10:
    case 11:
    case 12:
        console.log("Cuarto Trimestre");
        break;
    default:
            // executed code when none of the values match the expression
        console.log("El mes introducido no es correcto!");

  }
// Escribir tu código a partir de aquí
