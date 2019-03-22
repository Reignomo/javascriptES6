"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

console.log(getIdades(usuarios)); // parte 2 

var rocketseat18 = usuarios.filter(function (usuario) {
  return usuario.empresa === "Rocketseat" && usuario.idade >= 18;
});
console.log(rocketseat18); // parte 3

var FuncionarioGoogle = usuarios.find(function (usuario) {
  return usuario.empresa === 'Google';
});
console.log("Funcion\xE1rio da Google: ".concat(FuncionarioGoogle)); // parte 4

var multIdadeUsers = usuarios.map(function (usuario) {
  return _objectSpread({}, usuario, {
    idade: usuario.idade * 2
  });
}).filter(function (usuario) {
  return usuario.idade <= 50;
});
console.log(multIdadeUsers);
