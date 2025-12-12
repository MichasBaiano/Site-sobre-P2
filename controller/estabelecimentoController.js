import { EstabelecimentosModel } from "../model/estabelecimentoModel.js";

export class EstabelecimentosController {
    static async listar(req, res) {
        try {
            const locais = await EstabelecimentosModel.getAll();
            res.json(locais);
        } catch (erro) {
            console.error(erro);
            res.status(500).json({ erro: "Erro ao buscar locais." });
        }
    }

static async criar(req, res) {
        try {
            let dados = req.body;
            if (req.file) {
                dados.imagem = '/uploads/' + req.file.filename;
            }
            const novo = await EstabelecimentosModel.create(dados);
            res.status(201).json(novo);
        } catch (erro) {
            console.error(erro);
            res.status(500).json({ erro: "Erro ao criar local." });
        }
    }

static async editar(req, res) {
        try {
            const id = req.params.id;
            let dados = req.body;
            if (req.file) {
                dados.imagem = '/uploads/' + req.file.filename;
            }
            const atualizado = await EstabelecimentosModel.update(id, dados);
            res.json(atualizado);
        } catch (erro) {
            console.error(erro);
            res.status(500).json({ erro: "Erro ao atualizar local." });
        }
    }
    
    static async deletar(req, res) {
        try {
            const id = req.params.id;
            await EstabelecimentosModel.delete(id);
            res.json({ mensagem: "Local deletado!" });
        } catch (erro) {
            console.error(erro);
            res.status(500).json({ erro: "Erro ao deletar local." });
        }
    }
}