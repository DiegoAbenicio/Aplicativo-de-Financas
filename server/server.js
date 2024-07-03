const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Usar as rotas
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
