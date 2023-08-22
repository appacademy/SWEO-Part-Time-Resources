const { expect } = require('chai');
const { Player } = require("../class/player.js");
const { Room } = require("../class/room.js");
const { Item } = require("../class/item.js");
const { Food } = require("../class/food.js");
const { World } = require("../class/world.js");
const { Character } = require("../class/character.js");
const { Enemy } = require("../class/enemy.js");

describe('Character', function () {
  let character;
  let room;
  let item;

  beforeEach(function () {
    room = new Room("Test Room", "A test room");
    item = new Item("rock", "just a simple rock");
    character = new Character('Character Name', room, "I'm a basic character template");
    character2 = new Character('Second Character', room, "I'm another basic character", 100);
  });

  it('should not inherit from another class', function () {
    expect(character instanceof Player).to.be.false
    expect(character instanceof Enemy).to.be.false
    expect(character instanceof Item).to.be.false
    expect(character instanceof Room).to.be.false
  })

  it('should have a name, currentRoom, and description property', function () {
    expect(character).to.have.property('name')
    expect(character.name).to.equal('Character Name')
    expect(character).to.have.property('currentRoom')
    expect(character.currentRoom).to.equal(room)
    expect(character).to.have.property('description')
    expect(character.description).to.equal("I'm a basic character template")
  })

  it('should also have a maxHP and a currentHP property that are set by 1 parameter', function () {
    expect(character).to.have.property('maxHP');
    expect(character).to.have.property('currentHP');
    expect(character.maxHP).to.equal(150);
    expect(character.currentHP).to.equal(150);
    expect(character2.maxHP).to.equal(100);
    expect(character2.currentHP).to.equal(100);
  })

  it('should have a property of items that defaults to an array', function () {
    expect(character).to.have.property('items');
    expect(character.items).to.eql([]);
  })

  it('should have a property of weapon that starts as null', function () {
    expect(character).to.have.property('weapon');
    expect(character.weapon).to.equal(null);
  })

  it('should have a method to attack', function () {

  })

});
