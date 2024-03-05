const btn = document.querySelector('#btnt')
const txt = document.querySelector('#texto')
let resposta = document.querySelector('#resposta')


btn.onclick = function inverterFrase() {
    const inputText = document.getElementById('inputText').value;
    let resultado = '';

    for (let i = inputText.length - 1; i >= 0; i--) {
        resultado += inputText[i];
    }

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `Frase Invertida: ${resultado}`;
}



/* é chamada quando o botão é clicado. Ela pega o texto inserido no campo de entrada, inverte a string e exibe a frase invertida na área de resposta.*/
