/*let estado = confirm('Estas pronto?')
console.log(estado)
if (estado){
    alert('Sim estou')
}

let estado = confirm("Estás pronto?");
if (estado){
    console.log("Sim estou!");
    alert("Sim estou!");
} else {
    console.log('Não vou estou doente')
    alert("Não vou estou doente");
}


let precoUnitario = 10;
let pecas = prompt('Quantas peças queres?', 0)
if(pecas > 0){
    let total = precoUnitario * pecas;
    console.log(total)
}
console.log(total)

let idade = 23;
let femenino = false;
let pontos = 703;
let valorCarteira = 299;
let custoCompra = 9.99;
if (idade > 24){
    if(valorCarteira >= 300 || pontos >= 500){
        console.log(custoCompra = 0)
    }
}


let anoNasc = Number(prompt('Digite o seu ano de Nascença'))
let anoAtual = Number(prompt('Digite o ano atual'))
let idade = anoAtual - anoNasc
if (idade > 18 && idade < 25){
    console.log(`A sua idade é ${idade}, Já pode tirar a carta de condução amador`)
}else if(idade > 25 && idade < 30  ){
    console.log(`A sua idade é ${idade}, já podes tirar a carta de pesados`)

} else if(idade >= 30){
    console.log(`A sua idade é ${idade}, Já podes averbar a carta para serviços publicos`)
}else{
    console.log(`Só tens ${idade} ainda não tens idade`)
}
*/
//Buscar a data e hora local

//let agora = new Date();
//let hora = agora.getHours()

/*
let hora = new Date().getMonth()
let dia = new Date().getDate()
console.log(hora)
console.log(dia)*/

let gate = prompt("Eleger a porta: a, b, ou c");
let win = false;

switch (gate) {
    case "a":
        alert("Porta A: Vazia");
        break;
    case "b":
        alert("Porta B: Premio Maior");
        win = true;
        break;
    case "c":
        alert("Porta C: Vazia");
        break;
    default:
        alert("Não existe Porta " + String(gate));
}

if (win) {
    alert("Vencedor!");
}