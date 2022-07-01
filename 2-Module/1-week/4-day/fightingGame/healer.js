const NPC = require('./npc');

class Healer extends NPC{
  constructor(name, finishingMove){
    super(name, finishingMove, 30);
    this.mana = 25
    this.maxMana = this.mana;
    
    Healer.numberOfHealers++
  }

  static compareMana(healer1, healer2){
    healer2.mana += 100

    console.log(`${healer1.name}'s mana is ${healer1.mana}, and ${healer2.name}'s mana is ${healer2.mana}`)
  }

  static numberOfHealers = 0;

  static getNumberOfHealers(){
    console.log(`There are ${Healer.numberOfHealers} Healers in this game! `)
  }

  heal(ally){
    if (ally.health > 0){
      this.mana--
      ally.getHealed(20, this);
      this.gainXp();
    } else if (ally.health === ally.maxHealth){
      console.log(`${ally.name} already has full health!`);
    }
  }

  revive(ally){
    if (ally.health === 0){
      this.mana--
      console.log(`${this.name} has revived ${ally.name}!`)
      ally.getHealed(50);
      this.gainXp();
    } else {
      console.log(`${ally.name} does not need to be revived!`)
    }
  }

  superHeal(ally){
    if (this.mana > 5 && this.xp % 10 === 0){
      this.mana -= 5;
      console.log(`${this.name} used Super Heal and has healed ${ally.name} 50 points!`)
      ally.getHealed(50);
      this.gainXp();
    }
  }

  superRevive(ally){
    if (this.mana > 5 && this.xp % 7 === 0){
      this.mana -= 5;
      console.log(`${this.name} has used Super Revive and revived ${ally.name}!`)
      ally.getHealed(100);
      this.gainXp();
    }
  }

  replenishMana(amount){
    if (this.maxMana <= amount) this.mana = this.maxMana;
    else this.mana += amount;
  }
}

// console.log(mara)
// console.log(shera)

// mara.attack(shera)
// mara.attack(shera)
// mara.attack(shera)
// mara.attack(shera)
// mara.attack(shera)
// mara.attack(shera)
// mara.useFinisher(shera)
// mara.attack(shera)
// mara.attack(shera)
// mara.attack(shera)
// mara.attack(shera)
// mara.attack(shera)
// mara.useFinisher(shera)
// mara.revive(shera);

// console.log(mara)
// console.log(shera)

module.exports = Healer;