class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    fazerSom() {
        console.log(`${this.nome} faz um som.`);
    }

    mostrarInfo() {
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}`);
    }
}

class Macaco extends Animal {
    fazerSom() {
        console.log(`${this.nome} faz: hu hu hu`);
    }
}

const animal1 = new Animal("Primata", 5);
const chimpanze = new Macaco("Xixo", 7);

chimpanze.fazerSom();
chimpanze.mostrarInfo();
