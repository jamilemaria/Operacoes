//funções básicas

//1.Função simples sem parâmetro e sem retorno
function saudacao () {
    console.log("Olá, bem vindo ao estudo de funções!");
}

//Chamar a função
saudacao;

// 2.Função com parâmetros
function cumprimentar(nome) {
    console.log(`Olá, ${nome})! Como você está?`);
}

// chamar a função com argumento
cumprimentar("Jamile");
cumprimentar("Felipe");
cumprimentar("william");

// 3. Função com parâmetros e retorno
function soma (a, b) {
    return a + b;
}

// Usando o valor retornado pela função
const resultado = soma (5,3);
console.log(`A soma é: ${resultado}`);

// 4. Função com parâmetros padrão (default)
function multiplicar (a, b = 2) {
    return a * b;
}

console.log(multiplicar(4));    // usa o valor padrão b=2
console.log(multiplicar(4,5)); //subscreve o valor padrão

// 5. Declaraçaõ de duas variáveis 

let nome = "Jamile";
let sobrenome =  "Jesus";
let nomeCompleto = nome  + " " + sobrenome;

console.log("o nome completo é:", nomeCompleto)



// 6. Declaração de função
function subtrair (a, b) {
    return a - b;
}
// 6.1 Expressão de função
const dividir = function(a, b) {
    if (b === 0); {
    return "Não é possível dividir por zero";
    }
    return a / b;
};

console.log(dividir(10, 2));
console.log(dividir(10, 0));


