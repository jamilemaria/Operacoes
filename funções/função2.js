// Verificando idade
function verificarIdade (idade) {
    if (idade >= 18){ 
        return "Maior de idade.";
    } else {
        return "Menor de idade"
    }
}

console.log(verificarIdade(20));
console.log(verificarIdade(16));
console.log(verificarIdade(18));