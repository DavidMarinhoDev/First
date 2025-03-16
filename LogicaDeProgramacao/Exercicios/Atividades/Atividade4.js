// Matricula : 25114290113
// Nome : David Marinho Gonçalves Fonseca
// Atividade 4

const prompt = require('prompt-sync') ({sigint: true});
var n = parseInt(prompt("Digite um número : "))

if (isNaN(n)) {
    console.log("Digite um número válido!")
} else {
    if (n % 2 == 0){
        console.log(`O número ${n} é PAR`)
    } else {
        console.log(`O número ${n} é IMPAR`)
    }
}

    

