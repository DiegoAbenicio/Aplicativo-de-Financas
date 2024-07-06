const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbService');
const ContaBancaria = require('./ContaBancaria');
const User = require('./User');

const Saldo = sequelize.define('Saldo', {
	valorEmConta: {
    type: DataTypes.STRING,
    allowNull: false
  },
	dataDaContagem: {
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
  tableName: 'saldo'
});

ContaBancaria.hasMany(Saldo, { foreignKey: 'contaBancariaId' });
Saldo.belongsTo(ContaBancaria, { foreignKey: 'contaBancariaId' });
User.hasMany(Saldo, { foreignKey: 'userId' });
Saldo.belongsTo(User, { foreignKey: 'userId' });

module.exports = Saldo;
