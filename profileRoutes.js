const express = require('express');
const { createProfile, getProfile } = require('../controllers/profileController');

const router = express.Router();
router.post('/', createProfile);
router.get('/:id', getProfile);

module.exports = router;
