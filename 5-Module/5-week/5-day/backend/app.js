const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/users', require('./routes/users'));

// Sync database and start server
sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log(`Server is running on http://localhost:${PORT}`);
	});
});
