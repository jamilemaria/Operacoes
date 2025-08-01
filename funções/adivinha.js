// while loop
console.log("*** Jogo de Adivinhação ***");
const numeroSecreto = 42;
let tentativa = 0;
let palpite = 0;
let acertou = false;

// simulando palpites aleatórios
const palpitesPossiveis = [25,50,30,40,45,35,70,63];
let indicePalpite = 0;

while (!acertou && tentativa < 6) {
    tentativa++
    palpite = palpitesPossiveis[indicePalpite];
    indicePalpite++;

     console.log(`Tentativa ${tentativa}: Palpite = ${palpite}`);

     if (palpite === numeroSecreto){
        acertou = true;
        console.log(`🤩 parabéns! você aceretou em $(tentativa)`)
     }else if (palpite <numeroSecreto) {
      console.log("Muito baixo! Tente um número maior!🔼 ");
     }else {
      console.log("Muito alto! Tente um número menor!🔽 ");
     }
}

      if (!acertou) {
         console.log(`*** 😭 GAME OVER! *** O número era ${numeroSecreto}`);
      }