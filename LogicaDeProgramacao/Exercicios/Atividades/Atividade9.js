// Matricula: 25114290113 
// Nome: David Marinho Gonçalves Fonseca
// Atividade 09

const prompt = require('prompt-sync')({sigint: true});

let n1 = parseFloat(prompt("Digite o valor da sua Primeira nota (entre 0 e 10): "))
let n2 = parseFloat(prompt("Digite o valor da sua Segunda nota (entre 0 e 10): "))
let n3 = parseFloat(prompt("Digite o valor da sua Terceira nota (entre 0 e 10): "))

let p1 = 3;
let p2 = 3;
let p3 = 4;

if ((n1 >= 0 && n1 <= 10) && (n2 >= 0 && n2 <= 10) && (n3 >= 0 && n3 <= 10)){
    let somaP = p1 + p2 + p3;
    let somaN = (p1 * n1) + (n2 * p2) + (n3 * p3);
    let mediaFinal = somaN / somaP;
    console.log(`A media final é ${mediaFinal.toFixed(2)}`)
    if (mediaFinal >= 5) {
        console.log("O estudante foi aprovado.");
    } else {
        console.log("O estudante foi reprovado.");
    }
} else {
    console.log("Somente notas entre 0 e 10!")
}

