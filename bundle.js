"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = [];

var getIdades = function getIdades(usuarios) {
  usuarios.map(function (usuario) {
    return idades.push(usuario.idade);
  });
  return idades;
};

console.log(getIdades(usuarios));
