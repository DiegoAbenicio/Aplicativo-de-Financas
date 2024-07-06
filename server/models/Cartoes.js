const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbService');
const ContaBancaria = require('./ContaBancaria');
const User = require('./User');

const Cartoes = sequelize.define('Cartoes', {
  contaBancariaId: {
    type: DataTypes.INTEGER,
    references: {
      model: ContaBancaria,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
		allowNull: false
  },
	creditoAtivo: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
	limiteDoCartao: {
		type: DataTypes.FLOAT,
    allowNull: true
	},
	nomePersonalizado: {
		type: DataTypes.STRING,
    allowNull: false
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
  tableName: 'cartoes'
});

ContaBancaria.hasMany(Cartoes, { foreignKey: 'contaBancariaId' });
Cartoes.belongsTo(ContaBancaria, { foreignKey: 'contaBancariaId' });
User.hasMany(Cartoes, { foreignKey: 'userId' });
Cartoes.belongsTo(User, { foreignKey: 'userId' });

module.exports = Cartoes;
