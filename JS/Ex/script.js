function somar(){
    var num = document.getElementById("txtres")
    var num1 = document.getElementById("txtres1")
    var n1 = Number(num.value)
    var n2 = Number(num1.value)
    var res = document.getElementById('res')
    var soma = n1 + n2

    res.innerHTML = `O resultado de ${n1} + ${n2} é: ${soma}`


}