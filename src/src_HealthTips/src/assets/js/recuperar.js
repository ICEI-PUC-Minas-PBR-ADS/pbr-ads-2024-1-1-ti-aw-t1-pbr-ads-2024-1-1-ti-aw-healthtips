function mostrarMensagem(event) {
    event.preventDefault();
    const email = document.querySelector('input[name="email"]').value;
    alert(`Uma mensagem com instruções para redefinir sua senha foi enviada para: ${email}`);

   
    window.location.href = 'novaSenha.html';

    
}
/*By João Miguel*/