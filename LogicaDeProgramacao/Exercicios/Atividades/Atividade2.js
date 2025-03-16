// Matricula: 25114290113 
// Nome: David Marinho Gonçalves Fonseca
// Atividade 02

const prompt = require ('prompt-sync') ({sigint: true})

var n1 = parseInt(prompt("Digite um número: "));
var n2 = parseInt(prompt("Digite outro número: "));
var n3 = parseInt(prompt("Digite mais um número: "));
var conta ;

if (isNaN(n1) || isNaN(n2) || isNaN(n3)){
    console.log("Digite um número válido!")
} else {
    conta = (n1 + n2 + n3) / 3 ;
    console.log(`A média aritmética de ${n1}, ${n2}, ${n3} é`, conta.toFixed(2));
}

