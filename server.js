import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static(path.join(__dirname, "view")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/templates/index.html"));
});

app.get("/perfil", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/templates/perfil.html"));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));