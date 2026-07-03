const { cardapioOficial } = require('../models/CardapioModel');

// 1. Garanta que a função GET está aqui
const listarCardapio = (req, res) => {
    return res.status(200).json(cardapioOficial);
};

// 2. A função POST com o Porteiro Supremo
const adicionarItem = (req, res) => { 
    // Se o corpo da requisição não existir de jeito nenhum
    if (!req.body) {
        return res.status(400).json({ erro: "Pacote rejeitado! O corpo da requisição está vazio." });
    }

    const { nome, categoria, preco } = req.body;

    // Porteiro dos campos obrigatórios
    if (!nome || !categoria || preco === undefined) {
        return res.status(400).json({ erro: "Pacote rejeitado! Faltam dados obrigatórios." });
    }

    // O Estoquista criando o ID e guardando o lanche
    const novoId = cardapioOficial.length + 1;
    const novoLanche = { id: novoId, nome, categoria, preco };
    cardapioOficial.push(novoLanche);

    // O Recibo de sucesso
    return res.status(201).json({ sucesso: true, dados: novoLanche });
};

// 3. ESSA LINHA PRECISA EXPORTAR EXATAMENTE AS DUAS FUNÇÕES:
module.exports = { listarCardapio, adicionarItem };
