var valores = [2,3,4,2,1,5,7]
valores.sort()
/*for (let pos = 0; pos < valores.length; pos++){
    console.log(valores[pos])
}
*/

for (let pos in valores){
    console.log(valores[pos])
}

let posi = valores.indexOf(7)
console.log( "e",posi)