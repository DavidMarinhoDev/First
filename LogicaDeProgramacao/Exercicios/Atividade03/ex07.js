const prompt = require("prompt-sync")({sigint:true});
let numPremiado = [33, 100, 22];
let tentativas = 3;

for(let i = 0; i < tentativas; i++){
    let resp = parseInt(prompt(`Faça sua tentativa. Tentativa número ${i+1}: `));
    if (numPremiado.includes(resp)){
        console.log(`Você acertou número premiado é ${resp}`);
        break;
    }
}
console.log(`Números premiados são ${numPremiado[0]}, ${numPremiado[1]}, ${numPremiado[2]}`)
