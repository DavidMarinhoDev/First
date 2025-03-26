// Matricula: 25114290113 
// Nome: David Marinho Gonçalves Fonseca
// Atividade 06

const prompt = require('prompt-sync')({sigint: true});

let num = parseInt(prompt('Digite um numero: '));

if(isNaN(num)){
    console.log("Digite um número Válido!");
} else {
    if (num % 3 === 0) {
        console.log('o número é múltiplo de 3');
    } else {
        console.log('o número não é múltiplo de 3');
    }
}

