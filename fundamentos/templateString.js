const nome = 'Rebeca';
const concatenacao = 'Olá' + nome + '!';

const template = `
  Olá ${nome}!
`

console.log(concatenacao, template);

// Arrow function + Template string
const up = texto => texto.toUpperCase() 
console.log(`Ei... ${up('cuidado...')}!`);
