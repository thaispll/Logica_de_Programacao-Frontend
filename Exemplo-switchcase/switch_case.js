//Verifica dia da semana
let dia = prompt("Digite o dia da semana: ").toLowerCase().trim();
let diaDaSemana;
switch (dia){
    case "segunda":
        diaDaSemana = "Começo da semana";
        break;
    
        case "sexta":
        diaDaSemana = "Fim de semana chegando!";
        break;
    
    case "sábado":
    case "domingo":
        diaDaSemana = "Dia de descanso!";
        break;

    default:
        diaDaSemana = "Dia normal de trabalho.";
}

document.writeln(`
    <h1>Hoje é ${dia}</h1>
    <h2> ${diaDaSemana}</h2>
    <p><button onclick="location.reload()">Novo dia</button></p>
    `);

