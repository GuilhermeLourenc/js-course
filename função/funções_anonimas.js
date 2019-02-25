const soma = function (x,y) { // Função anonima, função sem nome
  return x + y;
}

const ImprimirResultado = function (a,b, operacao = soma) {
  console.log(operacao(a,b))
}

ImprimirResultado(3,4);

