let compras = [];

compras.push("arroz");
compras.push("feijão");
compras.push("leite");
compras.push("chocolate");
compras.push("queijo");

console.log("Lista de compras inicial:");

compras.forEach(function(item, indice) {
console.log((indice + 1) + " - " + item);
});

console.log("Tem arroz na lista?", compras.includes("arroz"));

let itemRemovido = compras.pop();

console.log("Item removido:", itemRemovido);

console.log("Lista atualizada:");

compras.forEach(function(item, indice) {
console.log((indice + 1) + " - " + item);
});

console.log("Total de itens:", compras.length);