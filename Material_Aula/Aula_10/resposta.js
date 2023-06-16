//capturar elemento do DOM butão
const bt01 = document.querySelector("#bt01");

const pesquisarTermo = (termo, lista) => {
    for(let i=0; i<lista.length; i++){
        let objeto = lista[i];
        if(objeto.termo == termo)
            return i;
    }
    return -1;
}

const ExibeTermos = (lista) => {
    const tbodyElem = document.querySelector("#resultado-01");
    tbodyElem.innerHTML = "";
    for(let i = 0; i <lista.length; i++){
        let objeto = lista[i];
        let termo = objeto.termo;
        let numVezes = objeto.ocorrencia;
        tbodyElem.innerHTML += `<tr>
                                    <td>${termo}</td>
                                    <td>${numVezes}</td>
                                </tr>`
    }
}

const criarTermoOcorrencia = palavra => {
    return { termo: palavra, ocorrenia: 1 };
}

/**
 * Função para contar o número de palavras de um texto qualquer passado como parâmetro
 * 
 * @param texto - String
 * 
 * @return {termo1:ocorrencia1, termo2:ocorrencia2...} - Object
 */
const contarPalavras = texto => {
    //transformar texto em array
    const listaDePalavras = texto.toLowerCase().split(" ");

    let resultado = [];

    //percorrer o array
    for (let i=0; i<listaDePalavras.length ;i++){
        //comparar conteúdo iguais e incrimentar a contagem
        let indice = pesquisarTermo(listaDePalavras[i], resultado)
        if(indice >= 0){
            resultado[indice].ocorrencia++;
        } else {
            let objetoContagem = {};
            objetoContagem.termo = listaDePalavras[i];
            objetoContagem.ocorrencia = 1;

            resultado.push(objetoContagem);
        }
    }

   /*console.log("array resultado");
   console.log(resultado);*/
   ExibeTermos(resultado);
}

const contaLetras = texto => {
    const listaTermos = texto.split(" ");
    let numLetras = 0;
    for (let i=0; i<listaTermos.length; i++){
        numLetras += listaTermos[i].length;
    }
    return numLetras;
}

const contaVogal = texto => {
    let totalDeVogais = 0;
    for(let i = 0; i < texto.length; i++){
            if(("áàãaeéèiíoõóòuúùü").indexOf(texto[i].toLowerCase()) >= 0){
                totalDeVogais++;
            }
    }
    return totalDeVogais;
}

//programar o evento
//ao clicar no botão
bt01.addEventListener("click",function(){
    //recuperar o texto digitado
    const texto = document.querySelector("#ex01").value

    //conta palavras
    contarPalavras(texto);
    
    //conta letras
    let letras = contaLetras(texto);
    document.querySelector("#result-total-letras").innerHTML = letras;

    //conta vogais
    document.querySelector("#result-total-vogais").innerHTML = contaVogal(texto);

})

    //verifica letra mais comum

    //escrever na tela