// Matricula: 25114290113 
// Nome: David Marinho Gonçalves Fonseca
// Atividade 05
const prompt = require ('prompt-sync') ({sigint : true});

console.log("Escolha uma cor : [VERDE], [AMARELO], [VERMELHO]")
var per = prompt(": ");
var res = per.toLowerCase();

if ( res !== "verde" && res !== "amarelo" && res !== "vermelho"){
    console.log("Escolha uma cor válida!");
} else {
    switch (res){
        case "verde" :
            console.log("Siga!");
            break;
        case "amarelo" :
            console.log("Atenção!");
            break;
        case "vermelho" : 
            console.log("Pare!")
            break;
        default :
            break;
    }
}