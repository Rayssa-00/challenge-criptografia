let texto = document.querySelector('[data-texto]');
let mensagem = document.querySelector('[data-mensagem]');
let textoCopiado = document.querySelector('[data-btn]').addEventListener('click', botaoCopiar);

let valoresCriptografar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

let limpar = document.querySelector('[data-botao]').addEventListener('click', () => {
    texto.value = "";
    mensagem.value = "";
})

function botaoEncriptar() {
   
    let textoEncriptado = encriptar(texto.value);
    mensagem.value = textoEncriptado;
}


function botaoDesencriptar() {
    let textoDescriptado = descriptar(mensagem.value);
    mensagem.value = textoDescriptado;
}

function botaoCopiar() {
    copiar();
}


function encriptar(criptografada) {
    criptografada = criptografada.toLowerCase();

    valoresCriptografar.forEach((elemento) => {
        let procurarElemento = elemento[0];
        let substituirElemento = elemento[1];
        criptografada = criptografada.replaceAll(procurarElemento, substituirElemento);
    });
    return criptografada;
}

function descriptar(descriptada) {
    descriptada = descriptada.toLowerCase();

    valoresCriptografar.forEach((elemento) => {
        let procurarElemento = elemento[1];
        let substituirElemento = elemento[0];
        descriptada = descriptada.replaceAll(procurarElemento, substituirElemento);
    });
    return descriptada;
}

function copiar() {
    navigator.clipboard.writeText(mensagem.value);
    alert('Texto copiado');
}
