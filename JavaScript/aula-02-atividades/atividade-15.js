let nome = "Caetano";
let idade = 15;
let altura = 1.83;
let peso = 85;

let imc = peso / (altura * altura);

let maiorIdade = idade >= 18;
let imc25 = imc < 25;
let nomeMaior3 = nome.length > 3;


console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade} anos`);
console.log(`Altura: ${altura} m`);
console.log(`Peso: ${peso} kg`);
console.log(`IMC: ${imc.toFixed(2)}`);

console.log(`A pessoa é maior de idade? ${maiorIdade}`);
console.log(`O IMC está abaixo de 25? ${imc25}`);
console.log(`O nome tem mais de 3 letras? ${nomeMaior3}`);