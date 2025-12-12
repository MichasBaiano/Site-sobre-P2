import express from "express";
import { MapaController } from "../controller/mapaController.js";
import { SugestaoController } from "../controller/sugestaoController.js";
import { EventosController } from "../controller/eventoController.js";
import { EstabelecimentosController } from "../controller/estabelecimentoController.js";
import { TransportesController } from "../controller/transporteController.js";
import { AuthController } from "../controller/authController.js";

const router = express.Router();

// --- Mapa e Sugestões ---
router.get("/pontos-mapa", MapaController.getPontosMapa);
router.post("/sugestao", SugestaoController.enviarSugestao);

// --- CRUD Eventos ---
router.get("/eventos", EventosController.listarEventos);
router.post("/eventos", EventosController.criarEvento);
router.put("/eventos/:id", EventosController.editarEvento);
router.delete("/eventos/:id", EventosController.deletarEvento);

// --- CRUD Estabelecimentos ---
router.get("/estabelecimentos", EstabelecimentosController.listar);
router.post("/estabelecimentos", EstabelecimentosController.criar);
router.put("/estabelecimentos/:id", EstabelecimentosController.editar);
router.delete("/estabelecimentos/:id", EstabelecimentosController.deletar);

// --- CRUD Transportes ---
router.get("/transportes", TransportesController.listar);
router.post("/transportes", TransportesController.criar);
router.put("/transportes/:id", TransportesController.editar);
router.delete("/transportes/:id", TransportesController.deletar);

// Admin
router.post("/login", AuthController.login);

export default router;