const express = require("express");
const router = express.Router();

router.get('/', (req, res) => { res.send("success") });
router.post('/', (req, res) => { res.send("success") });
router.put('/:id', (req, res) => { res.send("success") });


module.exports = router;