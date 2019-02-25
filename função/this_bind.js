const pessoa = {
  saudacao: 'Bom dia',
  falar () {
    console.log(this.saudacao) //Acessar um atributo de um objeto atraves do this
  }
}

pessoa.falar();
const falar = pessoa.falar;
falar () // conflito entre paradifmas : funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()