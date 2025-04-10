//Matricula: 25114290113
//Nome: David Marinho Gonçalves Fonseca

const prompt = require('prompt-sync')({sigint: true});

let numeroPremiado1 = 11;
let numeroPremiado2 = 22;
let numeroPremiado3 = 33;
let palpite = parseInt(prompt('Escolha um número premiado, você tem 4 tentativas: '));
var acerto = false;

for (let tentativas = 0; tentativas < 3; tentativas++){
    if (palpite === numeroPremiado1 || palpite === numeroPremiado2 || palpite === numeroPremiado3) {
        console.log(`Parabéns! Você acertou! O número premiado é: ${palpite}`);
        acerto += true;
        break;
    }else if( acerto == false){
        palpite = parseInt(prompt('Digite o outro número até acertar: '));
    }
}
console.log(`Os números premiados foram: ${numeroPremiado1}, ${numeroPremiado2}, ${numeroPremiado3}`);


