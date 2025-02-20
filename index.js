const sequelize = require('../config/database'); // Correctly import database instance
const Employee = require('./employee');
const Profile = require('./profile');

// Sync models with database
const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Use `force: false` to avoid data loss
    console.log('Database & tables created successfully!');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

syncDatabase();

module.exports = { sequelize, Employee, Profile };
