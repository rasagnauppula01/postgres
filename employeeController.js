const { Employee, Profile } = require('../models');

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll({ include: Profile });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees', error });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const { name, email } = req.body;
    const employee = await Employee.create({ name, email });
    res.json(employee);
  } catch (error) {
    res.status(400).json({ message: 'Error creating employee', error });
  }
};
