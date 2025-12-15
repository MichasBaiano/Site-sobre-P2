import { openDb } from "../Config/db.js";

export class BannersModel {
    static async getAll() {
        const db = await openDb();
        return db.all('SELECT * FROM banners');
    }

    static async create(dados) {
        const db = await openDb();
        const resultado = await db.run(
            `INSERT INTO banners (titulo, imagem, link) VALUES (?, ?, ?)`,
            [dados.titulo, dados.imagem, dados.link]
        );
        return { id: resultado.lastID, ...dados };
    }

    static async delete(id) {
        const db = await openDb();
        await db.run('DELETE FROM banners WHERE id=?', [id]);
        return { message: "Deletado com sucesso" };
    }
}