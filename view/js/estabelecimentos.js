document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('gridEstabelecimentos'); // ID confirmado no seu HTML

    fetch('/api/estabelecimentos')
        .then(res => res.json())
        .then(locais => {
            container.innerHTML = '';

            if (locais.length === 0) {
                container.innerHTML = '<p>Nenhum local cadastrado.</p>';
                return;
            }

            locais.forEach(l => {
                // Cria o HTML do Card com o LINK PARA DETALHE
                const cardHTML = `
                    <div class="card-local" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                        <div class="card-img" style="background-image: url('${l.imagem || 'https://via.placeholder.com/400'}'); height: 200px; background-size: cover; background-position: center;"></div>
                        <div class="card-conteudo" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
                            ${l.destaque ? '<span style="color: goldenrod; font-weight: bold;">⭐ Destaque</span>' : ''}
                            <h3 style="margin: 0;">${l.nome}</h3>
                            <span style="background: #eee; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; width: fit-content;">${l.categoria}</span>
                            <p>📞 ${l.telefone}</p>
                            
                            <a href="/detalhe?tipo=estabelecimento&id=${l.id}" class="btn" style="background-color: var(--cor-primaria); color: white; text-align: center; text-decoration: none; margin-top: 10px; display: block; padding: 10px; border-radius: 5px;">
                                Saiba Mais
                            </a>
                        </div>
                    </div>
                `;
                container.innerHTML += cardHTML;
            });
        })
        .catch(erro => {
            console.error("Erro:", erro);
            container.innerHTML = '<p>Erro ao carregar locais.</p>';
        });
});