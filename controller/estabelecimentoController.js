// controller/EstabelecimentosController.js
import { EstabelecimentosModel } from "../model/estabelecimentoModel.js";

export class EstabelecimentosController {
    static listar(req, res) {
        const locais = EstabelecimentosModel.getAll();
        res.json(locais);
    }
}