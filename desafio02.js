function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;
  
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
  
    
    const mensagem = `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
    console.log(mensagem);
  }
  
  // digitar valores para verificar
  const vitorias = 100;
  const derrotas = 5;
  calcularNivel(vitorias, derrotas);
  