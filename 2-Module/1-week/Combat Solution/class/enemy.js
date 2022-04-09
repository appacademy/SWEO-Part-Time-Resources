const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name, description, currentRoom);

    this.player = null;
    this.attackTarget = null;
    this.cooldown = 3000;
    this.health = 20;
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    this.cooldown += 3000;

    const roomExits = this.currentRoom.getExits();
    const randomIndex = Math.floor(roomExits.length * Math.random());
    const randomDirection = roomExits[randomIndex];

    const nextRoom = this.currentRoom.getRoomInDirection(randomDirection);

    if (nextRoom) {
      this.alert(`${this.name} has moved ${randomDirection}`);
      this.currentRoom = nextRoom;
      this.alert(`${this.name} has entered the room`);
    }
  }

  roomHasSandwich() {
    return this.currentRoom.items.filter(item => item.name === 'sandwich').length > 0;
  }

  takeSandwich() {
    this.cooldown = 2000;

    this.items.push(this.currentRoom.getItemByName('sandwich'));
    this.alert(`${this.name} picks up a sandwich`);
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = () => {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    this.cooldown += this.strength * 100;

    this.attackTarget.applyDamage(this.strength);

    this.alert(`${this.name} hits you for ${this.strength} damage`)
  }

  hasAttackTarget() {
    return this.attackTarget === this.player && this.player.currentRoom === this.currentRoom;
  }

  applyDamage(amount) {
    super.applyDamage(amount);

    this.attackTarget = this.player;
  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else if (this.hasAttackTarget()) {
      this.attack();
      this.rest();
    } else if (this.roomHasSandwich()) {
      this.takeSandwich();
      this.rest();
    } else {
      // this.scratchNose();
      this.randomMove();
      this.rest();
    }
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};
