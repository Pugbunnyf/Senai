const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2025,
  cor: "Verde",
  placa: "AUR46767"
};

console.log("Antes de remover a placa:");
console.log(carro);

delete carro.placa;

console.log("Depois de remover a placa:");
console.log(carro);

console.log("A propriedade 'placa' existe?", "placa" in carro);