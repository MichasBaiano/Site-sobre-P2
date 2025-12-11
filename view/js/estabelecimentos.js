document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('gridEstabelecimentos');
    const botoes = document.querySelectorAll('.btn-filtro');
    
    let todosLocais = [];

    // 1. Renderiza os cards
    function renderizar(locais) {
        grid.innerHTML = '';
        
        if (locais.length === 0) {
            grid.innerHTML = '<p style="text-align:center; width:100%">Nenhum local encontrado.</p>';
            return;
        }

        locais.forEach(local => {
            const ehDestaque = local.destaque ? 'destaque' : '';
            const tagHtml = local.destaque ? '<span class="tag-destaque">Recomendado</span>' : '';

            const card = document.createElement('div');
            card.className = `card-servico ${ehDestaque}`;
            
            card.innerHTML = `
                ${tagHtml}
                <img src="${local.imagem}" alt="${local.nome}" class="img-servico">
                <div class="info-servico">
                    <h3>${local.nome}</h3>
                    <p>${local.descricao}</p>
                    <p><strong>📞 ${local.telefone}</strong></p>
                    <div class="endereco">📍 ${local.endereco}</div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // 2. Busca da API
    fetch('/api/estabelecimentos')
        .then(res => res.json())
        .then(data => {
            todosLocais = data;
            renderizar(data);
        })
        .catch(err => console.error("Erro:", err));

    // 3. Filtros
    botoes.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove classe 'ativo' de todos e adiciona no clicado
            botoes.forEach(b => b.classList.remove('ativo'));
            btn.classList.add('ativo');

            const categoria = btn.dataset.cat;
            
            if (categoria === 'todos') {
                renderizar(todosLocais);
            } else {
                const filtrados = todosLocais.filter(l => l.categoria === categoria);
                renderizar(filtrados);
            }
        });
    });
});