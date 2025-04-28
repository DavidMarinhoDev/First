const prompt = require('prompt-sync')({sigint:true});

var per = prompt("Digite uma cor:")
var res = per.toLowerCase();

switch(res){
    case "verde":
        console.log("verde")
        break;
    case "amarelo":
        console.log("amarelo")
        break;
    case "azul":
        console.log("azul")
        break;
  case "branco":
        console.log("branco")
        break;
        default:
            console.log("Digite uma cor valida!");
            break;
}
