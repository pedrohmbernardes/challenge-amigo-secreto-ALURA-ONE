/*O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
Aqui você deverá desenvolver a lógica para resolver o problema.*/

let amigos = [];
let tamanhoDaListaDeAmigos;
let arrayHTML = '';

console.log(tamanhoDaListaDeAmigos);

function exibirNomeAmigoNaLista(tag, nomeDoAmigo) {

    let listaOrdenadaAmigos = document.createElement('li');
    listaOrdenadaAmigos.innerHTML = nomeDoAmigo;

    let listaAmigos = document.getElementById(tag);
    listaAmigos.appendChild(listaOrdenadaAmigos);
}

function removerListaDeNomes(tag) {
    let listaAmigos = document.getElementById(tag);
    listaAmigos.innerHTML = '';
}

function exibirResultado(idTag, texto, nomeDoAmigo) {
    
    let idDaTag = document.getElementById(idTag);
    idDaTag.innerHTML = `${texto} ${nomeDoAmigo}`;
}

function adicionarAmigo(){

    let inputAmigos = document.getElementById('amigo').value;

    if (inputAmigos == '') {
        alert('Por favor, insira um nome.')
    } else {
        amigos.push(inputAmigos);
        limparInput();
        exibirNomeAmigoNaLista('listaAmigos', inputAmigos);
        tamanhoDaListaDeAmigos = amigos.length
    }

    console.log(amigos);
    console.log(inputAmigos);

}

function limparInput() {

    entradaAmigo = document.getElementById('amigo');
    entradaAmigo.value = '';

}

function sortearAmigo() {
    
    if (amigos == '') {
        alert('Nenhum nome foi incluso. Digite pelo menos 1 nome.');
    } else {
        indiceSorteado = Math.floor(Math.random() * tamanhoDaListaDeAmigos);
        exibirResultado('resultado', 'O amigo secreto sorteado é: ', amigos[indiceSorteado]);

        removerListaDeNomes('listaAmigos');

        console.log('console log - indice sorteado:');
        console.log(indiceSorteado);
        console.log('console log - tamanho lista de amigos');
        console.log(tamanhoDaListaDeAmigos);
    }

}