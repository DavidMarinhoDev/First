// Matricula: 25114290113 
// Nome: David Marinho Gonçalves Fonseca
// Atividade 10

//Problema: Você é responsável por calcular a média de uma turma de alunos. Cada aluno tem 3 notas, e você precisa calcular a média de cada aluno e, em seguida, calcular a média geral da turma.

const prompt = require('prompt-sync') ({sigint: true});


let na1 = parseInt(prompt("Aluno 1:Digite sua primeira nota: ")) 
let na2 = parseInt(prompt("Aluno 1:Digite sua segunda nota: ")) 
let na3 = parseInt(prompt("Aluno 1:Digite sua terceira nota: "))
let mediaAluno1 = (na1 + na2 + na3) / 2

let nAluno1 = parseInt(prompt("Aluno 2:Digite sua primeira nota: ")) 
let nAluno2 = parseInt(prompt("Aluno 2:Digite sua segunda nota: ")) 
let nAluno3 = parseInt(prompt("Aluno 2:Digite sua terceira nota: "))
let mediaAluno2 = (nAluno1 + nAluno2 + nAluno3) / 2

let mediaGeral = (mediaAluno1 + mediaAluno2) / 4


console.log("Aluno 1 - Média: " + mediaAluno1.toFixed(2));
console.log("Aluno 2 - Média: " + mediaAluno2.toFixed(2));

console.log("Média geral da turma: " + mediaGeral.toFixed(2));