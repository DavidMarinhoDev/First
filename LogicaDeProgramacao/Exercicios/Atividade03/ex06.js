//Matricula: 25114290113
//Nome: David Marinho Gonçalves Fonseca

//Problema: construa um programa que recebe um número de 1 a 7 e imprime o nome correspondente ao dia da semana.
const prompt = require ('prompt-sync')({sigint:true});

let dia = parseInt(prompt("Diga o dia ( 1 a 7 ): "));
let Dia = "";

switch(dia) {
    case 1:
        Dia = "Domingo";
        break;
    case 2:
        Dia = "Segunda-feira";
        break;
    case 3:
        Dia = "Terça-feira";
        break;
    case 4:
        Dia = "Quarta-feira";
        break;
    case 5:
        Dia = "Quinta-feira";
        break;
    case 6:
        Dia = "Sexta-feira";
        break;
    case 7:
        Dia = "Sábado";
        break;
    default:
        Dia = "Dia inválido";
}

console.log(Dia);