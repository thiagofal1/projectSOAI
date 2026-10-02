const valueEntrada = document.querySelector('.entrada-valor');
const valueSaida = document.querySelector('.saida-valor');
const calcBtn = document.getElementById('calc');
const avaliacao = document.getElementById('avaliacao');
const resultado = document.getElementById('resultado');

function calcular() {
    const entrada = parseFloat(valueEntrada.value) || 0;
    const saida = parseFloat(valueSaida.value) || 0;
    const result = entrada - saida;
    console.log(`Resultado: R$${result.toFixed(2)}`);
    resultado.textContent = `R$${result.toFixed(2)}`;
return result;
} 
function avaliar(saldo) {
    let avaliacaoResult = "";
    if (saldo > 0) {
        avaliacaoResult = "Você fechou o mês no azul! Continue assim!";
    } else if (saldo < 0) {
        avaliacaoResult =
            "Você fechou o mês no vermelho! Mude imediatamente sua estratégia financeira!";
    } else {
        avaliacaoResult = "Você fechou o mês no zero! Cuidado!";
    }

    console.log(avaliacaoResult);
    avaliacao.textContent = avaliacaoResult;
}

calcBtn.addEventListener("click", () => {
    const saldo = calcular();
    avaliar(saldo);
});