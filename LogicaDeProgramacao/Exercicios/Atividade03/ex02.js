//Matricula: 25114290113
//Nome: David Marinho Gonçalves Fonseca

const prompt = require('prompt-sync')({sigint: true});

let anoInicial = 2024;
let anoFinal = 2500;
let ano = parseInt(prompt('Digite o ano: '));

if (ano >= anoInicial && ano <= anoFinal) {
    if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
        console.log('O ano é bissexto');
    } else {
        console.log('O ano não é bissexto');
    }
} else {
    console.log('O ano é invalido');
}
