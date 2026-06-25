const imagens = document.querySelectorAll(".carrossel img");
const carrossel = document.querySelector(".carrossel");

let indice = 0;

function proximaImagem() {
    const atual = imagens[indice];

    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }

    const proxima = imagens[indice];

    atual.classList.add("saindo");

    proxima.classList.add("ativa");

    setTimeout(() => {
        atual.classList.remove("ativa");
        atual.classList.remove("saindo");
    }, 800);
}

carrossel.addEventListener("click", proximaImagem);

setInterval(proximaImagem, 3000);