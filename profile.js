const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Ensure correct import
const Employee = require("./employee"); // Ensure Employee model is imported

const Profile = sequelize.define(
  "Profile",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    age: { type: DataTypes.INTEGER, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
  },
  { timestamps: false }
);

// One-to-One Association
Employee.hasOne(Profile, { foreignKey: "employeeId", onDelete: "CASCADE" });
Profile.belongsTo(Employee, { foreignKey: "employeeId" });

module.exports = Profile;
