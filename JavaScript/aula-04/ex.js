let aluno = {
    nome: "Caetano",
    matricula: 221010,
}

for (let chave in aluno){
    console.log (`${chave}:${aluno[chave]}`)
}