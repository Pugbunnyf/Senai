function verificarIdade (idade){
    if (idade<12){
        return "Criança"
    } else if (idade<18){
        return "adolescente"
    } else if (idade<65){
        return "adulto"
    } else {
        return "idoso"
    }
}

let idades = [11, 15, 18, 56, 67, 69]

idades.forEach (function(item){
    console.log (verificarIdade(item))
})