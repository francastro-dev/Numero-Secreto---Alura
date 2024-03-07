//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro:

function calculaImc(altura, peso){
    let imc = peso / (alturaMetros * alturaMetros);
}

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calculaFatorial(numero){
    if(numero === 0 || numero === 1){
        return 1 ;
    }
    let fatorial = 1;
    for(let i= 2; i <= numero; i++){
        fatorial*=1;
    }
    return fatorial;
}

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$ 4,80.

function converterDolar(valorEmDolar){
    let cotacao = 4.8;
    let valorEmReal = valorEmDolar * cotacao;
    return valorEmReal.toFixed(2);
}

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calculararea(altura, largura){
    let area = altura * largura;
    let perimetro = 2* (altura + largura);

    console.log(`area da sala : ${area} metros quadrados`);
    console.log(`perimetro da sala: ${perimetro} metros`);
}

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularAreaPerimetro(raio){
    let areaSala = Math.PI * raio*raio;
    let perimetro = 2 * Math.PI * raio;

    console.log(`area da sala circular: ${areaSala.toFixed(2)} metros quadrados´);
    console.log(`Perimetro da sala: ${perimetro.toFixed(2)} metros´);
}

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuadaNumero(numero){
    for(let i = 1; 1<= 10; i++){
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}