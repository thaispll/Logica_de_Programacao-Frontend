/*Crie um programa que utiliza um loop while para 
calcular a soma dos números de 1 a 100.
*/

let soma = 0;
let i= 1;

while (i<=100 ){
    soma += i; //soma: aonde o valor das somas ficará guardado
    i++; //contadora até 100
    console.log(soma);
}

console.log(`Soma de 1 a 100: ${soma}`)