const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("admin", "postgres", "2822", {
  host: "localhost",  
  dialect: "postgres",  
//   logging: false, 
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connected successfully!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectDB();

module.exports = sequelize;
