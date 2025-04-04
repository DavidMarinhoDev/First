//Matricula: 25114290113
//Nome: David Marinho Gonçalves Fonseca

const prompt = require('prompt-sync')({sigint: true});

let numeroPremiado1 = Math.floor(Math.random() * 100) + 1;
let numeroPremiado2 = Math.floor(Math.random() * 100) + 1;
let numeroPremiado3 = Math.floor(Math.random() * 100) + 1;

let palpite1 = parseInt(prompt('Digite o primeiro número: '));
let palpite2 = parseInt(prompt('Digite o segundo número: '));
let palpite3 = parseInt(prompt('Digite o terceiro número: '));

if (isNaN(palpite1) || isNaN(palpite2) || isNaN(palpite3)) {
    console.log('Digite um número válido');
} else{
    if (palpite1 === numeroPremiado1 || palpite1 === numeroPremiado2 || palpite1 === numeroPremiado3) {
        console.log(`Parabéns! Você acertou! O número premiado é: ${palpite1}`);
    } else {
        console.log(`Que pena! Você não acertou. O 1º número premiado é: ${numeroPremiado1}`);
    }
    
    if (palpite2 === numeroPremiado1 || palpite2 === numeroPremiado2 || palpite2 === numeroPremiado3) {
        console.log(`Parabéns! Você acertou! O número premiado é: ${palpite2}`);
    } else {
        console.log(`Que pena! Você não acertou. O 2º número premiado é: ${numeroPremiado2}`);
    }   
    
    if (palpite3 === numeroPremiado1 || palpite3 === numeroPremiado2 || palpite3 === numeroPremiado3) {
        console.log(`Parabéns! Você acertou! O número premiado é: ${palpite3}`);
    } else {
        console.log(`Que pena! Você não acertou. O 3º número premiado é: ${numeroPremiado3}`);
    }   
    
    console.log(`Os números premiados foram: ${numeroPremiado1}, ${numeroPremiado2}, ${numeroPremiado3}`);    
}




