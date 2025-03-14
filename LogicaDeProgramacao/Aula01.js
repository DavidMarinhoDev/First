const prompt = require('prompt-sync') ({sigint: true});
var nome = prompt("Digite seu nome: ")
var sobrenome = prompt("Digite seu sobrenome: ")
var idade = parseInt(prompt("Digite sua idade: "));
var NomeCompleto = nome + sobrenome

console.log(`Seu nome é ${nome}`);
console.log(`Seu sobrenome é ${sobrenome}`);
console.log(`Seu nome completo é ${NomeCompleto}`);

let soma = 0;
if (idade >= 18 ){
    console.log("Você é maior de idade!")
    }
else {
    let c = 0;
    for (c = 1; c < 6; c++) {
        console.log(c);
        soma += c + 1;
    }
}