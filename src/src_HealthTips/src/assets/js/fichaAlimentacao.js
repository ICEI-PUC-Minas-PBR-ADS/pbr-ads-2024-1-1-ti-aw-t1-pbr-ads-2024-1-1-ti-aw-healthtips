var url = "https://15b608fc-10c1-4cfd-ba04-852992139b10-00-r0rnaw6h6s16.picard.replit.dev/";

/*By Ludmilla*/

async function Enviar() {

    var dados = {

    id: document.getElementById('idAluno').value,
    
    fAcMop1: document.getElementById('fAcMop1').value,
    fAcMop2: document.getElementById('fAcMop2').value,
    fAcMop3: document.getElementById('fAcMop3').value,
    
    fAaLop1: document.getElementById('fAaLop1').value,
    fAcMop2: document.getElementById('fAaLop2').value,
    fAaLop: document.getElementById('fAaLop3').value,
    
    fALop1: document.getElementById('fALop1').value,
    fALop2: document.getElementById('fALop2').value,
    fALop3: document.getElementById('fALop3').value,

    fAJop1: document.getElementById('fAJop1').value,
    fAJop2: document.getElementById('fAJop2').value,
    fAJop3: document.getElementById('fAJop3').value,

    }

    await salvarDados(dados);
}

async function salvarDados(dados) {

    let url_usuario = `${url}fichaAlimentacao`;

 
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
