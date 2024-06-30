var url= "https://15b608fc-10c1-4cfd-ba04-852992139b10-00-r0rnaw6h6s16.picard.replit.dev/";
/*Ludmilla*/

async function Enviar() {
  var dados = {
  email: document.getElementById('email').value,
  senha: document.getElementById('senha').value
  }
  console.log(dados.email);
  if (dados.email === ""){
    document.getElementById('validacaoEmail').innerHTML = "E-mail não informado!";
    return;

  } else { 
    document.getElementById('validacaoEmail').innerHTML = "";
  }
  
  console.log(dados.senha);
  if (dados.senha === "")
    document.getElementById("validacaoSenha").innerHTML = "Senha não informada!";
  else 
    document.getElementById('validacaoSenha').innerHTML = "";

  var usuario = document.getElementById('usuario').value;

  
  const rota = usuario === "Aluno" ? 
  "cadastrosAlunos" : "cadastrosProfissionais";

  const dado = await leDados(rota);

  const usuarioLocalizado = dado.find(dado => dado.email === dados.email && dado.senha === dados.senha); 

    if (usuarioLocalizado){
      const userData = {
        usuario: usuarioLocalizado.usuario,
        nome: usuarioLocalizado.nome,
        senha: usuarioLocalizado.senha,
        id: usuarioLocalizado.id
      }
      
      localStorage.setItem('usuario',JSON.stringify(userData));

      window.location.href = 'usuario.html';

  } else {
      document.getElementById('validacaoEmail').innerHTML = "E-mail ou senha incorretos!";
    }    

}

async function leDados(rota) {
  try {
      const response = await fetch(url + rota, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });
    const json = await response.json();
    console.log('Success:', json);
    return json;
  } catch (error) {
    console.error('Error:', error);
    return;
  }
}

var btn = document.querySelector('.lnr-eye');

btn.addEventListener('click', function(){
    
    let input = document.querySelector('#senha');
    
    if(input.getAttribute('type')== 'password'){
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
})

const usuario = JSON.parse(localStorage.getItem(userData));


document.getElementById('nome1').innerHTML = usuario.nome;

