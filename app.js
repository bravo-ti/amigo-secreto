let nome = "";

function salvarNome() {
   nome = document.getElementById("nome").value;
    if (nome == "") {
        alert("Por favor, insira seu nome");
    } else {
        listaDeAmigos.push(nome);
        document.getElementById("nome").value = "";
        atualizarLista();
    }
}

let listaDeAmigos = [];

function adicionarAmigo() {
    let nomeDoAmigo = document.getElementById("nomeDoAmigo").value;
    if (nomeDoAmigo == "") {
        alert("Por favor, insira um nome");
    } else {
        listaDeAmigos.push(nomeDoAmigo);
        document.getElementById("nomeDoAmigo").value ="";
        atualizarLista();
    }
}

function atualizarLista() {
    let listaAtualizada = document.getElementById("listaAmigos");
    listaAtualizada.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.innerHTML = listaDeAmigos[i];
        listaAtualizada.appendChild(itemLista);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length == 0) {
        alert("Por favor, insira um nome.");
        return;
    }
    else if (listaDeAmigos.length == 1){
        alert("Por favor, insira outros nomes");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];
    if (amigoSorteado == nome) {
        alert("Você não pode ser seu próprio amigo secreto! Por favor, tente novamente.");
        return;
    }

    document.getElementById("resultado").innerHTML = `Seu amigo secreto é: ${amigoSorteado}`;

}  

function reiniciarSorteio() {
    listaDeAmigos = [];
    document.getElementById("resultado").innerHTML = "";
    atualizarLista();
}