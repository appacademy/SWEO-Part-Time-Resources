const express = require("express");
const asyncHandler = require("express-async-handler");

const ItemsRepository = require("../../db/items-repository");

const itemValidations = require("../../validations/items");

const router = express.Router();

router.put(
  "/:id",
  itemValidations.validateUpdate,
  asyncHandler(async function (req, res) {
    const item = await ItemsRepository.updateItem(req.body);
    return res.json(item);
  })
);

router.delete("/:id", asyncHandler(async function (req, res) {
  const id = await ItemsRepository.deleteItem(req.params.id);
  return res.json({ id });
}));

module.exports = router;