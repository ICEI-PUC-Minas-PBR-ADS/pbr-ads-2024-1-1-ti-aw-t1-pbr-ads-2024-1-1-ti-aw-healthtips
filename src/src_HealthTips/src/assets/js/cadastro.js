var url = "https://15b608fc-10c1-4cfd-ba04-852992139b10-00-r0rnaw6h6s16.picard.replit.dev/";

function toggleRegistro() {
    var usuario = document.getElementById('usuario').value;   
    if (usuario === 'Profissional') {
        registro.style.display = 'block';
    } else {
        registro.style.display = 'none';
    }
}


async function enviar() {
    var dados = {
    
    usuario: document.getElementById('usuario').value,
    especialidade: document.getElementById('especialidade').value,
    registro: document.getElementById('registroP').value,
    nome: document.getElementById('nome').value,
    email: document.getElementById('email').value,
    telefone: document.getElementById('telefone').value,
    cpf: document.getElementById('cpf').value,
    nascimento: document.getElementById('dataNascimento').value,
    endereco: document.getElementById('endereco').value,
    senha: document.getElementById('senha').value,
    confirmacaoSenha: document.getElementById('confirmacaoSenha').value,
    };
    

    console.log(dados.email);
    if(dados.email == ""){
        document.getElementById('validacaoEmail').innerHTML = " * Obrigatório";
        return;
    } else if(dados.email !== leDados){
        document.getElementById('validacaoEmail').innerHTML = "";
    } else {
        document.getElementById('validacaoEmail').innerHTML = " * Email já cadastrado";
        return;
    }

    console.log(dados.cpf);
    if(dados.cpf == ""){
        document.getElementById('validacaoCPF').innerHTML = " * Obrigatório";
        return;
    } else if (dados.cpf.length !== 11) {
        document.getElementById('validacaoCPF').innerHTML = " * CPF inválido";
        return;
    } else if(dados.cpf !== leDados()){
        document.getElementById('validacaoCPF').innerHTML = "";
    } else {
        document.getElementById('validacaoCPF').innerHTML = " * CPF já cadastrado";
        return;
    }

    console.log(dados.senha);
    if(dados.senha !== dados.confirmacaoSenha){
        document.getElementById('validacaoSenha').innerHTML = "Senhas incopatíveis";
        return;
    } else {
        document.getElementById('validacaoSenha').innerHTML = "";
    }

    await salvarDados(dados);

    //colocar frase sucesso

}    


async function salvarDados(dados) {
    let url_usuario;

    if (dados.usuario === 'Aluno'){
        url_usuario = `${url}cadastrosAlunos`;
    } else if (dados.usuario === 'Profissional') {
        url_usuario = `${url}cadastrosProfissionais`;
    }else{
        return;
    }
 
    fetch(url_usuario, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
     console.log('sucess', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

async function leDados (dados) {
    await fetch(url)
        .then(response => response.json())
        .then(data => {
         console.log('sucess', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}


var btn = document.querySelector('.lnr-eye');

btn.addEventListener('click', function(){
    
    let input = document.querySelector('.olho');
    
    if(input.getAttribute('type')== 'password'){
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
})

