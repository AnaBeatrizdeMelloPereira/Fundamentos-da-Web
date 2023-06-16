const lerIptNum = (seletorDeElemento) => {
    const entrada = document.querySelector(seletorDeElemento);
    return parseFloat(entrada.value) || 0;
}

const apagaIpt = (seletor) => document.querySelector(seletor).value = "";

const pegaElem = seletor => document.querySelector(seletor);

/*
Exercício 1
*/
const botao01 = document.getElementById("exer1");

const soma = (op1, op2) => op1 + op2;

botao01.onclick = function(){
    /*const entrada01 = document.getElementById("ex01-num01");
    const num1 = parseFloat(entrada01.value);
    console.log(num1);

    const entrada02 = document.getElementById("ex01-num02");
    const num2 = parseFloat(entrada02.value);
    console.log(num2);
    */
    const num1 = lerIptNum("#ex01-num01");
    //console.log(num1);

    const num2 = lerIptNum("#ex01-num02");
    //console.log(num2);

    const resultado = soma (num1, num2);

    const pag01 = document.getElementById("resp1");
    pag01.innerHTML = `O resultado da soma entre os números <strong>${num1}</strong> e <strong>${num1}</strong> é <strong>${resultado}</strong>.`;

    apagaIpt("#ex01-num01");
    apagaIpt("#ex01-num02");

    /*entrada01.value = "";
    entrada02.value = "";*/
}

/*
Exercício 2
*/
const botao02 = document.getElementById("exer2");

const compararNum = (num1, num2) => {
    if (num1 > num2){
        return `O número ${num1} é maior que o ${num2}.`
    } 
    if (num1 < num2){
        return `O número ${num2} é maior que o ${num1}.`
    }
    return "Os números são iguais."
}

botao02.onclick = function(){

    const num1 = lerIptNum("#ex02-num01");
    const num2 = lerIptNum("#ex02-num02");

//    document.getElementById("resp2").innerHTML = compararNum(num1, num2);
    pegaElem("#resp2").innerHTML = compararNum(num1, num2);

    apagaIpt("#ex02-num01");
    apagaIpt("#ex02-num02");
}

/*
Exercício 3
*/
const botao03 = document.getElementById("exer3");

const ePrimo = (num) => {
    if (num < 2) return false;
    for (let i=2; i<(num**1/2); i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

botao03.onclick = function(){

    const num = lerIptNum("#ex03-num01");

    /*for (let i=2; i<(num**1/2); i++){
        if(num % i === 0){
            ePrimo = false;
        }
        //ePrimo = (num % i == 0)? false:true;
    }*/

    /*let resposta = "";
    if (ePrimo(num) == true){
        resposta = `O número ${num} é Primo.`;
    } else resposta = `O número ${num} não é Primo.`;*/

    //let resposta = ePrimo ? `O número ${num} é Primo.` : `O número ${num} não é Primo.`;

    pegaElem("#resp3").innerHTML = ePrimo(num) ? `O número ${num} é Primo.` : `O número ${num} não é Primo.`;

    apagaIpt("#ex03-num01");
}

/*
Exercício 4
*/
const getIntervaloPar = (num1, num2) => {
    let inicio = num1, fim = num2;
    if(num1 > num2){
        inicio = num2;
        fim = num1;
    }

    let resposta = "";
    for(let i = inicio; i < fim; i++){
        /*if (i%2 == 0){
            resposta += `${i}, `;
        } else resposta += "";*/
        resposta += ((i%2 == 0) ? `${i}, ` : "");
    }

    return resposta.substring(0,resposta.length-2);
}

const botao04 = document.getElementById("exer4");

botao04.onclick = function(){
    const num1 = lerIptNum("#ex04-num01");
    const num2 = lerIptNum("#ex04-num02");

    /*let resposta = "";
    for(let i = num1; i<num2; i++){
        resposta += ((i%2 == 0) ? `${i}, ` : "");
    }*/

    pegaElem("#resp4").innerHTML = getIntervaloPar(num1, num2);

    apagaIpt("#ex04-num01");
    apagaIpt("#ex04-num02");
}

/*
Exercício 5
*/
const botao05 = document.getElementById("exer5");

const fibo = n => {
    let ant = 1, aux = 0, prox = 0, resposta = "";
    for(let i=0; i < n; i++){
        resposta += `${prox}, `
        aux = ant;
        ant = prox;
        prox += aux;
    }
    return resposta.substring(0,resposta.length-2);
}

botao05.onclick = function(){
    const num1 = lerIptNum("#ex05-num01");

    pegaElem("#resp5").innerHTML = fibo(num1);

    apagaIpt("#ex05-num01");
}

/*
Exercício 6
*/

