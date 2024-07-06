const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbService');
const ContaBancaria = require('./ContaBancaria');
const Cartoes = require('./Cartoes');
const FormaDePagamento = require('./FormaDePagamento');
const User = require('./User');

const PagamentoCurtoPrazo = sequelize.define('PagamentoCurtoPrazo', {
	tituloDoPagamento: {
    type: DataTypes.STRING,
    allowNull: false
  },
	descricao: {
		type: DataTypes.TEXT,
    allowNull: true
	},
	valor: {
		type: DataTypes.FLOAT,
    allowNull: false
	},
	dataDeCompra: {
		type: DataTypes.DATE,
    allowNull: false
	},
	contaBancariaId: {
    type: DataTypes.INTEGER,
    references: {
      model: ContaBancaria,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
		allowNull: true
  },
	cartoesId: {
    type: DataTypes.INTEGER,
    references: {
      model: Cartoes,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
		allowNull: true
  },
	formaDePagamentoId: {
    type: DataTypes.INTEGER,
    references: {
      model: FormaDePagamento,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
		allowNull: true
  },
	userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
		allowNull: true
  },
}, {
  tableName: 'pagamentoCurtoPrazo'
});

ContaBancaria.hasMany(PagamentoCurtoPrazo, { foreignKey: 'contaBancariaId' });
PagamentoCurtoPrazo.belongsTo(ContaBancaria, { foreignKey: 'contaBancariaId' });
Cartoes.hasMany(PagamentoCurtoPrazo, { foreignKey: 'cartoesId' });
PagamentoCurtoPrazo.belongsTo(Cartoes, { foreignKey: 'cartoesId' });
FormaDePagamento.hasMany(PagamentoCurtoPrazo, { foreignKey: 'formaDePagamentoId' });
PagamentoCurtoPrazo.belongsTo(FormaDePagamento, { foreignKey: 'formaDePagamentoId' });
User.hasMany(PagamentoCurtoPrazo, { foreignKey: 'userId' });
PagamentoCurtoPrazo.belongsTo(User, { foreignKey: 'userId' });

module.exports = PagamentoCurtoPrazo;
