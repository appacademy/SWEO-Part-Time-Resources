const { check } = require("express-validator");
const { types } = require("../db/models/pokemonType");
const { handleValidationErrors } = require("./utils");

const id = check("id")
	.notEmpty()
	.withMessage("cannot be empty")
	.isInt({ min: 0 });
const number = check("number")
	.notEmpty()
	.withMessage("cannot be empty")
	.isInt({ min: 0 });
const attack = check("attack")
	.notEmpty()
	.withMessage("cannot be empty")
	.isInt({ min: 0, max: 100 })
	.toInt();
const defense = check("defense")
	.notEmpty()
	.withMessage("cannot be empty")
	.isInt({ min: 0, max: 100 })
	.toInt();
const imageUrl = check("imageUrl")
	.notEmpty()
	.withMessage("cannot be empty")
	.isURL({ require_protocol: false, require_host: false });
const name = check("name").notEmpty().withMessage("cannot be empty");
const type = check("type")
	.notEmpty()
	.withMessage("cannot be empty")
	.isIn(types);
const move1 = check("move1")
  .notEmpty()
  .withMessage("cannot be empty")
  .isLength({ max: 30 })
  .withMessage("must be less than 30 characters")
const move2 = check("move2")
	.isLength({ max: 30 })
	.withMessage("must be less than 30 characters");

exports.validateCreate = [
	number,
	attack,
	defense,
	imageUrl,
	name,
	type,
	move1,
	move2,
	handleValidationErrors,
];

exports.validateUpdate = [
	id,
	number,
	attack,
	defense,
	imageUrl,
	name,
	type,
	move1,
  move2,
	handleValidationErrors,
];
