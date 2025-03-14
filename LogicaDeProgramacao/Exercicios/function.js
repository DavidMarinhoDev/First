

var soma = 0;
var x = 0;
var y = 0;

function somar() {
    x = x + 1;
    y = y + 2;
    soma = x + y 
    console.log(`O valor de X: ${x}`);
    console.log(`O valor de Y: ${y}`);
    console.log(`A Soma de ${x} + ${y} : ${soma}`);
 
}

x = parseInt(prompt('Digite um numero: '))
y = parseInt(prompt('Digite outro numero: '))

if(isNaN(x) || isNaN(y)){
    console.log('Digite um numero valido!')
} else {
    somar(x , y);
}

console.log(`Valor de X = ${x}`);
console.log(`Valor de Y = ${y}`);


