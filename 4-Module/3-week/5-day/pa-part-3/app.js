require("express-async-errors");
require("dotenv").config();
const express = require("express");
const app = express();

const { WarehouseItem } = require("./db/models");

app.use(express.json());

app.get("/items", async (req, res) => {
	// SELECT * FROM WarehouseItems
	// WHERE isUsed = false;
	const items = await WarehouseItem.findAll({
		where: {
			isUsed: false,
		},
	});

	res.json(items);
});

app.get("/items/:name", async (req, res) => {
	// const { name } = req.params;

	// SELECT * FROM WarehouseItems
	// WHERE name = ?;
	const item = await WarehouseItem.findOne({
		where: {
			name: req.params.name,
		},
	});

	if (item) {
		res.json(item);
	} else {
		res.status(404);
		res.json({ message: "Warehouse Item not found" });
	}
});

app.put("/items/:id", async (req, res) => {
	const { name, price, quantity, isUsed } = req.body;
	const { id } = req.params;

	// SELECT * FROM WarehouseItem
	// WHERE id = ?;
	const updateItem = await WarehouseItem.findByPk(req.params.id);

	if (updateItem) {
		// updateItem.name = name;
		// updateItem.price = price;
		// updateItem.quantity = quantity;
		// updateItem.isUsed = isUsed;
		// await updateItem.save();
		await updateItem.update({
			name,
			price,
			quantity,
			isUsed,
		});

		res.json(updateItem);
	} else {
		res.status(404);
		res.json({
			message: "Warehouse Item not found",
		});
	}
});

app.delete("/items/:id", async (req, res) => {
	const { id } = req.params;

	// SELECT * FROM WarehouseItems
	// WHERE id = ?;
	const doomedItem = await WarehouseItem.findByPk(id);

	if (doomedItem) {
		await doomedItem.destroy();

		res.json({
			message: "Successfully deleted",
		});
	} else {
		res.status(404);
		res.json({
			message: "Warehouse Item not found",
		});
	};
});

if (require.main === module) {
	const port = 8003;
	app.listen(port, () => console.log("Server-3 is listening on port", port));
} else {
	module.exports = app;
}
