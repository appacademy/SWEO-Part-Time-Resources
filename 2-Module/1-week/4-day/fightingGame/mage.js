const NPC = require('./npc');

let elements = ['fire', 'water', 'earth', 'wind', 'spirit']

class Mage extends NPC{
  constructor(name, finishingMove){
    super(name, finishingMove);
    this.mana = 25;
    this.maxMana = this.mana;

    Mage.numberOfMages++
  }

  static numberOfMages = 0;

  static getNumberOfMages(){
    console.log(`There are ${Mage.numberOfMages} Mages in this game! `)
  }

  // polymorphism in action! We are overriding the parent class' attack method with our own!
  attack(enemy){
    this.mana--
    console.log(`${this.name} used an elemental ${elements[this.xp % 5]} attack for ${this.damage + 5} damage!`)
    enemy.takeDamage(this.damage + 5);
    this.gainXp();
  }



  replenishMana(amount){
    if (this.maxMana <= amount) this.mana = this.maxMana;
    else this.mana += amount;
  }
}



module.exports = Mage;