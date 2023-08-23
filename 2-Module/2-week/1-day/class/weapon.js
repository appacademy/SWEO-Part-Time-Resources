const { Item } = require("./item")

class Weapon extends Item {
	constructor(name, description, damage) {
		super(name, description);
		this.damage = damage;
	}
	
}

module.exports = {
  Weapon
};

