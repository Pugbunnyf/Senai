const amigos = [
  { nome: "Pedro", idade: 16 },
  { nome: "Asper", idade: 16 },
  { nome: "Gustavo", idade: 16 },
  { nome: "Eduardo", idade: 15 }
];

amigos.forEach(amigo => {
  console.log(`Nome: ${amigo.nome}, Idade: ${amigo.idade}`);
});