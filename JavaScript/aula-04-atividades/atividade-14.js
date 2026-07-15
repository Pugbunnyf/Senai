const amigos = [
  { nome: "Pedro", idade: 16 },
  { nome: "Asper", idade: 16 },
  { nome: "Gustavo", idade: 16 },
  { nome: "Slime", idade: 22 }
];

const maioresDeIdade = [];

amigos.forEach(amigo => {
  if (amigo.idade >= 18) {
    maioresDeIdade.push(amigo);
  }
});

console.log(maioresDeIdade);