const client = require('./dbService');

const saveUser = async (nome) => {
  const query = 'INSERT INTO usuarios (nome) VALUES ($1) RETURNING *';
  const values = [nome];
  try {
    const result = await client.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
    throw error;
  }
};

module.exports = {
  saveUser
};
