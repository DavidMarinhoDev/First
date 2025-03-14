var t1 = 0;
console.log(t1)
var t2 = 1;
console.log(t2)
var t3 = 0;


function proximoFibonacci (){
    t3 = t1 + t2
    console.log(t3)
    t1 += t2
    t2 += t3
}

var c = 0;
for (c += 3; c <= 10; c++){
    proximoFibonacci(t1,t2)
}
 