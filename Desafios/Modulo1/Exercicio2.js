

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