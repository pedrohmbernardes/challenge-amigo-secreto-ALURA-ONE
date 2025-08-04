/*O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
Aqui você deverá desenvolver a lógica para resolver o problema.*/

// Definicao das variaveis globais do programa.
let amigos = [];
let tamanhoDaListaDeAmigos;

// Funcao para exibicao dos nomes dos amigos na lista - a partir da tag <ul> cria-se uma tag filha <li> para listar os nomes.
function exibirNomeAmigoNaLista(tag, nomeDoAmigo) {

    let listaOrdenadaAmigos = document.createElement('li');
    listaOrdenadaAmigos.innerHTML = nomeDoAmigo;

    let listaAmigos = document.getElementById(tag);
    listaAmigos.appendChild(listaOrdenadaAmigos);
}

// Funcao para limpar os nomes na tela apos o sorteio do amigo.
function removerListaDeNomes(tag) {
    let listaAmigos = document.getElementById(tag);
    listaAmigos.innerHTML = '';
}

// Funcao definida para a exibicao do resultado na tela.
function exibirResultado(idTag, texto, nomeDoAmigo) {
    
    let idDaTag = document.getElementById(idTag);
    idDaTag.innerHTML = `${texto} ${nomeDoAmigo}`;
}

// Funcao definida para adicionar um amigo na tela/lista de amigos.
function adicionarAmigo(){

    let inputAmigos = document.getElementById('amigo').value;

    if (inputAmigos == '') {
        alert('Por favor, insira um nome.')
    } else if (amigos.includes(inputAmigos)) {
        alert('Esse nome já está na lista, digite outro.');
        limparInput();
    } else {
        amigos.push(inputAmigos);
        limparInput();
        exibirNomeAmigoNaLista('listaAmigos', inputAmigos);
        tamanhoDaListaDeAmigos = amigos.length
    }

}

// Funcao definida para limpar o input do nome do amigo na tela/lista.
function limparInput() {

    entradaAmigo = document.getElementById('amigo');
    entradaAmigo.value = '';

}

// Funcao definida para sortear um amigo/nome que esta na lista de amigos.
function sortearAmigo() {
    
    if (amigos == '') {
        alert('Nenhum nome foi incluso. Digite pelo menos 1 nome.');
    } else {
        indiceSorteado = Math.floor(Math.random() * tamanhoDaListaDeAmigos);
        exibirResultado('resultado', 'O amigo secreto sorteado é: ', amigos[indiceSorteado]);
        removerListaDeNomes('listaAmigos');
    }

}