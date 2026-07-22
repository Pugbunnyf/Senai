let numeros = [12,5,8,21,3,14,7]
let maior = 0
let menor = 0
let total = 0
for(let i=0;i<numeros.length; i++){
    total=total+numeros[i]
    if (maior<numeros[i]){
        maior=numeros[i]
    }

if(i==0){
    menor=numeros[i]
}
if (menor>numeros[i]){
    menor=numeros[i]
}
}
console.log (`Maior: ${maior} - Menor: ${menor} - Total: ${total}`)