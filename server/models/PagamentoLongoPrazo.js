const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbService');
const ContaBancaria = require('./ContaBancaria');
const Cartoes = require('./Cartoes');
const FormaDePagamento = require('./FormaDePagamento');
const User = require('./User');

const PagamentoLongoPrazo = sequelize.define('PagamentoCurtoPrazo', {
	tituloDoPagamento: {
    type: DataTypes.STRING,
    allowNull: false
  },
	descricao: {
		type: DataTypes.TEXT,
    allowNull: true
	},
	valorTotal: {
		type: DataTypes.FLOAT,
    allowNull: false
	},
	valorParcela: {
		type: DataTypes.FLOAT,
    allowNull: false
	},
	quantidadeDeParcelas: {
		type: DataTypes.INTEGER,
    allowNull: false
	},
	dataDeCompra: {
		type: DataTypes.DATE,
    allowNull: false
	},
	dataInicialPagamento: {
		type: DataTypes.DATE,
    allowNull: false
	},
	dataFinalPagamento: {
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
  tableName: 'pagamentoLongoPrazo'
});

ContaBancaria.hasMany(PagamentoLongoPrazo, { foreignKey: 'contaBancariaId' });
PagamentoLongoPrazo.belongsTo(ContaBancaria, { foreignKey: 'contaBancariaId' });
Cartoes.hasMany(PagamentoLongoPrazo, { foreignKey: 'cartoesId' });
PagamentoLongoPrazo.belongsTo(Cartoes, { foreignKey: 'cartoesId' });
FormaDePagamento.hasMany(PagamentoLongoPrazo, { foreignKey: 'formaDePagamentoId' });
PagamentoLongoPrazo.belongsTo(FormaDePagamento, { foreignKey: 'formaDePagamentoId' });
User.hasMany(PagamentoLongoPrazo, { foreignKey: 'userId' });
PagamentoLongoPrazo.belongsTo(User, { foreignKey: 'userId' });

module.exports = PagamentoLongoPrazo;
