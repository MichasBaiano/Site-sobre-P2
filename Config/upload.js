// Config/upload.js
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuração de Armazenamento
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Salva na pasta view/uploads
        cb(null, path.join(__dirname, '../view/uploads/'));
    },
    filename: function (req, file, cb) {
        // Gera nome único: timestamp + extensão original (ex: 17300022-foto.jpg)
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

export const upload = multer({ storage: storage });