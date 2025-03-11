/**
 * Mi dia a dia
 *
 * Vamos a escribir un programa que muestre, para cada hora del dia, que actividad realiza un Sim en Villa Lobo.
 * Muestra qué actividad realiza la persona por el terminal PARA CADA HORA.
 *
 * 1. A las 8, el sim se despierta
 * 2. A las 9, el sim desayuna
 * 3. De 10 a 16, el sim estudia Front End
 * 4. A las 17, siesta
 * 5. De 18 a 22, el sim tiene tiempo libre
 * 6. A las 22, el sim cena
 * 7. A las 23, el sim se va a dormir
 *
 * Escribe un bucle, con los condicionales adecuados dentro del bucle, para que muestre por el terminal lo que hace el sim a cada hora. La idea es que el bucle empiece en hora_actual y acabe en hora_dormir
 *
 * Ejemplo:
 *
 * "A las 8, el sim se despierta"
 * "A las 9, el sim desayuna"
 * "A las 10, el sim estudia Front End"
 * "A las 11, el sim estudia Front End"
 * ....
 * "A las 23, el sim se va a dormir"
 */


tareasSim = [24];
for(let x=0; x<8 ; x++){
    tareasSim[x] = "el sim duerme";
}
tareasSim[8]= "A las 8, el sim se despierta";
tareasSim[9] = "A las 9, el sim desayuna";
for(let x=10; x<= 16; x++){
    tareasSim[x] = "el sim estudia Front End";
}
tareasSim[17]="siesta";
for(let x=18; x< 22; x++){
    tareasSim[x] = "el sim tiene tiempo libre";
}
tareasSim[22]="el sim cena";
tareasSim[23]="el sim se va a dormir";
tareasSim[24]="el sim duerme";
console.log(tareasSim[22]);


let hora_actual = 8;
let hora_dormir = 24;
while (hora_actual<hora_dormir){
    console.log(hora_actual + " horas: " + tareasSim[hora_actual])
    hora_actual++;
}
// Resultado esperado aproximado: https://oscarm.tinytake.com/msc/ODc4NTEzNl8yMjIwNTc2Nw
