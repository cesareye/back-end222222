const express = require('express');
// CORREÇÃO: Adicionado o './src/' antes de controllers
const { listarCardapio, adicionarItem } = require('./src/controllers/CardapioController');

const app = express();
const porta = 8080;

app.use(express.json());

app.get('/cardapio', listarCardapio);
app.post('/cardapio', adicionarItem);

app.listen(porta, () => {
    console.log(`📡 Servidor rodando na porta ${porta}...`);
});
