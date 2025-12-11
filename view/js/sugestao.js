document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formSugestao');
    const feedback = document.getElementById('feedback');
    const btnNovo = document.getElementById('btnNovo');

    // Preencher nome/email automaticamente se o usuário estiver logado (localStorage)
    const perfil = JSON.parse(localStorage.getItem('perfil'));
    if (perfil) {
        document.getElementById('nome').value = perfil.nome || '';
        document.getElementById('email').value = perfil.email || '';
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const dados = {
            tipo: document.getElementById('tipo').value,
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            mensagem: document.getElementById('mensagem').value
        };

        try {
            const resposta = await fetch('/api/sugestao', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            });

            if (resposta.ok) {
                // Sucesso: esconde form e mostra agradecimento
                form.classList.add('oculto');
                feedback.classList.remove('oculto');
            } else {
                alert('Erro ao enviar. Tente novamente.');
            }
        } catch (erro) {
            console.error(erro);
            alert('Erro de conexão.');
        }
    });

    btnNovo.addEventListener('click', () => {
        form.reset();
        feedback.classList.add('oculto');
        form.classList.remove('oculto');
    });
});