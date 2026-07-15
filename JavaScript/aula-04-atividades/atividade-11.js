const filme = {
  titulo: "Free Guy",
  diretor: "Shawn Levy",
  ano: 2021,
  genero: "Ação"
};

for (let chave in filme) {
  console.log(`${chave}: ${filme[chave]}`);
}