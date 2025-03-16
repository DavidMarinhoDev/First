// Matricula: 25114290113 
// Nome: David Marinho Gonçalves Fonseca
// Atividade 03

var n1 = 5;
var n2 = 10;
var n3 = 7;
var p1 = 0.3;
var p2 = 0.5;
var p3 = 0.2;


var somaPesos = p1 + p2 + p3;
var soma = (p1 * n1) + (n2 * p2) + (n3 * p3);
var conta = soma / somaPesos;

if (somaPesos > 1){
    console.log("A soma dos pesos deve ser 1");
} else{
    console.log(`A media aritmetica pondera de ${soma} / ${somaPesos} é :`, conta.toFixed(2));
}
