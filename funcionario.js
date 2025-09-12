//Molde para criar crachás 
class Funcionario{
    constructor(nome, cargo){
        this.nome = nome;
        this.cargo = cargo;
    }
     apresentar(){
        console.log(`Olá meu nome é ${this.nome} e meu cargo é ${this.cargo}.`)
     }
}
//Criando os funcionários
const funcionario1= new Funcionario("Carla Miranda", "Desenvolvimento Frontend");
const funcionario2= new Funcionario("Pedro Alcântara", "Gerente");
funcionario1.apresentar();
funcionario2.apresentar();