const aluno = {
  nome: "Caetano",
  idade: 15,
  endereco: {
    rua: "Servidão Nelo",
    numero: 69,
    cidade: "São José"
  }
};

console.log(
  `O aluno mora na ${aluno.endereco.rua}, ${aluno.endereco.numero} em ${aluno.endereco.cidade}.`
);