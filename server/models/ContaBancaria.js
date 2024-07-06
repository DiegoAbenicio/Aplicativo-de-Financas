const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbService');
const User = require('./User');

const ContaBancaria = sequelize.define('ContaBancaria', {
  nomeDoBanco: {
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
  tableName: 'contaBancaria'
});

User.hasMany(ContaBancaria, { foreignKey: 'userId' });
ContaBancaria.belongsTo(User, { foreignKey: 'userId' });

module.exports = ContaBancaria;
