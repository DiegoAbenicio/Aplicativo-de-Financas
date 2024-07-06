const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbService');

const FormaDePagamento = sequelize.define('FormaDePagamento', {
  formaDePagamento: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  tableName: 'formaDePagamento'
});

module.exports = FormaDePagamento;
