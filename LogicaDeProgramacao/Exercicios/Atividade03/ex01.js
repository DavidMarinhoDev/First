//Matricula: 25114290113
//Nome: David Marinho Gonçalves Fonseca

const prompt = require('prompt-sync')({sigint: true});

let hora = parseInt(prompt('Digite a hora: '));
let minutos = 30;
let distancia = parseFloat(prompt('Digite a distancia: '));
let valor = 0;

if (hora >= 0 && hora <= 6) {
    valor = 5.30 + 4.40 + distancia;
} else if (hora >= 6 && hora <= 18) {
    valor = 3.30 + 3.50 + distancia;
} else {
    valor = 4.30 + 4.10 + distancia;
}

console.log(`São ${hora} horas e ${minutos} minutos`);
console.log(`O valor da passagem é: R$ ${valor.toFixed(2)}`);
