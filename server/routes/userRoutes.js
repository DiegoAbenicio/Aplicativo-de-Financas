const express = require('express');
const router = express.Router();
const { saveUser } = require('../services/userService');

router.post('/salvar', async (req, res) => {
  const { nome } = req.body;
  try {
    const user = await saveUser(nome);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send('Erro ao salvar dados');
  }
});

module.exports = router;
