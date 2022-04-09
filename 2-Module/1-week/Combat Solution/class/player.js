const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    let item = this.currentRoom.getItemByName(itemName);

    if (item) {
      this.items.push(item);
      console.log(`You took ${item.name}`)
    }

  }

  dropItem(itemName) {

    let item = this.getItemByName(itemName);

    if (item) {
      this.currentRoom.items.push(item);
      console.log(`You dropped ${item.name}`)
    }
  }

  eatItem(itemName) {
    let item = this.getItemByName(itemName);

    if (!item) {
      console.log(`You do not have ${itemName}`);
    } else if (!(item instanceof Food)) {
      console.log(`You cannot eat ${item.name}`);
      this.items.push(item);
    } else {
      console.log(`You ate ${item.name}`);
    }

  }

  getItemByName(name) {

    for (let i = 0 ; i < this.items.length ; i++) {
      let item = this.items[i];
      if (item.name.toLowerCase().startsWith(name)) {
        return this.items.splice(i, 1)[0];
      }
    }

    console.log("Item not found");
  }

  hit(name) {

    let target = this.currentRoom.getEnemyByName(name);

    if (!target) {
      console.log(`You do not see ${name} here`)
    } else if (!(target instanceof Enemy)) {
      console.log(`${target.name} is not your enemy.`);
    } else {
      target.applyDamage(this.strength);
      console.log(`You hit ${target.name} for ${this.strength} damage`);
    }

  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
