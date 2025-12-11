// model/EstabelecimentosModel.js
const estabelecimentos = [
    {
        id: 1,
        nome: "Pousada Cantinho do Norte",
        categoria: "hospedagem",
        endereco: "Rua Corinto Andrade, 123",
        telefone: "(86) 99999-0000",
        descricao: "Ambiente familiar e café da manhã regional.",
        imagem: "https://via.placeholder.com/400x300?text=Pousada",
        destaque: true // Simula um cliente 'premium'
    },
    {
        id: 2,
        nome: "Restaurante O Compadre",
        categoria: "gastronomia",
        endereco: "Av. Coronel Cordeiro, 450",
        telefone: "(86) 98888-1111",
        descricao: "O melhor da galinha caipira e capote.",
        imagem: "https://via.placeholder.com/400x300?text=Restaurante",
        destaque: false
    },
    {
        id: 3,
        nome: "Arte em Opala",
        categoria: "comercio",
        endereco: "Mercado do Artesão, Box 5",
        telefone: "(86) 97777-2222",
        descricao: "Joias artesanais em prata e opala nobre.",
        imagem: "https://via.placeholder.com/400x300?text=Joias",
        destaque: false
    }
];

export class EstabelecimentosModel {
    static getAll() {
        return estabelecimentos;
    }
}