// Create an edible `Food` class that inherits from the `Item` class

const { Item } = require('./item');

class Food extends Item {

    constructor(name, description) {
        super(name, description);
    }
}

module.exports = {
  Food,
};