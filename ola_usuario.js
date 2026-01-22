//Crie um site que receba o nome do usuário e mostre
// "Olá, [nomedousuario]! Bem-vindo ao meu site." 
//no corpo do site

//Crie um site que receba o nome do usuário 
let nome = prompt("Digite o seu nome:");

if (nome && nome.trim() !== ""){ //trim: retira espaço no inicio e no final 
    //mostre "Olá, [nomedousuario]! Bem-vindo ao meu site." no corpo do site 
    document.writeln(`Olá, ${nome}! Bem-vindo ao meu site.`);
} else {
    document.writeln(`Olá, visitante! Bem-vindo ao meu site.`);
}



/*if condicao{

} else {

}*/
