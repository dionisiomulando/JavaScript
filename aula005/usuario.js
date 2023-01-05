/*alert('Ola Mundo!')
window.alert('Mais uma vez ola mundo')
alert(4*7)
alert(true)
*/
//let decisao = window.confirm('Estas bem');
//console.log(decisao);

//let remover = confirm("Eliminar todos os dados?");
//let message = remover ? "Eliminando Dados" : "Cancelado"
//console.log(message);
/*
let nome = prompt('Qual é o seu nome?')
let ano = prompt('Ola ' + nome + ' quantos anos tens? ');
alert(nome + ' tenho ' + ano + ' anos')

let largura = prompt('Qual é a altura da caixa')
let altura = prompt('Qual a altura da caixa')
let comprimento = prompt('Qual é o comprimento da caixa')
let volume = largura * altura * comprimento
console.log(`O volume da caixa é ${volume}`)
alert(`O volume da caixa é ${volume}`)*/

let contacto = [{
    nome: 'Dionísio Pinto',
    idade: 29,
    telefone: 932767426,
    email: 'mulando1993@gmail.com'
},{

}]

contacto[1].nome = prompt('Insere o seu nome')
contacto[1].idade= Number(prompt('Insere a sua idade'))
contacto[1].telefone= Number(prompt('Digite o seu telefone'))
contacto[1].email= prompt('Insere o seu email')

let last = contacto.length - 2;
console.log(`${contacto[0].nome} ${contacto[0].idade} ${contacto[0].telefone} ${contacto[0].email}`);
console.log(`${contacto[last].nome} ${contacto[last].idade} ${contacto[last].telefone} ${contacto[last].email}`);
console.log(contacto)