const dias_vivo = document.getElementById("dias_vivo");
const horas_vivo = document.getElementById("horas");
const minutos_vivo = document.getElementById("minutos");

dias_vivo.innerText = 0;
horas_vivo.innerText = 0;
minutos_vivo.innerText = 0; 

function calculadora_da_vida() {
    const userIdade = Number(document.getElementById("idade").value);
    const umAno = 365;
    const umDia = 24;
    const umaHora = 60;

    const tempoDeVida_dias = userIdade * umAno;
    const tempoDeVida_horas = tempoDeVida_dias * umDia;
    const tempoDeVida_minutos = tempoDeVida_horas * umaHora;

    dias_vivo.innerText = tempoDeVida_dias.toLocaleString('pt-BR');
    horas_vivo.innerText = tempoDeVida_horas.toLocaleString('pt-BR');
    minutos_vivo.innerText = tempoDeVida_minutos.toLocaleString('pt-BR');
}

