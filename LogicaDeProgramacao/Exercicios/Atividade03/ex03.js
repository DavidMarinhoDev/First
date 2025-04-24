//Matricula: 25114290113
//Nome: David Marinho Gonçalves Fonseca

const prompt = require('prompt-sync')({sigint: true});

let numeroPremiado1 = parseInt(Math.random() * 100);
let numeroPremiado2 = parseInt(Math.random() * 100);
let numeroPremiado3 = parseInt(Math.random() * 100);

for (let tentativas = 1; tentativas <= 3; tentativas++){
    let palpite = parseInt(prompt(`Escolha um número premiado, tentativa numero ${tentativas}: `));
    if (palpite === numeroPremiado1 || palpite === numeroPremiado2 || palpite === numeroPremiado3) {
        console.log(`Parabéns! Você acertou! O número premiado é: ${palpite}`);
        break;
    }
}
console.log(`Os números premiados foram: ${numeroPremiado1}, ${numeroPremiado2}, ${numeroPremiado3}`);


