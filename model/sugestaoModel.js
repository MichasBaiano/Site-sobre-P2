// model/SugestaoModel.js
const sugestoes = []; // "Banco de dados" em memória

export class SugestaoModel {
    static salvar(dados) {
        // Simula a criação de um ID e data
        const novaSugestao = {
            id: sugestoes.length + 1,
            data: new Date(),
            ...dados
        };
        sugestoes.push(novaSugestao);
        return novaSugestao;
    }

    static listarTodas() {
        return sugestoes;
    }
}