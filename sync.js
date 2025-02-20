const sequelize = require('./models/index');
const Employee = require('./models/employee');
const Profile = require('./models/profile');

sequelize.sync({ force: true }).then(async () => {
  console.log('Database & tables created!');

  const emp1 = await Employee.create({ name: 'John Doe', email: 'john@example.com' });
  await Profile.create({ age: 30, address: 'New York', employeeId: emp1.id });

  console.log('Sample data inserted!');
  process.exit();
});
