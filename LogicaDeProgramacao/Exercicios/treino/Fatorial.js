const prompt = require('prompt-sync')({sigint: true});

var f = 0;

function Fatorial(v){
    let r = 1;
    for (let c = 1; c <= v; c++){
        r *= c
    }
    return r
}
var n = parseInt(prompt('Digite um numero: '));
f = Fatorial(n)
console.log(`O valor fatorial de ${n} e: ${f}`)