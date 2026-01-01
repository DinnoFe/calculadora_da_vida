function calculadora_da_vida() {
    const userIdade = Number(document.getElementById("idade").value);
    
    const umAno = 365;
    const tempoDeVida = userIdade * umAno;

    document.getElementById("tempoDeVida").innerText = ` ${tempoDeVida} `;
    
    return tempoDeVida;
}