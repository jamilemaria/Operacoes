// gerador de senhas 

function gerarSenha(tamanho = 8, incluirNumeros = true, incluirespeciais = false) {
    let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (incluirNumeros) {
        caracteres += "0123456789";
    }

    if (incluirespeciais) {
        caracteres += "!@#$%¨&*";
    }

    let senha = "";
    for (let i = 0; i < tamanho;  i++) {
        let indiceAleatório = Math.floor(Math.random() * caracteres.length);
        senha +=caracteres[indiceAleatório];
    }

    return{
        senha: senha,
        tamanho: senha.length,
        configuracao: {
            incluirNumeros: incluirNumeros,
            incluirespeciais: incluirespeciais
        }
    };
}

// gerar diferentes tipos de senha
console.log("Senha simples:", gerarSenha(6));
console.log("Senha com números:", gerarSenha(10,true));