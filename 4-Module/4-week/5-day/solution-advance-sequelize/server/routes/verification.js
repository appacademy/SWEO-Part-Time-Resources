// Instantiate router - DO NOT MODIFY
const express = require('express');
const router = express.Router();

// Import model(s) - DO NOT MODIFY
const { Classroom, Student, Supply } = require('../db/models');

// Counts
router.get('/counts', async (req, res, next) => {
    try {
        const result = {};

        result.classroomCount = await Classroom.count();
        result.studentCount = await Student.count();
        result.supplyCount = await Supply.count();

        res.json(result);
    } catch (err) {
        next(err);
    }
});

// Export class - DO NOT MODIFY
module.exports = router;