const express = require('express');
const { User } = require('../models');
const router = express.Router();
const { singleFileUpload, singleMulterUpload } = require("../awsS3");

// Get all users
router.get('/', async (req, res) => {
	try {
		const users = await User.findAll();
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: "Error fetching users." });
	}
});

// Create a new user
router.post('/',
	singleMulterUpload("image"),
	async (req, res) => {
		try {
			const { email, password } = req.body;
			const profileImageUrl = req.file ?
				await singleFileUpload({ file: req.file, public: true }) :
				null;
			const user = await User.create({ email, password, profileImageUrl });
			res.status(201).json(user);
		} catch (error) {
			res.status(500).json({ message: error });
		}
});

module.exports = router;
