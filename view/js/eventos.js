document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('listaEventos'); // ID confirmado no seu HTML

    fetch('/api/eventos')
        .then(res => res.json())
        .then(eventos => {
            container.innerHTML = '';

            if (eventos.length === 0) {
                container.innerHTML = '<p>Nenhum evento encontrado.</p>';
                return;
            }

            eventos.forEach(ev => {
                const dataFormatada = new Date(ev.data).toLocaleDateString('pt-BR');
                
                // Cria o HTML do Card com o LINK PARA DETALHE
                const cardHTML = `
                    <div class="card-evento">
                        <div class="card-img" style="background-image: url('${ev.imagem || 'https://via.placeholder.com/400'}');"></div>
                        <div class="card-conteudo">
                            <span class="data-badge">${dataFormatada}</span>
                            <h3>${ev.nome}</h3>
                            <div class="local">📍 ${ev.local}</div>
                            <p class="descricao">${ev.descricao ? ev.descricao.substring(0, 80) + '...' : ''}</p>
                            
                            <a href="/detalhe?tipo=evento&id=${ev.id}" class="btn" style="background-color: var(--cor-primaria); color: white; text-align: center; text-decoration: none; margin-top: auto; display: block; padding: 10px; border-radius: 5px;">
                                Ver Detalhes
                            </a>
                        </div>
                    </div>
                `;
                container.innerHTML += cardHTML;
            });
        })
        .catch(erro => {
            console.error("Erro:", erro);
            container.innerHTML = '<p>Erro ao carregar eventos.</p>';
        });
});