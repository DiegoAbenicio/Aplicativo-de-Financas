const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const formaDePagamentoRoutes = require('./routes/formaDePamentoRoutes');
const contaBancariaRoutes = require('./routes/contaBancariaRoutes');
const cartoesRoutes = require('./routes/cartoesRoutes');
const sequelize = require('./services/dbService');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/usuario', userRoutes);
app.use('/forma-de-pagamento', formaDePagamentoRoutes);
app.use('/conta-bancaria', contaBancariaRoutes);
app.use('/cartoes', cartoesRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
}).catch(error => {
  console.error('Erro ao sincronizar com o banco de dados:', error);
});
