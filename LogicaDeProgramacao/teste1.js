const entrada = require('prompt-sync') ({sigint: true});
console.log("-------------------------------");
var n1 = parseInt(entrada("Digite um numero: "));
console.log("-------------------------------");
var n2 = parseInt(entrada("Digite outro número: "));
var soma = n1 + n2;
var subtrai = n1 - n2
var mutiplica = n1 * n2;
var divide = n1 / n2

if (isNaN (n1) || isNaN(n2)){
    console.log("Digite um número válido!")
} else {
    console.log("-------------------------------");
    console.log(`A soma de ${n1} + ${n2} é igual a: ${soma}`)
    console.log("-------------------------------");
    console.log("-------------------------------");
    console.log(`A soma de ${n1} + ${n2} é igual a: ${subtrai}`)
    console.log("-------------------------------");
    console.log("-------------------------------");
    console.log(`A soma de ${n1} + ${n2} é igual a: ${divide}`)
    console.log("-------------------------------");
    console.log("-------------------------------");
    console.log(`A soma de ${n1} + ${n2} é igual a: ${mutiplica}`)
console.log("-------------------------------");
}




