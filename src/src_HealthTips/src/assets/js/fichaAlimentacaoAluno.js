var url = "https://15b608fc-10c1-4cfd-ba04-852992139b10-00-r0rnaw6h6s16.picard.replit.dev/fichaAlimentacao/";
/*By Ludmilla*/
const usuario = JSON.parse(localStorage.getItem('usuario'));

document.getElementById('nome1').innerHTML = usuario.nome;
document.getElementById('ID').innerHTML = 'Código: ' + usuario.id;

async function buscarFicha(usuario) {
    try {
        const response = await fetch(url + usuario.id);
        if (!response.ok) {
            throw new Error('Resposta da rede não foi ok ' + response.statusText);
        }
        const json = await response.json();
        console.log(json);
        document.getElementById("tela").innerHTML = imprime(json);
    } catch (error) {
        console.error('Houve um problema com a operação de fetch:', error);
    }
}


buscarFicha(usuario);

function imprime(data) {
   
    return JSON.stringify(data, null, 2); 
}
  
