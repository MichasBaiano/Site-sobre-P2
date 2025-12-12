// controller/authController.js
import { UsuarioModel } from "../model/usuarioModel.js";

export class AuthController {
    static async login(req, res) {
        const { login, senha } = req.body;

        try {
            const usuario = await UsuarioModel.buscarPorLogin(login);

            // Verifica se usuário existe e se a senha bate
            if (usuario && usuario.senha === senha) {
                // Login Sucesso
                res.json({ sucesso: true, mensagem: "Login realizado!" });
            } else {
                // Login Falhou
                res.status(401).json({ sucesso: false, erro: "Usuário ou senha incorretos." });
            }
        } catch (erro) {
            console.error(erro);
            res.status(500).json({ erro: "Erro interno no servidor." });
        }
    }
}