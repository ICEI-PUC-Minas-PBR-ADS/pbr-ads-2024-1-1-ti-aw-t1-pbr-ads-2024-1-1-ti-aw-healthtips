
/*By Ludmilla*/

const usuario = JSON.parse(localStorage.getItem('usuario'));


document.getElementById('nome1').innerHTML = usuario.nome;
document.getElementById('ID').innerHTML = 'Código: ' + usuario.id;


async function Enviar(){
console.log(usuario);
      if(usuario.usuario === 'Profissional'){
        window.location.href = 'fichaAlimentacao.html';
    } else if (usuario.usuario === 'Aluno'){
      window.location.href = 'fichaAlimentacaoAluno.html';

    }
}