class Character {

  constructor(name, description, currentRoom) {
    this.name = name;
    this.description = description;
    this.items = [];
    this.currentRoom = currentRoom

    this.health = 100;
    this.strength = 10;

  }

  applyDamage(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    // Drop all held items
    for (let i = 0 ; i < this.items.length ; i++) {
      this.currentRoom.items.push(this.items[i]);
    }

    this.currentRoom = null;

    console.log(`${this.name} is dead`);
  }

}

module.exports = {
  Character,
};
