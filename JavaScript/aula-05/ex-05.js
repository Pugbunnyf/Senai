let num1 = 10;
let num2 = 20;
let operador = "*";

switch (operador) {
  case "+":
    console.log("Resultado:", num1 + num2);
    break;

  case "-":
    console.log("Resultado:", num1 - num2);
    break;

  case "*":
    console.log("Resultado:", num1 * num2);
    break;

  case "/":
    if (num2 === 0) {
      console.log("Erro: divisão por zero.");
    } else {
      console.log("Resultado:", num1 / num2);
    }
    break;

  default:
    console.log("Operador inválido.");
}