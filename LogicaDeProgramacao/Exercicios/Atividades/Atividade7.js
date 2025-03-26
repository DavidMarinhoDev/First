// Matricula: 25114290113 
// Nome: David Marinho Gonçalves Fonseca
// Atividade 07

const prompt = require ('prompt-sync') ({sigint: true});

let per = prompt("Escolha um ano entre 1970 e 2025: ");
let ano = parseInt(per);

if( ano < 1970 || ano > 2025){
    console.log("Ano inválido!");
} else {
    //ano = ano + 4
    if (ano % 4 === 2 ){
        console.log("O ano escolhido foi um ano de Copa do Mundo!");
    } else {
        console.log("O Ano escolhido não foi de Copa do Mundo!");
    }
}