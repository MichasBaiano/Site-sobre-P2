import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// Configuração do __dirname (necessário pois estamos em outra pasta)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ajuste do caminho para voltar uma pasta (..) e entrar na View
const viewPath = path.join(__dirname, "../View/templates");

// --- Rotas Públicas ---
router.get("/", (req, res) => res.sendFile(path.join(viewPath, "index.html")));
router.get("/perfil", (req, res) => res.sendFile(path.join(viewPath, "perfil.html")));
router.get("/mapa", (req, res) => res.sendFile(path.join(viewPath, "mapa.html")));
router.get("/sugestao", (req, res) => res.sendFile(path.join(viewPath, "sugestao.html")));
router.get("/eventos", (req, res) => res.sendFile(path.join(viewPath, "eventos.html")));
router.get("/estabelecimentos", (req, res) => res.sendFile(path.join(viewPath, "estabelecimentos.html")));
router.get("/transportes", (req, res) => res.sendFile(path.join(viewPath, "transportes.html")));

// --- Rotas Admin ---
router.get("/admin/eventos", (req, res) => res.sendFile(path.join(viewPath, "admin-eventos.html")));
router.get("/admin/estabelecimentos", (req, res) => res.sendFile(path.join(viewPath, "admin-estabelecimentos.html")));
router.get("/admin/transportes", (req, res) => res.sendFile(path.join(viewPath, "admin-transportes.html")));

export default router;