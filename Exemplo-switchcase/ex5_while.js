/*Escreva um programa que usa um loop while 
para imprimir todos os números ímpares entre 1 e 20.
 */

let i = 1;
while (i<=20){
    if ( i % 2 == 1){ //se o valor divido por 2 tiver resto 1
        console.log(i);
    }
    i++;
}