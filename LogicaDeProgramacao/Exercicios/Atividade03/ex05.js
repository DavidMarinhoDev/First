//Matricula: 25114290113
//Nome: David Marinho Gonçalves Fonseca

const prompt = require ('prompt-sync') ({sigint:true });

let dia = parseInt(prompt("Digite o dia do seu anivérsario (1 a 31): "));
let mes = parseInt(prompt("Digite o mês do seu anivérsario (1 a 12): "));
let resp = '';

switch(true){
    case (mes == 1 && dia>=1 && dia<=31):
        resp = dia <= 19 ? "capricornio" : "Aquário";
        break;
    case (mes == 2 && dia>=1 && dia<=31):
        resp = dia <= 18 ? "Aquário" : "Peixes";
        break;
    case (mes == 3 && dia>=1 && dia<=31):
        resp = dia <= 20 ? "Peixes" : "Áries";
        break;
    case (mes == 4 && dia>=1 && dia<=31):
        resp = dia <= 19 ? "Áries" : "Touro";
        break;
    case (mes == 5 && dia>=1 && dia<=31):
        resp = dia <= 20 ? "Touro" : "Gêmeos";
        break;
    case (mes == 6 && dia>=1 && dia<=31):
        resp = dia <= 20 ? "Gêmeos" : "Câncer";
        break;
    case (mes == 7 && dia>=1 && dia<=31):
        resp = dia <= 22 ? "Câncer" : "Leão";
        break;
    case (mes == 8 && dia>=1 && dia<=31):
        resp = dia <= 22 ? "Leão" : "Virgem";
        break;
    case (mes == 9 && dia>=1 && dia<=31):
        resp = dia <= 22 ? "Virgem" : "Libra";
        break;
    case (mes == 10 && dia>=1 && dia<=31):
        resp = dia <= 22 ? "Libra" : "Escorpião";
        break;
    case (mes == 11 && dia>=1 && dia<=31):
        resp = dia <= 21 ? "Escorpião" : "Sargitário";
        break;
    case (mes == 12 && dia>=1 && dia<=31):
        resp = dia <= 21 ? "Sargitário" : "Capricórnio";
        break;
    default:
        resp = "Digite um dia e mês válido!"
        break;      
}
console.log(resp)