function calcularDesconto(preco, percentualDesconto) {
    let desconto = (preco * percentualDesconto) /100;
    let precoFinal = preco - desconto;
    return {
        precoOriginal: preco,
        desconto: desconto,
        precoFinal: precoFinal,
        economizou: desconto
    };
}

//uso da função
let produto = calcularDesconto(100,20);
console.log(` Preço original: R$ ${produto.precoOriginal}`);
console.log(`Desconto: R$ ${produto.desconto}`);
console.log(`Preço final: R$ ${produto.precoFinal}`);
console.log(`Você economizou: R$ ${produto.economizou}`);