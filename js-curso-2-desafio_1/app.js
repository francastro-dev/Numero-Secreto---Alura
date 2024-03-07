let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio;'

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado')
}
function exibirAlerta() {
    alert('Eu amo Js')
}
function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito: ')
    alert(`Estivem em ${nomeDaCidade} e lembrei de você`)
}
function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro numero'));
    let segundoNumero = parseInt(prompt('Digite o segundo numero'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero}+${segundoNumero} = ${resultado}`)
}