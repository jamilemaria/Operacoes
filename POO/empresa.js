function Funcionario(nome, salario, departamento) {
    this.nome = nome;
    this.salario = salario;
    this.departamento = departamento;
    this.ativo = true;
}

Funcionario.prototype.trabalhar = function() {
    console.log(`${this.nome} está trabalhando no departamento de ${this.departamento}`);
};

//Herança prototípica: baseada em objeto, estrutura dinâmica, delega comportamento e cadeia.

Funcionario.prototype.receberSalario = function() {
    console.log(`${this.nome} recebeu o salário de R$${this.salario.toFixed(2)}`);
};

Funcionario.prototype.demitir = function() {
    this.ativo = false;
    console.log(`Funcionário: ${this.nome} foi demitido(a)`);
};

Funcionario.prototype.info = function() {
    const status = this.ativo ? "Ativo" : "Inativo";
    console.log(`Funcionário: ${this.nome} | Salario: R$${this.salario.toFixed(2)} | depto: ${this.departamento} | Status: ${status}`);
};

//Construtor derivado: Desenvolvedor
function Desenvolvedor(nome, salario, linguagem, senioridade) {
    Funcionario.call(this, nome, salario, "TI");
    this.linguagem = linguagem;
    this.senioridade = senioridade;
    this.projetos = [];
}

//Configurando a herança prototípica
Desenvolvedor.prototype = Object.create(Funcionario.prototype);
Desenvolvedor.prototype.constructor = Desenvolvedor;

Desenvolvedor.prototype.programar = function() {
    console.log(`${this.nome} está programando em ${this.linguagem}`);
};

//Criar um método para que o desenvolvedor faça projetos "adicionarProjetos"
Desenvolvedor.prototype.adicionarProjetos = function(projeto) {
    this.projetos.push(projeto);
    console.log(`${this.nome} foi adicionado ao projeto: ${projeto}`);
};

Desenvolvedor.prototype.trabalhar = function() {
    console.log(`${this.nome} (${this.senioridade}) está desenvolvendo software`);
};

Desenvolvedor.prototype.info = function () {
    const status = this.ativo ? "Ativo" : "Inativo";
    console.log(`Desenvolvedor: ${this.nome} | ${this.senioridade} | ${this.linguagem} | Projetos: ${this.projetos.length} | Status: ${status}`);
};

//Constructor derivado: Gerente
function Gerente(nome, salario, departamento, equipe) {
    Funcionario.call(this, nome, salario, departamento);
    this.equipe = equipe || [];
    this.bonus = 0;
}

Gerente.prototype = Object.create(Funcionario.prototype);
Gerente.prototype.constructor = Gerente;

Gerente.prototype.gerenciar = function(){
    console.log(`${this.nome} está gerenciando uma equipe de ${this.equipe.length} pessoas`);
};

Gerente.prototype.adicionarFuncionario = function(funcionario) {
    this.equipe.push(funcionario)
    console.log(`${funcionario} foi adicionado à equipe de ${this.nome}`);
};

Gerente.prototype.darBonus = function(valor){
    this.bonus = valor;
    console.log(`${this.nome} recebeu um bônus de R$ ${valor.toFixed(2)}`);
};

Gerente.prototype.receberSalario = function(){
const total = this.salario + this.bônus;
console.log(`${this.nome} recebeu salário + bônus: R$ ${total.toFixed(2)}`);
this.bonus = 0;
};

console.log("*** TESTANDO HERENÇA PROTOTÍPICA ***");

const funcionario1 = new Funcionario("Diana", 3000, "RH");
funcionario1.trabalhar(); 
funcionario1.receberSalario();
funcionario1.info();
console.log();

const dev1 = new Desenvolvedor("Pedro", 6000, "JavaScript", "Sênior");
dev1.programar();
dev1.adicionarProjetos("Sistema de E-Commerce");
dev1.trabalhar();
dev1.receberSalario();
console.log();

const dev2 = new gerente ("Julio", 10000, "Gerência", "TI");
gerente.adicionarFuncionario("Jamile");
gerente.gerenciar();
gerente.darBonus("Sistema de E-Commerce");
gerente.trabalhar(3000);
gerente.receberSalario();

