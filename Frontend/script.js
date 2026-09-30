const campoMensagem = document.querySelector(".campo-mensagem input");
const botaoEnviar = document.querySelector(".campo-mensagem button");
const chat = document.querySelector(".chat");

const LIMITE_MENSAGENS = 60;

function limparMensagensAntigas() {
    while (chat.children.length > LIMITE_MENSAGENS) {
        chat.removeChild(chat.firstElementChild);
    }
}

function adicionarMensagem(texto, tipo) {
    const mensagem = document.createElement("div");

    mensagem.classList.add("mensagem", tipo);

    const paragrafo = document.createElement("p");
    paragrafo.textContent = texto;

    mensagem.appendChild(paragrafo);
    chat.appendChild(mensagem);

    limparMensagensAntigas();

    mensagem.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

async function enviarMensagem() {
    const texto = campoMensagem.value.trim();

    if (texto === "") {
        return;
    }

    // Mostra a mensagem do usuário
    adicionarMensagem(texto, "mensagem-usuario");

    // Limpa o campo
    campoMensagem.value = "";

    // Desabilita o botão enquanto a Alli responde
    botaoEnviar.disabled = true;

    try {
        const resposta = await fetch("http://127.0.0.1:8000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                mensagem: texto
            })
        });

        if (!resposta.ok) {
            throw new Error("Erro ao conversar com o servidor.");
        }

        const dados = await resposta.json();

        adicionarMensagem(
            dados.resposta,
            "mensagem-alli"
        );

    } catch (erro) {
        console.error("Erro:", erro);

        adicionarMensagem(
            "Desculpe, não consegui me conectar ao servidor da Alli. ☕",
            "mensagem-alli"
        );

    } finally {
        botaoEnviar.disabled = false;
        campoMensagem.focus();
    }
}

botaoEnviar.addEventListener("click", enviarMensagem);

campoMensagem.addEventListener("keydown", function(evento) {
    if (evento.key === "Enter") {
        enviarMensagem();
    }
});