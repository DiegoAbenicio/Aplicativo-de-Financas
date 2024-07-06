const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/salvar', async (req, res) => {
  const { nome } = req.body;

  try {
    const user = await User.create({ nome });
    res.status(200).json(user);
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
    res.status(500).send('Erro ao salvar dados');
  }
});

module.exports = router;
