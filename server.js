const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const employeeRoutes = require('./routes/employeeRoutes');
const profileRoutes = require('./routes/profileRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/employees', employeeRoutes);
app.use('/profiles', profileRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
