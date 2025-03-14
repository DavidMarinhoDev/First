const prompt = require('prompt-sync') ({sigint: true});

var n1 = parseFloat(prompt("Digite um número : "));

if ( n1 % 2 == 0){
    console.log("O número é par");
} else {
    console.log("O número é impar");
}