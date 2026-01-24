/*Escreva um programa que continua pedindo ao usuário para 
inserir uma senha até que a senha correta seja digitada.
 */

let senhaCorreta = "Exapicor2026*";
let senhaDigitada = "";

while (senhaDigitada !== senhaCorreta){
    senhaDigitada = prompt("Digite a senha: ");

    if (senhaDigitada !== senhaCorreta){
        alert("Senha Incorreta! Tente novamente.")
    }
}

alert("Senha correta! Acesso liberado para Exapicor");