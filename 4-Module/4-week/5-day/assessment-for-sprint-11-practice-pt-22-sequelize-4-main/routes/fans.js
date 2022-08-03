const express = require('express');
const router = express.Router();

const { DraftPick, Fan} = require('../db/models')

router.get('/:fanId/drafts', async (req, res)=>{
	const fans = await Fan.findAll({
		include: {
			model: DraftPick,
			where: {
				fanId: req.params.fanId
			}
		}
	})

	res.json(fans)
})

module.exports = router;
