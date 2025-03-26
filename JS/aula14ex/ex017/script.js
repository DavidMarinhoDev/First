function tabuada(){
    var n = document.querySelector('#txtn');
    var res = document.getElementById("txtres");
    res.innerHTML = ""

    for ( let c = 1; c <= 10; c++){
        let multi = n.value * c;
        res.innerHTML += `${n.value} x ${c}: ${multi} <br/>`
    }
sele
}