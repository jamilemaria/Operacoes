// Calculando a média de duas notas 

function calcularMedia(nota1,nota2) {
    var media = (nota1 + nota2) / 2;
    if(media >= 7) {
        console.log("Aluno aprovado com a média:" + media);
    }else {
        console.log("Aluno reprovado com a média:" + media);
}
}

calcularMedia(4,6); // resultado acima
calcularMedia(10,6); //resultado abaixo