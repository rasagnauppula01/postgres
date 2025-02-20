const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Employee = sequelize.define(
  "Employee",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
  },
  { timestamps: false }
);

module.exports = Employee;
