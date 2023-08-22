const { expect } = require('chai');
const { Player } = require("../class/player.js");
const { Room } = require("../class/room.js");
const { Item } = require("../class/item.js");
const { Food } = require("../class/food.js");

describe('Item', function () {
  it("should be a new class", function () {
    let item = new Item("rock", "just a simple rock");

    expect(item instanceof Room).to.be.false
    expect(item instanceof Food).to.be.false
    expect(item instanceof Player).to.be.false
  })

  it('should have name and description properties', function () {
    let item = new Item("rock", "just a simple rock");

    expect(item.name).to.equal("rock");
    expect(item.description).to.equal("just a simple rock");
  });

  describe('Item - Player interactions', function () {
    it("can retrive an item from the player's inventory by name", function () {
      let item1 = new Item("paper", "just a simple piece of paper");
      let item2 = new Item("rock", "just a simple rock");
      let item3 = new Item("scissors", "just a simple pair of scissors");
      let room = new Room("Test Room", "A test room");
      let player = new Player("player", room);
      player.items.push(item1, item2, item3);

      expect(player.items.length).to.equal(3);
      expect(player.getItemByName("rock")).to.equal(item2);
      expect(player.items.length).to.equal(2);
    });

    it("retrives only 1 item by name if you have duplicates", function () {
      let item1 = new Item("paper", "just a simple piece of paper");
      let item2 = new Item("rock", "just a simple rock");
      let item3 = new Item("rock", "just a simple rock");
      let item4 = new Item("scissors", "just a simple pair of scissors");
      let room = new Room("Test Room", "A test room");
      let player = new Player("player", room);
      player.items.push(item1, item2, item3, item4);

      expect(player.items.length).to.equal(4);
      expect(player.getItemByName("rock")).to.eql(item2);
      expect(player.items.length).to.equal(3);
    });
  })

  describe('Item - Room interactions', function () {
    it("can be retrive an item from the room's inventory by name", function () {
      let item1 = new Item("paper", "just a simple piece of paper");
      let item2 = new Item("rock", "just a simple rock");
      let item3 = new Item("scissors", "just a simple pair of scissors");
      let room = new Room("Test Room", "A test room");
      room.items.push(item1, item2, item3);

      expect(room.items.length).to.equal(3);
      expect(room.getItemByName("rock")).to.equal(item2);
      expect(room.items.length).to.equal(2);
    });

    it("retrives only 1 item by name if you have duplicates", function () {
      let item1 = new Item("paper", "just a simple piece of paper");
      let item2 = new Item("rock", "just a simple rock");
      let item3 = new Item("rock", "just a simple rock");
      let item4 = new Item("scissors", "just a simple pair of scissors");
      let room = new Room("Test Room", "A test room");
      room.items.push(item1, item2, item3, item4);

      expect(room.items.length).to.equal(4);
      expect(room.getItemByName("rock")).to.eql(item2);
      expect(room.items.length).to.equal(3);
    });
  })

  describe('Item, Room, Player interactions', function () {

    it("a player can take an item from the room they're in", function () {
      let item = new Item("rock", "just a simple rock");
      let room = new Room("Test Room", "A test room");
      let player = new Player("player", room);
      room.items.push(item);

      expect(room.items.length).to.equal(1);
      expect(player.items.length).to.equal(0);

      player.takeItem("rock");

      expect(room.items.length).to.equal(0);
      expect(player.items.length).to.equal(1);
      expect(player.getItemByName("rock")).to.equal(item);
    });

    it('a player can drop an item into their current room', function () {
      let item = new Item("rock", "just a simple rock");
      let room = new Room("Test Room", "A test room");
      let player = new Player("player", room);
      player.items.push(item);

      expect(room.items.length).to.equal(0);
      expect(player.items.length).to.equal(1);

      player.dropItem("rock");

      expect(room.items.length).to.equal(1);
      expect(player.items.length).to.equal(0);
      expect(room.getItemByName("rock")).to.equal(item);
    });
  })
});
