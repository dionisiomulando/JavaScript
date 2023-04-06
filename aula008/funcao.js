//Programa digitado sem função
/*let media = 0;
let total = 0;
let temperatura = [21, 85, 6, 39, 52, 84, 15, 36, 78, 14, 25, 24];
for (let i = 0; i < temperatura.length; i++) {
    total += temperatura[i];
    media = total / temperatura.length
    
}
console.log(`O total de temperatura calculado é ${total}`)
console.log(`A média de temperatura é igual a ${media}`)

media = 0;
total = 0;
temperatura = [23, 25, 24, 28, 12, 10, 5, 99, 89, 57, 63, 2, 15];
for (let i = 0; i < temperatura.length; i++) {
    total += temperatura[i];
    media = total / temperatura.length
}
console.log(`O 2º total de temperatura calculado é ${total}`)
console.log(`A 2º média de temperatura é igual a ${media}`)*/

//Programa digitado com função
/*let media;
let total ;
let temperatura; 
function temperaturaDiaria(){
    total= 0;
    for (let i = 0; i < temperatura.length; i++){
        total += temperatura[i];
        media = total / temperatura.length
    }
}
temperatura = [21, 85, 6, 39, 52, 84, 15, 36, 78, 14, 25, 24];
temperaturaDiaria()
console.log(`O total de temperatura calculado é ${total}`)
console.log(`A média de temperatura é igual a ${media}`)
temperatura = [23, 25, 24, 28, 12, 10, 5, 99, 89, 57, 63, 2, 15];
temperaturaDiaria()
console.log(`O 2º total de temperatura calculado é ${total}`)
console.log(`A 2º média de temperatura é igual a ${media}`)
*/
//Podemos chamar uma função antes de declarar
/*mostrarNome();
function mostrarNome() {
    let nome = 'Dionísio Pinto Mulando'
    console.log(nome)
}*/
//Return
/*
function testeReturn(){
    return 'Dionísio';
}
let test = testeReturn();
console.log(`${typeof(test)} => ${typeof(testeReturn)} => ${test}`)*/
/*
let temperatura = [21, 85, 6, 39, 52, 84, 15, 36, 78, 14, 25, 24];
function tempDiaria(){
    let soma = 0;
    for (let i = 0; i < temperatura.length; i++) {
        soma += temperatura[i];   
    }
    return (soma / temperatura.length).toFixed(2) 
}
console.log(tempDiaria())
temperatura = [23, 25, 24, 28, 12, 10, 5, 99, 89, 57, 63, 2, 15];
console.log(tempDiaria())*/

//Parametros
/*
function adicionar(primeiro, segundo) {
    return primeiro + segundo
}
console.log(adicionar(58, 5))*/

function pegarElemento(elementos, indice) {
    return elementos[indice];
}
let nomes = ['Dionísio', 'Genísio', 'Mulando', 'Pinto'];
console.log(pegarElemento(nomes, 0))
