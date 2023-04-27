const { check } = require("express-validator");
const { handleValidationErrors } = require("./utils");

const id = check("id").notEmpty().isInt({ min: 0 });
const happiness = check("happiness")
  .notEmpty()
  .isInt({ min: 0, max: 100 })
  .toInt();
const imageUrl = check("imageUrl")
  .notEmpty()
  .isURL({ require_protocol: false, require_host: false });
const name = check("name").notEmpty();
const price = check("price").isFloat();

exports.validateCreate = [
  happiness,
  name,
  price,
  handleValidationErrors
];

exports.validateUpdate = [
  id,
  happiness,
  imageUrl,
  name,
  price,
  handleValidationErrors
]
