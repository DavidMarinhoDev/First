
function contar() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let msg = document.getElementById('res')

    if ( ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Digite número válidos!')
    } else {
        msg.innerHTML = `Contando: `
    }

    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (i < f){
        for (let c = i; c <= f; c += p){
            msg.innerHTML += `${c} \u{1F449}`
        }
        msg.innerHTML += `\u{1F3C1}`
    } else {
        for (let c = i; i >= f; c -= p){
            msg.innerHTML += `${c} \u{1F449}`
        }
        msg.innerHTML += `\u{1F3C1}`
    }
}
   
