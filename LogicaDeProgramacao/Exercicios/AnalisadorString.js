const prompt = require('prompt-sync')({sigint: true});

var n = prompt("Digite seu nome: ");

console.log("Total de letras do seu nome: ", n.length)
console.log("Seu nome em maiusculas: ", n.toUpperCase())
console.log("Seu nome em minusculas: ", n.toLowerCase())
console.log("A primeira letra do seu nome e", n.substring(0,3) )
