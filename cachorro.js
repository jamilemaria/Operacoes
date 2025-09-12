class Cachorro {
    constructor(nome, idade, raca) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    latir() {
        return `Quando o ${this.nome} late, ele faz AU AU!`;
    }
    dormir() {
        return `${this.nome} está dormindo...zzZzZZ`;
    }
    perguntar() {
        return `A raça ${this.raca} é conhecida.`;
    }
    comer() {
        return `Sua ração é específica para ${this.idade} anos.`;
    }
};
const dog1 = new Cachorro("Bartolomeu", 9, "Rottweiler");

console.log(dog1.latir());
console.log(dog1.dormir());
console.log(dog1.perguntar());
console.log(dog1.comer());
