//Matricula: 25114290113
//Nome: David Marinho Gonçalves Fonseca

const prompt = require('prompt-sync')({sigint: true});

console.log("Escolha uma cor")
console.log("[Verde], [Amarelo], [Vermelho]")
let per = prompt(": ");
let res = per.toLowerCase();
let resp = "";

switch(res){
    case "verde":
        resp = "Siga!";
        break;
    case "amarelo":
        resp = "Atenção!";
        break;
    case "vermelho":
        resp = "Pare!";
        break;
    default:
        resp = "Digite uma cor válida!"
        break;
}
console.log(resp)