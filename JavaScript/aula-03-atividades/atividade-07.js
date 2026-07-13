let animais = ['coelho', 'cachorro'];

animais.push('bode');
animais.push('peixe');

console.log("Após push:", animais);

animais.unshift('leão');
console.log("Após unshift:", animais);

let removido = animais.shift();

console.log("Animal removido:", removido);
console.log("Array final:", animais);