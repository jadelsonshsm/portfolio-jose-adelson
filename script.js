// Aguarda o carregamento do documento
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formContato');

    form.addEventListener('submit', function(event) {
        // Impede o recarregamento da página (comportamento padrão do form)
        event.preventDefault();

        // Obtém os valores dos campos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Validação simples de preenchimento
        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Validação de formato de e-mail usando expressão regular
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        // Simulação de envio com sucesso
        alert('Mensagem enviada com sucesso! (Simulação)');
        
        // Limpa o formulário após o "envio"
        form.reset();
    });
});