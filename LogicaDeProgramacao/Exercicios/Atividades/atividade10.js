// Matricula: 25114290113 
// Nome: David Marinho Gonçalves Fonseca
// Atividade 10

const prompt = require('prompt-sync') ({sigint: true});

let vendas = parseFloat(prompt("Digite o total das vendas realizadas no mês: R$"));

if (vendas >= 0) {
    const salarioFixo = 1500.00;
    const percentualComissao = 0.05;
    const percentualINSS = 0.08; 

    let comissao = vendas * percentualComissao;
    let salarioTotal = salarioFixo + comissao;
    let descontoINSS = salarioTotal * percentualINSS;
    let salarioFinal = salarioTotal - descontoINSS;

    console.log("Salário Fixo: R$ " + salarioFixo.toFixed(2));
    console.log("Comissão: R$ " + comissao.toFixed(2));
    console.log("Desconto INSS (8%): R$ " + descontoINSS.toFixed(2));
    console.log("Salário Final: R$ " + salarioFinal.toFixed(2));
} else {
    alert("O valor das vendas deve ser maior ou igual a zero.");
}