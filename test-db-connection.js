require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

client.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
  } else {
    console.log('Conectado ao banco de dados');
    client.end();
  }
});
