const dias_vivo = document.getElementById("dias_vivo");
const horas_vivo = document.getElementById("horas_vivo");
const minutos_vivo = document.getElementById("minutos_vivo");

// Variavel para guardar o intervalo de animacao
let intervalo_animacao;

//
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Função para animar números com placeholder

function animarComPlaceholder(elemento, valor, maxDigitos) {
    let numStr = valor.toLocaleString('pt-BR');
    
    // Se o número for "10" e o máximo for "10.000" (6 caracteres com o ponto)
    // Criamos um prefixo invisível para completar o tamanho
    let diferenca = maxDigitos - numStr.length;
    let placeholder = "";
    
    if (diferenca > 0) {
        // Criamos uma string de zeros invisíveis
        placeholder = `<span style="opacity: 0">${"0".repeat(diferenca)}</span>`;
    }
    
    elemento.innerHTML = placeholder + numStr;
}

// Função para animar os números
function iniciarAnimacao() {
    // Definimos a cor cinzenta para o modo de espera
    dias_vivo.style.color = "#888";
    horas_vivo.style.color = "#888";
    minutos_vivo.style.color = "#888";

    intervalo_animacao = setInterval(() => {
        animarComPlaceholder(dias_vivo, gerarNumeroAleatorio(1, 36500), 7);
        animarComPlaceholder(horas_vivo, gerarNumeroAleatorio(1, 876000), 8);
        animarComPlaceholder(minutos_vivo, gerarNumeroAleatorio(1, 52000000), 8);
    }, 80); // Atualiza a cada 50ms
}

;

// Chama a função para iniciar a animação
iniciarAnimacao();

function calculadora_da_vida() {
    // Obtendo a idade do usuário
    const campoIdade = document.getElementById("idade");
    const userIdade = Number(campoIdade.value);

    // Validacao simples
    if (isNaN(userIdade) || userIdade <= 0) {
        alert("Por favor, insira uma idade válida.");
        return;
    }

    // Parando a animacao
    clearInterval(intervalo_animacao);

    // Definindo a cor dos resultados
    const corSucesso = "#2e9444";
    dias_vivo.style.color = corSucesso;
    horas_vivo.style.color = corSucesso;
    minutos_vivo.style.color = corSucesso;

    //Definindo constantes
    const umAno = 365;
    const umDia = 24;
    const umaHora = 60;

    //Calculando tempo de vida
    const tempoDeVida_dias = userIdade * umAno;
    const tempoDeVida_horas = tempoDeVida_dias * umDia;
    const tempoDeVida_minutos = tempoDeVida_horas * umaHora;

    //Exibindo resultados na tela
    dias_vivo.innerText = tempoDeVida_dias.toLocaleString('pt-BR');
    horas_vivo.innerText = tempoDeVida_horas.toLocaleString('pt-BR');
    minutos_vivo.innerText = tempoDeVida_minutos.toLocaleString('pt-BR');
}

