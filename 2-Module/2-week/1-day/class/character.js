class Character {
  constructor(name, startingRoom, description, maxHP = 150) {
    this.name = name;
    this.currentRoom = startingRoom;
    this.items = [];
    this.description = description;
    this.maxHP = maxHP;
    this.currentHP = maxHP;
    this.weapon = null;
  }

  equipWeapon(weapon) {
    this.weapon = weapon;
    let idx = this.items.indexOf(weapon)
    if (idx >= 0) this.items.splice(idx, 1)
    if (idx === -1) console.log("You didn't have that weapon in your items.")
  }

  attack(target) {
    if (!this.weapon) console.log("You don't have a weapon equipped.")
    else {
      target.currentHP -= this.weapon.damage
      console.log(`You dealt ${this.weapon.damage} to ${target.name}. They have ${target.currentHP} hp left.`)
    }
  }

}

module.exports = {
  Character,
};
