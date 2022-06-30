// As opposed to isntance methods, static methods are invoked directly on a class, not an instance.
// also referred to as `class methods` for that reason.
// the syntax for definition is the same as instance methods, except you add the word
// static before the function declaration. *Remember, no function keyword!!*


class NPC{
  constructor(name, finishingMove, shield = 25, level = 1, damage = 5, health = 25){
    this.name = name;
    this.finishingMove = finishingMove;
    this.level = level;
    this.damage = damage;
    this.health = health;
    this.maxHealth = health;
    this.shield = shield;
    this.maxShield = shield;
    this.xp = 0;
    this.finishingMoveDamage = this.damage * 2;
    this.attackable = true;

    // increasing the static variable every time an NPC is created.
    NPC.totalNPCs++;
  }

  static checkIfAttackable(enemy){
    if(enemy.attackable === false){
      console.log(`${enemy.name} has been knocked out, you cannot attack them.`)
      return false;
    } else return true;
  }

  // Static Variable
  static totalNPCs = 0;

  // static method to find out how many NPCs have been created.
  static getNumberOfNPCs(){
    console.log(`There are ${NPC.totalNPCs} NPCs in this game!`)
  }

  attack(enemy){
    let attackable = NPC.checkIfAttackable(enemy);
    if(attackable){
      console.log(`${this.name} has dealt ${this.damage} damage to ${enemy.name}!`)
      enemy.takeDamage(this.damage);
      this.gainXp();
    }
  }

  useFinisher(enemy){
    let attackable = NPC.checkIfAttackable(enemy);
    if(attackable){
      if (this.xp % 6 === 0){
        console.log(`${this.name} used ${this.finishingMove} on ${enemy.name}!!`)
        enemy.takeDamage(this.finishingMoveDamage);
        this.gainXp();
      } else console.log(`${this.name} needs ${this.xp % 6} more xp to use ${this.finishingMove}!`)

    }
  }

  getHealed(amount, ally){
    const newHealth = this.health + amount;
    if (this.maxHealth <= newHealth) {
      this.health = this.maxHealth;
      console.log(`${ally.name} has healed ${this.name} to max health!`)
    }
    else {
      this.health = newHealth;
      console.log(`${ally.name} has healed ${this.name} to ${this.health} health!`)
    }
  }

  replenishShield(amount){
    let newShield = this.shield + amount;
    if (this.maxShield <= newShield) this.shield = this.maxShield;
    else this.shield = newShield;
  }

  gainXp(){
    this.xp++;
    if (this.level < 26 && this.xp % 25 === 0) this.levelUp();
    else if (this.level < 51 && this.xp % 50 === 0) this.levelUp();
    else if (this.level < 75 && this.xp % 75 === 0) this.levelUp();
    else if (this.level > 100 && this.xp % 100 === 0) this.levelUp();
  }

  levelUp(){
    this.level++
    if (this instanceof Healer) this.damage += 3;
    else this.damage += 5;
    this.maxHealth += 25;
    this.health = this.maxHealth;
    if (this instanceof Healer) this.maxShield += 22;
    else this.maxShield += 20;
    this.shield = this.maxShield;
    if (this instanceof Healer || this instanceof Mage){
      this.maxMana += 20;
      this.mana = this.maxMana;
    }
    console.log(`${this.name} has leveled up to level ${this.level}!`)
    console.log(`${this.name}'s damage has increased to ${this.damage}!`)
    console.log(`${this.name}'s health has increased to ${this.health}!`)
    console.log(`${this.name}'s shield has increased to ${this.shield}!`)
    if (this instanceof Healer || this instanceof Mage) console.log(`${this.name}'s mana has increased to ${this.mana}!`)
  }

  takeDamage(damage){
    if (this.attackable === false){
      console.log(`${this.name} has been knocked out, you can deal no further damage.`);
    }
    if (this.shield > damage) {
      this.shield -= damage;
      console.log(`${this.name}'s shields took a hit! ${this.name}'s shields are now at ${this.shield}`)
    } else if (this.shield > 0 && this.shield < damage){
      damage = damage - this.shield;
      this.shield = 0;
      this.health -= damage;
      console.log(`${this.name}'s shields have been depleted! ${this.name}'s health is now at ${this.health}`)
    } else if (this.shield <= 0 && this.health > damage){
      this.health -= damage;
      console.log(`${this.name}'s shields have been depleted! ${this.name}'s health is now at ${this.health}`)
    } else if (this.shield <= 0 && this.health < damage){
      this.health = 0;
      console.log(`${this.name} has been knocked out. RIP!`)
      this.attackable = false;
    }
  }

}

const createNPCs = (all = []) => {
  let num = 1;
  for (let i = 0; i < 8; i++){
    if (num <= 3){
      num++
      all.push(new NPC('Goblin', 'Rain Fire Arrows'))
    } else if (num > 3 && num <= 6){
      num++
      all.push(new NPC('Orc', 'Whirlwind Blow'))
    } else {
      num++
      all.push(new NPC('Elf', 'Lightning Strike'))
    }
  }

  return all;
}

// let NPCs = createNPCs();
// console.log(NPCs);
// NPC.getNumberOfNPCs()

// let bloop = new NPC('Imaginary Friend', 'Snore Loudly');
// console.log(bloop);
// let blip = new NPC('Dancing Monkey', 'Channel Donkey Kong')
// console.log(blip)
// bloop.attack(blip);

module.exports = NPC;




