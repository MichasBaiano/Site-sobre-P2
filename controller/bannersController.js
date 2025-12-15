import { BannersModel } from "../model/bannersModel.js";

export class BannersController {
    static async listar(req, res) {
        try {
            const banners = await BannersModel.getAll();
            res.json(banners);
        } catch (erro) {
            console.error(erro);
            res.status(500).json({ erro: "Erro ao buscar banners." });
        }
    }

    static async criar(req, res) {
        try {
            let dados = req.body;
            
            // Obrigatório ter imagem
            if (req.file) {
                dados.imagem = '/uploads/' + req.file.filename;
            } else {
                return res.status(400).json({ erro: "Imagem é obrigatória para banner." });
            }

            const novo = await BannersModel.create(dados);
            res.status(201).json(novo);
        } catch (erro) {
            console.error(erro);
            res.status(500).json({ erro: "Erro ao criar banner." });
        }
    }

    static async deletar(req, res) {
        try {
            await BannersModel.delete(req.params.id);
            res.json({ message: "Banner removido." });
        } catch (erro) {
            console.error(erro);
            res.status(500).json({ erro: "Erro ao deletar banner." });
        }
    }
}