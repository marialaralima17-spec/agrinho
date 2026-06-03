function mostrarMensagem() {
    alert(
        "A sustentabilidade no agro garante produtividade, preservação ambiental e qualidade de vida para as futuras gerações."
    );
}

function animarContador(id, valorFinal, velocidade) {
    let valor = 0;

    const contador = setInterval(() => {
        valor += Math.ceil(valorFinal / 100);

        if (valor >= valorFinal) {
            valor = valorFinal;
            clearInterval(contador);
        }

        document.getElementById(id).innerText =
            valor.toLocaleString("pt-BR");
    }, velocidade);
}

window.onload = () => {
    animarContador("arvores", 50000, 30);
    animarContador("agua", 250000, 25);
    animarContador("solo", 1200, 40);
};