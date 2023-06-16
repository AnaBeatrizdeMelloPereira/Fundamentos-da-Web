//const btnTeste = document.querySelector("#teste")

let tempoTerminou = false

const pontuacao = document.querySelector(".score")

const removeMarmota = buraco => {
    //const buraco = document.querySelector(`.hole${numBuraco}`)
    buraco.classList.remove("up")
}

const sorteiaBuraco = () => {
    const num = Math.trunc(Math.random() * 6) + 1
    return document.querySelector(`.hole${num}`)
}

const defineTempo = (min, max) => Math.round((Math.random() * (max-min)) + min)

const pontuar = () => {
    pontuacao.innerHTML = parseInt(pontuacao.innerHTML)+1
}

/*btnTeste.addEventListener("click", function(){
    const buraco = sorteiaBuraco()
    buraco.classList.add("up")

    const tempoEspoxicao = defineTempo(800, 2000)
    setTimeout(function() {
        removeMarmota(buraco)
    }, tempoEspoxicao)
})*/

const marmota = document.querySelector(".game")

let ultimaMarmota

marmota.addEventListener("click", function(e){
    //console.log(e.target)
    if(e.target.classList.contains("mole") && ultimaMarmota != e.target)
        pontuar()
        ultimaMarmota = elemClicado
})


const marmotaContabilizada = (buraco) => {
    marmota.addEventListener("click", function(e){
        let elemClicado = e.target
        if(elemClicado.classList.contains("mole")){
            removeMarmota(buraco)
        }
    })
}

let buracoAnterior = 0

const exibeMarmota = () => {
    const buraco = sorteiaBuraco()
    if (buracoAnterior != buraco){
        buracoAnterior = buraco
        buraco.classList.add("up")
        
        marmotaContabilizada(buraco)
        
        const tempoEspoxicao = defineTempo(400, 1300)

        setTimeout(function() {
            removeMarmota(buraco)
            if(!tempoTerminou){
                exibeMarmota()
            } else {
                alert("Fim de jogo!")
            }
        }, tempoEspoxicao)
    } else {
        exibeMarmota()
    }
}

const startGame = () => {
    pontuacao.innerHTML = `0`
    tempoTerminou = false
    exibeMarmota()
    setTimeout(() => tempoTerminou = true, 10000)
}