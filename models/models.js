const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Blocks = sequelize.define('blocks', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.STRING, defaultValue: '' },
  fontSize: { type: DataTypes.INTEGER, defaultValue: 16 },
  color: { type: DataTypes.STRING, defaultValue: '' },
  bgColor: { type: DataTypes.STRING, defaultValue: '' },
});

module.exports = { Blocks };
