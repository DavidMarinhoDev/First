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
    }   
    if( acerto == false){
        palpite = parseInt(prompt('Digite o outro número até acertar: '));

    } else {
        
    }
}
console.log(`Os números premiados foram: ${numeroPremiado1}, ${numeroPremiado2}, ${numeroPremiado3}`);

/*while(acerto == false){
    if (isNaN(palpite1) || isNaN(palpite2) || isNaN(palpite3)) {
        console.log('Digite um número válido');
    } else{
        if (palpite1 === numeroPremiado1 || palpite1 === numeroPremiado2 || palpite1 === numeroPremiado3) {
            console.log(`Parabéns! Você acertou! O número premiado é: ${palpite1}`);
            acerto += true;
        }
        if (palpite2 === numeroPremiado1 || palpite2 === numeroPremiado2 || palpite2 === numeroPremiado3) {
            console.log(`Parabéns! Você acertou! O número premiado é: ${palpite2}`);
            acerto = true;
        }
        if (palpite3 === numeroPremiado1 || palpite3 === numeroPremiado2 || palpite3 === numeroPremiado3) {
            console.log(`Parabéns! Você acertou! O número premiado é: ${palpite3}`);
            acerto += true;
        }   
        if( acerto == false){
            let palpite = parseInt(prompt('Digite o outro número até acertar: '));
        } else if (palpite == numeroPremiado1 || palpite == numeroPremiado2 || palpite == numeroPremiado3){
            acerto += true
        }
        console.log(`Os números premiados foram: ${numeroPremiado1}, ${numeroPremiado2}, ${numeroPremiado3}`);    
    }
    
}*/





