const { DataTypes } = require("sequelize");

const database = require("../database/db");

const Message = database.define("Message", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  theme: {
    type: DataTypes.STRING,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senderName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Message;
