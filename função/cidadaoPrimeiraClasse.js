// Função em JS é First-Class Object
// Higher-order function

// Criar função de forma literal

function fun1() {}

// Armazenar em uma variável

const fun2 = function() {}

// Armazenar em um array

const array = [function (a,b) {return a + b}, fun1,fun2]
console.log(array[0](2,3))  //Array, indice 0

// Armazenar em um atribuito de objeto
const obj = {}
  obj.falar = function () {return 'Opa'}
  console.log(obj.falar())



