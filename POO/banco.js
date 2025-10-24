class ContaBanco{
    #saldo; //propriedade privada
    constructor(saldoInicial){
        this.#saldo = saldoInicial;
    }

    depositar(valor){
        if (valor > 0){
            this.#saldo += valor;
            console.log(`Deposito de R$ ${valor} realizando!`);
        }else{
            console.log("Valor inválido!")
        }
    }

    sacar(valor){
        if(valor > 0 && valor <= this.#saldo){
        this.#saldo += valor;
        console.log(`Saque de R$ ${valor} realizado com sucesso!`);
        }else{
            console.log("Saldo insuficiente ou valor inválido!")
    }
}
consultarSaldo(){
    return this.#saldo;
}
}
//Testando
const minhaConta = new ContaBanco(1000);
minhaConta.depositar(500);
minhaConta.sacar(200);
console.log(`Saldo atual: R$ ${minhaConta.consultarSaldo()}`);