// Tipos de Dados Compostos
// O primeiro que falaremos é o 'Objecto'

let usuario = {
    nome: 'Dionisio Mulando',
    idade: 29,
    sexo: 'H',
    email: 'mulando1993@gmail.com'
}
console.log(usuario);
console.log(typeof usuario.nome);
console.log(usuario.email.length);
console.log(usuario.nome.charAt(1))

//Alterar dados de um objecto
usuario.idade = 30;
console.log(usuario)

//eliminar campo de um objecto
delete usuario.nome;
console.log(usuario)

// Inserir dados em um Objecto
usuario.nome = 'Dionisio';
usuario.sobreNome = 'Mulando';
usuario.telefone = 932767426;
console.log(usuario)

// O Segundo que falaremos são os 'Arrays ou Matriz'

let dia = [' Segunda', ' Terça', ' Quarta', ' Quinta', ' Sexta', ' Sabado', ' Domingo'];
console.log( `${typeof dia} »» ${dia}`)
console.log(dia[0]);
console.log(dia[1]);
console.log(dia[2]);
dia[0] = 'Domingo';
console.log( `${ dia}`)
// Declarar um arrays vazio e depois preencher os seus campos
// Os arrays podem ser declarados de tipos diferentes

let animais = [];
console.log(`${animais}`);
animais[0] = ' Cão';
animais[4] = ' Gato';
animais[3] = true;
animais[2] = 29;
console.log(`${animais}`);
console.log(animais[1]);

// Arrays dentro de arrays

let nomes = ['João', 'Pinto', 'Genisio',['Loloca', 'Juliana']];
console.log(`${nomes}`)
console.log(nomes[3][1])

nomes[3][2] = 'Fineza';
console.log(nomes)
console.log(nomes[3][2])
