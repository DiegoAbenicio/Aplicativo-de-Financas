const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbService');

const User = sequelize.define('User', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
	password: {
    type: DataTypes.STRING,
    allowNull: false
  },
	dataDeNascimento: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	email: {
		type: DataTypes.STRING,
    allowNull: true
	}
}, {
  tableName: 'usuarios'
});

module.exports = User;
