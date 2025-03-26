// Matricula: 25114290113 
// Nome: David Marinho Gonçalves Fonseca
// Atividade 08

const prompt = require ('prompt-sync') ({sigint: true});

let per = prompt("Escolha um ano entre 1890 e 2025: ");
let ano = parseInt(per);

if( ano < 1890 || ano > 2025){
    console.log("Ano inválido!");
} else {
    if (ano == 1892){
        console.log("O Ano escolhido não foi de Jogos Olimpicos!");
    } else {
        if (ano % 4 === 0 ){
            console.log("O ano escolhido foi um ano de Jogos Olimpicos!");
        } else {
            console.log("O Ano escolhido não foi de Jogos Olimpicos!");
        }
    }
}