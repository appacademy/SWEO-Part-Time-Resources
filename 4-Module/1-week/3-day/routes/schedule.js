const express = require('express');
const router = express.Router();

const weeklySchedule = [false, true, true, false, true, false, true];

router.put('/week/:day', (req, res) => {
    // Update the schedule for specified day to have a game
    const day = parseInt(req.params.day);
    weeklySchedule.splice(day, 1, true);
    res.json(weeklySchedule);
});

router.get('/week', (req, res) => {
    // Send the full weekly schedule
    res.json(weeklySchedule);
});

module.exports = router;