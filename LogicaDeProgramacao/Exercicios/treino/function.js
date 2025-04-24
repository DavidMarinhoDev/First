const prompt = require('prompt-sync')({sigint:true})

var s = 0;
var x = 0;
var y = 0;

function somar(a,b){
    return a + b 
}

x = parseInt(prompt('Digite um numero: '))
y = parseInt(prompt('Digite outro numero: '))

if(isNaN(x) || isNaN(y)){
    console.log('Digite um numero valido!')
} else {
    s = somar(x , y);
    console.log(`O valor de X: ${x}`);
    console.log(`O valor de Y: ${y}`);
    console.log(`A Soma de ${x} + ${y} : ${s}`);
}




