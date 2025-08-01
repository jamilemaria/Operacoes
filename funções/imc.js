function calcularImc(peso, altura, mostrarCategoria = true) {
    const imc = peso / (altura * altura);
    if (!mostrarCategoria) {
        return imc.toFixed(2);
    }

    let categoria;
    if (imc < 18.5) {
        categoria = "Baixo peso";
    } else if (imc < 25) {
        categoria = "Peso normal";
    } else if (imc < 30) {
        categoria = "Sobrepeso";
    } else if (imc < 35) {
        categoria = "Obesidade grave I";
    } else if (imc < 40) {
        categoria = "Obesidade grave II";
    } else {
        categoria = "Obesidade grau III";
    }

    return {
        imc: imc.toFixed(2),
        categoria: categoria
    };
}

console.log(calcularImc(70, 1.75));
console.log(calcularImc(70, 1.75, false));
