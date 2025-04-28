const prompt = require('prompt-sync')({sigint:true})

var n = parseInt(prompt('Digite um numero: '))
var r = "";

function parouimpar(v) {
    if (v % 2 == 0){
        return "PAR";
    }else {
        return "impar"
    }
}

r = parouimpar(n)
console.log(`O numero ${n} e um valor: ${r}`)