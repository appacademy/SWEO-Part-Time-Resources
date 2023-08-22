const { expect } = require('chai');
const { Player } = require("../class/player.js");
const { Room } = require("../class/room.js");
const { Item } = require("../class/item.js");
const { Food } = require("../class/food.js");

describe('Food', function () {
  it('should have name and description attributes', function () {
    let food = new Food("sandwich", "a delicious sandwich");

    expect(food.name).to.equal("sandwich");
    expect(food.description).to.equal("a delicious sandwich");
  });


  it('should inherit from Item', function () {
    let food = new Food("sandwich", "a delicious sandwich");

    expect(food instanceof Item).to.be.true;
    expect(food instanceof Food).to.be.true;
  });


  it('can be eaten by the player', function () {
    let food = new Food("sandwich", "a delicious sandwich");
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);
    player.items.push(food);

    expect(player.items.length).to.equal(1);

    player.eatItem("sandwich");

    expect(player.items.length).to.equal(0);
  });


  it('cannot be eaten if an item is not food', function () {
    let item = new Item("rock", "just a simple rock");
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);
    player.items.push(item);

    expect(player.items.length).to.equal(1);

    player.eatItem("rock");

    expect(player.items.length).to.equal(1);
  });
});
