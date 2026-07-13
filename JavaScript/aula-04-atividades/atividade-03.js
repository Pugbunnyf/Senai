let pessoa = {
    nome: "Caetano",
    idade: 15,
    altura: 1.83,
    estudante: true
};

console.log("Nome:", pessoa['nome']);
console.log("Idade:", pessoa['idade']);
console.log("Altura:", pessoa['altura']);
console.log("Estudante:", pessoa['estudante']);

let chave = 'idade';

console.log("Valor da chave " + chave + ":", pessoa[chave]);