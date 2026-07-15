const biblioteca = [
  {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    paginas: 96,
    lido: true,
    editora: "HarperCollins"
  },
  {
    titulo: "A Menina Bonita do Laço de Fita",
    autor: "Ana Maria Machado",
    paginas: 24,
    lido: true
  },
  {
    titulo: "O Sítio do Pica-pau Amarelo",
    autor: "Monteiro Lobato",
    paginas: 120,
    lido: false
  },
  {
    titulo: "O Menino Maluquinho",
    autor: "Ziraldo",
    paginas: 112,
    lido: true,
    editora: "Melhoramentos"
  },
  {
    titulo: "A Bolsa Amarela",
    autor: "Lygia Bojunga",
    paginas: 136,
    lido: false
  }
];

biblioteca.forEach(livro => {
  console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}`);
});

const propriedades = Object.keys(biblioteca[0]);
console.log("Propriedades do primeiro livro:", propriedades);

for (let chave in biblioteca[0]) {
  console.log(`${chave}: ${biblioteca[0][chave]}`);
}

biblioteca.forEach(livro => {
  if ("editora" in livro) {
    console.log(`O livro "${livro.titulo}" possui editora.`);
  } else {
    console.log(`O livro "${livro.titulo}" não possui editora.`);
  }
});

biblioteca.forEach(livro => {
  if (!("editora" in livro)) {
    livro.editora = "Editora Infantil";
  }
});

console.log("Array atualizado:", biblioteca);

// socorro q bglh cansativo