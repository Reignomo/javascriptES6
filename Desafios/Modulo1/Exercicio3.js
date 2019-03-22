

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

   const idades = [] ;

   const getIdades = (usuarios) => {
   usuarios.map(usuario => idades.push(usuario.idade));
   return idades;
};

console.log(getIdades(usuarios));

// parte 2 

const rocketseat18 = usuarios.filter(
    usuario => usuario.empresa === "Rocketseat" && usuario.idade >= 18
  );

console.log(rocketseat18);

// parte 3
const FuncionarioGoogle = usuarios.find(usuario => usuario.empresa === 'Google');

console.log(`Funcionário da Google: ${FuncionarioGoogle}`);

// parte 4

    const multIdadeUsers = usuarios.map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
    .filter(usuario => usuario.idade <= 50);

console.log(multIdadeUsers);
