/**
 * Ejercicio: ¿Mostrar números pares o impares?
 *
 * La operación número % 2; nos indica si un número no
 * tiene residuo cuando se devide por 2. Nos permite saber si un número es par o impar. Ejemplo 8 % 2 = 0. Como el residuo es 0; podemos decir que 8 es un número par.
 *
 * Completa el script. Muestra por el terminal si en la iteración actual del bucle 'i' es un número par o impar.
 *
 * Ejemplo: El script debería mostrar algo así:
 *
 * "El número 0 es par !"
 * "El número 1 es impar !"
 * "El número 2 es par !"
 * .
 * .
 * "El número 9 es impar !"
 *
 *
 */

let ultimoNumeroComprobar = 10;
let esNumeroPar;
let parImpar;
for (let i = 0; i < ultimoNumeroComprobar; i++) {
  esNumeroPar = i % 2;
  console.log(`El número ${i} es par o impar? ${esNumeroPar}`);
  if ( esNumeroPar = i % 2==0){
    parImpar = "par"
  } else {
    parImpar = "impar"
  }
  console.log(`El número ${i} es ${parImpar}!`);
  // Modificar a partir de aquí

}

/**
 * Resultado esperado: https://oscarm.tinytake.com/msc/ODc4MzY0N18yMjIwMzg4Mg
 */
