//criar um elemento XMLHttpRequest
const xhttp = new XMLHttpRequest

//definir a url que prentedemos usar
const url = "https://rafaelescalfoni.github.io/desenv_web/receitas.json" 

const criaPrato = (elemHTML, prato) => {
    const divHTML = document.createElement("div")
    const tituloHTML = document.createElement("h1")
    const descricaoHTML = document.createElement("p")
    const imgHTML = document.createElement("img")

    divHTML.classList.add("prato")

    const tituloTN = document.createTextNode(prato.nome)
    const descricaoTN = document.createTextNode(prato.descricao)

    tituloHTML.appendChild(tituloTN)
    descricaoHTML.appendChild(descricaoTN)
    imgHTML.src = prato.foto
    imgHTML.alt = `Foto do prato ${prato.nome}`

    divHTML.appendChild(tituloHTML)
    divHTML.appendChild(descricaoHTML)
    divHTML.appendChild(imgHTML)

    elemHTML.appendChild(divHTML)
}
const criaReceitas = lista => {
    //console.log(lista)
    const cardapioHTML = document.querySelector(".cardapio")
    lista.forEach(function (receita) {
        criaPrato(cardapioHTML, receita)
    });
}

//quando o objeto mudar de estado para 4 e status HTTP=200
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        //programar uma ação
        //const receitas = JSON.parse(this.responseText)
        criaReceitas(JSON.parse(this.responseText))
    }
}
//abrir o objeto
xhttp.open("GET", url)

//enviar objeto
xhttp.send()