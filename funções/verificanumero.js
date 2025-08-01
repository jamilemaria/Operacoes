function verificaParImpar(numero) {
    if (numero % 2 === 0) {
        return numero + " é um número par";
    } else {
        return numero + " é um número ímpar";
    }
}

console.log(verificaParImpar(4));
