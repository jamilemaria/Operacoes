console.log("=== 🎮SISTEMA DE PONTUAÇÂO DO JOGO 🎮 ===");

let pontuacao = 0;
let nivel = 1;
let vidas = 3;

// Simulando as rodadas do jogo
for (let rodada = 1; rodada <= 8; rodada++) {
    let pontosRodada = Math.floor(Math.random() * 100); // Gerando pontos aleatórios entre 0 e 100

    console.log(`\n -- RODADA ${rodada} ---`);
    console.log(`Pontos obtidos: ${pontosRodada}`);

    // Adicionando pontos à pontuação total
    pontuacao += pontosRodada;

    // Bônus baseado na performance
    if (pontosRodada >= 88) {
        console.log("⭐EXCELENTE! Bônus de 20 pontos!");
        pontuacao += 20;
    } else if (pontosRodada >= 60) {
        console.log("⭐BOM! Bônus de 10 pontos!");
        pontuacao += 10;
    } else if (pontosRodada < 30) {
        console.log("🙁RUIM! Perdeu 1 vida.");
        vidas--;
        if (vidas <= 0) {
            console.log("💀GAME OVER! Suas vidas acabaram!");
            break;
        }
    }

    // Sistema de progressão de nível
    if (pontuacao >= nivel * 150) {
        nivel++;
        console.log(`🚀SUBIU DE NÍVEL!🚀 Agora você está no nível ${nivel}`);
        console.log("❤️Vida extra ganha❤️");
        vidas++;
    }

    // Exibindo status atual
    console.log(`Pontuação total: ${pontuacao}`);
    console.log(`Nível atual: ${nivel}`);
    console.log(`Vidas restantes: ${vidas}`);

    // Pausa entre as rodadas
    console.log("⏳Preparando a próxima rodada...\n");
}

// Relatório final do jogo
console.log("\n" + "=".repeat(40));
console.log("RELATÓRIO DO JOGO ");
console.log("=".repeat(40));
console.log(`🏆 Pontuação Final: ${pontuacao} pontos`);
console.log(`🎊 Nível Alcançado: ${nivel}`);
console.log(`💖 Vidas Restantes: ${vidas}`);

// Sistema de Classificação
let classificacao;
if (pontuacao >= 600) {
    classificacao = "🥇 1° LUGAR!";
} else if (pontuacao >= 450) {
    classificacao = "🥈 2° LUGAR!";
} else if (pontuacao >= 300) {
    classificacao = "🥉 3° LUGAR!";
} else if (pontuacao >= 150) {
    classificacao = "NOVATO";
} else {
    classificacao = "💩 INICIANTE";
}
console.log(`🏅 Classificação: ${classificacao}`);
