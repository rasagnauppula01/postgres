const sequelize = require("./database");
const User = require("./models/User");

const start = async () => {
  try {
    await sequelize.sync({ force: true }); // This creates the table, dropping it first if it already existed
    console.log("Database & tables created!");

    // Insert a test user
    await User.create({ name: "Rasagna", email: "rasagna@example.com" });

    // Fetch users
    const users = await User.findAll();
    console.log("Users:", users.map((u) => u.toJSON()));
  } catch (error) {
    console.error("Error:", error);
  }
};

start();
