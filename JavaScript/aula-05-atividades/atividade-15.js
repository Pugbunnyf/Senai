let num1 = 42;
let num2 = 67;
let operador = '+';

switch (operador) {
  case '+':
    console.log("Resultado:", num1 + num2);
    break;

  case '-':
    console.log("Resultado:", num1 - num2);
    break;

  case '*':
    console.log("Resultado:", num1 * num2);
    break;

  case '/':
    if (num2 !== 0) {
      console.log("Resultado:", num1 / num2);
    } else {
      console.log("Divisão por 0 não permitida");
    }
    break;

  default:
    console.log("Operador inválido");
    break;
}