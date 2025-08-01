const prompt = require('prompt-sync')();
let nome = prompt('Digite seu nome:');
let idade = parseInt(prompt('Digite sua idade:'));
let salario = parseFloat(prompt('Salário:'));

console.log(`Nome : ${nome}`);
console.log(`Idade : ${idade}`);
console.log(`Salário : R$ ${salario}`);

//Para confirmar
 let continuar = prompt('Deseja continuar o cadastro? (s/n)');
 if(continuar.toLocaleLowerCase()==='n'){
    console.log('cadastro realizado com sucesso.');
 }else (continuar.toLocaleLowerCase()==='n');
    console.log('Vamos continuar...');

 