const arr = [1, 2, 3, 4, 5];

const somaDez = () => console.log(arr.map(item => item + 10));

somaDez();
//parte 2

const usuario = { nome: 'Diego', idade: 23 };

const mostraIdadeArr = (usuario) => console.log(usuario.idade);

mostraIdadeArr(usuario);

//parte 3
const nome = "Diego";
const idade = 23;

const mostraUsuarioArr = (nome = 'Diego', idade = 18) => { return [nome, idade]}; 

console.log(mostraUsuarioArr(nome,idade));

// parte 4

const promise = () => new Promise(function(resolve, reject){
    return resolve();
});

console.log(promise());