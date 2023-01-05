// Operador de Atribuição (=)
/*
let nome = 'Dionisio'
console.log(nome)
let idade = 29
console.log(idade)*/

//Operador Aritimetrico unario - Operadores com um único operando entre os quais são os de mais(+) e menos(-)
//Ambos os operadores convertem os operandos para o tipo Number, enquanto o operador menos (negativo) o nega.
/*
let testo = '123'
let n1 = +testo
let n2 = -testo
let n3 = -n2
let n4 = +'abdc'
console.log(`${typeof testo}, ${testo}`)
console.log(`${typeof n1}, ${n1}`)
console.log(`${typeof n2}, ${n2}`)
console.log(`${typeof n3}, ${n3}`)
console.log(`${typeof n4}, ${n4}`)*/

//Operadores unários de incremento e decremento Permitem aumentar(++) ou diminuir(--) o valor do operando em 1. Esses operadores na versão pós-fixada (ou seja, o operador está do lado direito do operando) realizam a operação alterando o valor da variável, mas retornam o valor antes da alteração. A versão do prefixo do operador (ou seja, o operador é colocado antes do operando) executa a operação e retorna o novo valor.
/*
n1 = 4
console.log(`${n1++}`) //Logicamente aumenta 1 mas a console aprenta o valor inicial da variavel.
console.log(`${n1++}`)
console.log(`${++n1}`)
*/
//Operadores Lógicos
//uma conjunção, ou seja, AND lógico (símbolo &&) - Este é um operador binário que retorna verdadeiro se ambos os operandos forem verdadeiros
/*
console.log(true && true);
console.log(true && false);
console.log(false && true); 
console.log(false && false); 

//uma disjunção, ou seja, lógico OR (OR) (símbolo ||) - é um operador binário, basta que um dos operandos seja verdadeiro para que o operador retorne verdadeiro.
console.log(true || true); 
console.log(true || false); 
console.log(false || true); 
console.log(false || false);*/

//uma negação, ou seja, NÃO lógico (símbolo !) - é unário e muda o valor lógico do operando para o seu oposto, ou seja, falso para verdadeiro e verdadeiro para falso.
console.log(! true); // -> false
console.log(! false); // -> true
//A prioridade mais alta é a negação !, depois a conjunção && e, finalmente, a disjunção ||.
