// Validam email

function validarEmail(email) {
    if(!email.includes('@') || !email.includes('.')){
        return{
            valido:false, 
            mensagem: "Email deve conter @ e pelo menos um ponto."
        };
    }

    //Verificar se @ vem antes do ponto

    let posicaoArroba = email.indexOf('@');
    let posicaoPonto = email.lastIndexOf('.');

    if(posicaoArroba >= posicaoPonto){
        return{
            valido:false,
            munsagem: "Formato de email inválido."
        };
    }
    return{
        valido: true,
        mensagem:"Email válido."
    };
}

console.log(validarEmail("ana35@gmail.com"));
console.log(validarEmail("ana35gmail.com"));
console.log(validarEmail("ana35@gmailcom"));