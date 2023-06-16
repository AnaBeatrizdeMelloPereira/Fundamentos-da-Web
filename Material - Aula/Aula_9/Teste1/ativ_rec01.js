const lerIptNum = (seletorDeElemento) => {
    const entrada = document.querySelector(seletorDeElemento);
    return parseFloat(entrada.value) || 0;
}

const apagaIpt = (seletor) => document.querySelector(seletor).value = "";

const pegaElem = seletor => document.querySelector(seletor);

/*
Exercício 1
*/
const butao01 = document.getElementById("q01-executar");

const calculaLitros = (din) => {
    return (din / 7);
}

const calculaKm = litros => {
    return (20 * litros);
}

botao01.onclick = function(){
    const dinheiro = lerIptNum("#q01-dinheiro");
    console.log(dinheiro);
    
    const Litragem = calculaLitros(dinheiro);

    const result01 = document.getElementById("q01-result");
    result01.innerHTML = `<li>Você abastecerá ${Litragem} litros</li> <li>Sua autonomia é de ${calculaKm(Litragem)} quilômetros</li>`;

    apagaIpt("#q01-dinheiro");
}

/*
Exercício 2
*/
const butao02 = document.getElementById("q02-executar");

const IMC = (peso, altura) => {
    return (peso / (altura**2));
}

const faixaPeso = (imc) => {
    if (imc < 18.5){
        return "abaixo do peso";
    } else if (imc <= 24.9){
        return "com peso normal";
    } else if (imc <= 29.9){
        return "levemente acima do peso";
    } else if (imc <= 34.9){
        return "Obesidade grau I";
    } else if (imc <= 39.9){
        return "Obesidade grau II (severa)";
    } else
        return "Obesidade grau III (mórbido)";
}

botao02.onclick = function(){
    const peso = lerIptNum("#q02-peso");
    const altura = lerIptNum("#q02-altura");

    const resultado = "";
    resultado = IMC(peso, altura);

    const result02 = document.getElementById("q02-result");
    result02.innerHTML = `<li>Seu IMC é ${resultado}</li> <li>Você está na faixa: ${faixaPeso(resultado)}</li>`;

    apagaIpt("#q02-peso");
    apagaIpt("#q02-altura");
}

