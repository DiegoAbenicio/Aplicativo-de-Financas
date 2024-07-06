const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbService');
const ContaBancaria = require('./ContaBancaria');
const User = require('./User');

const RendaExtra = sequelize.define('Salario', {
	servicoRealizado: {
    type: DataTypes.STRING,
    allowNull: false
  },
	descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
	valorDoServico: {
		type: DataTypes.FLOAT,
    allowNull: false
	},
	dataDaContagem: {
		type: DataTypes.DATE,
    allowNull: false
	},
	statusDoPagamento: {
		type: DataTypes.CHAR,
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
  tableName: 'rendaExtra'
});

ContaBancaria.hasMany(RendaExtra, { foreignKey: 'contaBancariaId' });
RendaExtra.belongsTo(ContaBancaria, { foreignKey: 'contaBancariaId' });
User.hasMany(RendaExtra, { foreignKey: 'userId' });
RendaExtra.belongsTo(User, { foreignKey: 'userId' });

module.exports = RendaExtra;
