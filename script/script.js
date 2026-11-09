function enviarWhatsApp(event) { // Função para verificar o click do botao.

    event.preventDefault() // Impede a tela de recarregar

    const inputNome = document.querySelector('#input-nome').value;
    const textoMensagem = document.querySelector('#texto-mensagem').value;
    const telefone = '5583999263492'; // Número que será enviado a mensagem.

    const texto = `Olá! Me chamo ${inputNome}, ${textoMensagem}.`; //Mensagem que vai ser enviada para o número.
    const mensagemFormatada = encodeURIComponent(texto); //Mensagem formatada para aceitar espaços.

    const url = `https://wa.me/${telefone}/?t=${mensagemFormatada}`; // url da minha mensagem.
    window.open(url, '_blank') // Isso vai abrir a url em uma nova janela.
}
