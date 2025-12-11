// controller/SugestaoController.js
import { SugestaoModel } from "../model/sugestaoModel.js";

export class SugestaoController {
    static enviarSugestao(req, res) {
        const dados = req.body;
        
        // Validação básica
        if (!dados.nome || !dados.mensagem) {
            return res.status(400).json({ erro: "Nome e mensagem são obrigatórios." });
        }

        const salva = SugestaoModel.salvar(dados);
        
        // Retorna sucesso
        res.status(201).json({ 
            mensagem: "Sugestão recebida com sucesso!", 
            id: salva.id 
        });
    }
}