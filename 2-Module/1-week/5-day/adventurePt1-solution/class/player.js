const { Food } = require("./food");
const { Room } = require("./room");
const { Item } = require('./item');

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
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
      let takenItem;
      for (let i = 0; i < this.currentRoom.items.length; i++){
        let item = this.currentRoom.items[i];
        if (item.name === itemName){
          takenItem = item;
          this.currentRoom.items.splice(i, 1);
          break;
        }
      }
      this.items.push(takenItem);
    }

    dropItem(itemName) {
      let droppedItem;
      for (let i = 0; i < this.items.length; i++){
        let item = this.items[i];
        if (item.name === itemName){
          droppedItem = item;
          this.items.splice(i, 1);
          break;
        }
      }
      this.currentRoom.items.push(droppedItem);
    }

    eatItem(itemName) {
      if (this.items.find(item => item.name === itemName)){
        for (let i = 0; i < this.items.length; i++){
          let item = this.items[i];
          if (item instanceof Food && item.name === itemName){
            this.items.splice(i, 1);
            console.log(`You ate the ${itemName}!`);
            return;
          }
        }
        console.log(`${itemName} is not a food!`)
      } else {
        console.log(`${itemName} is not in your items!`)
      }
    }

    getItemByName(name) {
      const item = this.items.find(item => item.name === name); 
      if (item) return item;
    }
}

// const room = new Room('test room', 'just here');
// const jordyn = new Player('jordyn', room);
// const pizza = new Food('pizza', 'the zaaa');
// const rock = new Item('rock', 'the pioneers used to ride these babies for miles');
// jordyn.items.push(pizza);
// console.log(jordyn.items)
// jordyn.eatItem(pizza.name)
// console.log(jordyn.items)
// jordyn.eatItem(rock.name)
// jordyn.items.push(rock);
// jordyn.eatItem(rock.name)
// console.log(jordyn.items)


module.exports = {
  Player,
};
