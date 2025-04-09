// 1. Lista de frutas


const frutas = ["maçã", "banana", "uva", "morango", "manga"];
console.log("Primeira fruta;", frutas[3]);
console.log("Última fruta:",frutas[frutas.length -1]);
console.log("Total de frutas:", frutas.length);


// A função lenght retorna o números de elementos do array


// 2. Encontrando elementos


const alunos = [
    { nome: "Ricardo", nota: 7.5},
    { nome: "alice", nota: 9.0},
    { nome: "Renata", nota: 6.5},
    { nome: "Rodrigo", nota: 8.0},
    { nome: "Alonso", nota: 10.0},
];


const alunoNotaAlta = alunos.find(aluno => aluno.nota > 8)
console.log("Primeiro aluno com nota > 8:", alunoNotaAlta);


const temNota10 = alunos.some(aluno => aluno.nota === 10);
console.log("Existe aluno com nota 10?", temNota10);
// variavel boole, onde traz resultados true ou falso


const todosMaiorQue5 = alunos.every( aluno => aluno.nota >5);
console.log("Todos têm nota > 5?", todosMaiorQue5);// true


// 3. Manipulando arrays


const numeros = [];
numeros.push(10,20,30); // adicionar números ao final do array
numeros.unshift(5); // adicionar o número 5 no início
console.log("Array após adições:", numeros); //[ 5, 10, 20, 30 ]
numeros.pop(); // remover o Último elemento
numeros.shift(); // remover o primeiro elemento
console.log("Array final:", numeros); //  [ 10, 20 ]



