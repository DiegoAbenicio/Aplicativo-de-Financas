const { Client } = require('pg');
const { dbConfig } = require('../config/config');

const client = new Client(dbConfig);

client.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
  } else {
    console.log('Conectado ao banco de dados');
  }
});

module.exports = client;
