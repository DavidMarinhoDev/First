const prompt = require('prompt-sync')({sigint: true});

var n1 ; 
var n2 ;
var n3 ;
var maior = 0;

n1 = parseInt(prompt("Digite um número: "));
n2 = parseInt(prompt("Digite outro número: "));
n3 = parseInt(prompt("Digite mais um número: "));
if (isNaN(n1) || isNaN(n2) || isNaN(n3)){
    console.log("Digite um numero valido!")
} else {
    if (n1 > n2 && n1 > n3){
        maior += n1;
    } else if ( n2 > n1 && n2 > n3){
        maior += n2;
    } else {
        maior += n3;
    }
    console.log(`O maior número é ${maior}`);
}

