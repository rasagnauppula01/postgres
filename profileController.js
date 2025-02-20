const { Profile } = require('../models');

exports.createProfile = async (req, res) => {
  try {
    const { age, address, employeeId } = req.body;
    const profile = await Profile.create({ age, address, employeeId });
    res.json(profile);
  } catch (error) {
    res.status(400).json({ message: 'Error creating profile', error });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ where: { employeeId: req.params.id } });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error });
  }
};
