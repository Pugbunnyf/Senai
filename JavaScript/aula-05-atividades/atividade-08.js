let valorCompra = 250;
let desconto;
let valorFinal;

if (valorCompra > 500) {
    desconto = 0.20;
} else if (valorCompra > 200) {
    desconto = 0.10;
} else if (valorCompra > 100) {
    desconto = 0.05;
} else {
    desconto = 0;
}

valorFinal = valorCompra - (valorCompra * desconto);

console.log("Valor da compra: R$ " + valorCompra);
console.log("Valor final: R$ " + valorFinal);