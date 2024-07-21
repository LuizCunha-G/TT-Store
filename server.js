const express = require('express');
const mysql = require('mysql');

const app = express();

// Configuração do MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Gustavo',
  password: 'sptech',
  database: 'TT_store'
});

// Middleware para permitir CORS (antes das rotas)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permite acesso de qualquer origem
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos permitidos
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Headers permitidos
  next();
});

// Rota para obter dados dos produtos
app.get('/produtos', (req, res) => {
  connection.query('SELECT * FROM produtos', (error, results, fields) => {
    if (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
      throw error;
    }
    res.json(results); // Retorna os resultados em formato JSON
  });
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
