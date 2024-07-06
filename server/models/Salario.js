const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbService');
const ContaBancaria = require('./ContaBancaria');
const User = require('./User');

const Salario = sequelize.define('Salario', {
	nomeDaEmpresa: {
    type: DataTypes.STRING,
    allowNull: false
  },
	valorMensal: {
		type: DataTypes.FLOAT,
    allowNull: false
	},
	dataDePagamento: {
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
  tableName: 'salario'
});

ContaBancaria.hasMany(Salario, { foreignKey: 'contaBancariaId' });
Salario.belongsTo(ContaBancaria, { foreignKey: 'contaBancariaId' });
User.hasMany(Salario, { foreignKey: 'userId' });
Salario.belongsTo(User, { foreignKey: 'userId' });

module.exports = Salario;
