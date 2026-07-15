    let filmes = [{
        titulo: "Pantera Negra",
        Ano: 2018,
        genero: "ação"
    }, 

    {
        titulo: "Carros 3",
        ano: 2019,
        genero: "Animação"
    },

    {
        titulo: "Toy Story 5" ,
        ano: 2026 ,
        genero: "Animação"
    }]

    filmes.forEach (function(filme){
        console.log (`${filme.titulo}-${filme.ano}-${filme.genero}`)
    })



