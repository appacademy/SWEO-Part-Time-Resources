// const { expect } = require('chai');
// const { Player } = require("../class/player.js");
// const { Room } = require("../class/room.js");
// const { Item } = require("../class/item.js");
// const { Food } = require("../class/food.js");
// const { World } = require("../class/world.js");
// const { Character } = require("../class/character.js");
// const { Enemy } = require("../class/enemy.js");

// describe('Player', function () {

//   let character;
//   let room;
//   let item;

//   beforeEach(function () {
//     room = new Room("Test Room", "A test room");
//     item = new Item("rock", "just a simple rock");
//     character = new Character('Character', 'an ordinary character', room);
//     character.items.push(item);
//   });

//   it('should have name and description attributes', function () {
//     expect(character.name).to.equal("Character");
//     expect(character.description).to.equal('an ordinary character');
//   });

//   it('should not be an instance of Enemy or Player', function () {
//     expect(character instanceof Player).to.be.false;
//     expect(character instanceof Enemy).to.be.false;
//   });

//   it('should have strength and health attributes', function () {
//     expect(character.health).to.equal(100);
//     expect(character.strength).to.equal(10);
//   });

//   it('should lose health when damage is applied', function () {
//     expect(character.health).to.equal(100);
//     character.applyDamage(10);
//     expect(character.health).to.equal(90);
//   });

//   it('should drop all held items and have currentRoom set to null when dead', function () {
//     expect(character.currentRoom).to.equal(room);
//     expect(room.items.length).to.equal(0);
//     character.die();
//     expect(character.currentRoom).to.equal(null);
//     expect(room.items.length).to.equal(1);
//     expect(room.items[0]).to.equal(item);
//   });

//   it('should die when damage brings health to 0 or less', function () {
//     expect(character.currentRoom).to.equal(room);
//     expect(room.items.length).to.equal(0);

//     expect(character.health).to.equal(100);
//     character.applyDamage(100);
//     expect(character.health).to.equal(0);

//     expect(character.currentRoom).to.equal(null);
//     expect(room.items.length).to.equal(1);
//     expect(room.items[0]).to.equal(item);
//   });

// });

// describe('Enemy', function () {

//   let player;
//   let enemy;
//   let room;
//   let item;

//   beforeEach(function () {
//     room = new Room("Test Room", "A test room");
//     item = new Item("rock", "just a simple rock");
//     character = new Character('Character', 'an ordinary character', room);
//     character.items.push(item);
//   });

//   it('should have name and description attributes', function () {
//     expect(character.name).to.equal("Character");
//     expect(character.description).to.equal('an ordinary character');
//   });

//   it('should not be an instance of Enemy or Player', function () {
//     expect(character instanceof Player).to.be.false;
//     expect(character instanceof Enemy).to.be.false;
//   });

//   it('should have strength and health attributes', function () {
//     expect(character.health).to.equal(100);
//     expect(character.strength).to.equal(10);
//   });

//   it('should lose health when damage is applied', function () {
//     expect(character.health).to.equal(100);
//     character.applyDamage(10);
//     expect(character.health).to.equal(90);
//   });

//   it('should drop all held items and have currentRoom set to null when dead', function () {
//     expect(character.currentRoom).to.equal(room);
//     expect(room.items.length).to.equal(0);
//     character.die();
//     expect(character.currentRoom).to.equal(null);
//     expect(room.items.length).to.equal(1);
//     expect(room.items[0]).to.equal(item);
//   });

//   it('should die when damage brings health to 0 or less', function () {
//     expect(character.currentRoom).to.equal(room);
//     expect(room.items.length).to.equal(0);

//     expect(character.health).to.equal(100);
//     character.applyDamage(100);
//     expect(character.health).to.equal(0);

//     expect(character.currentRoom).to.equal(null);
//     expect(room.items.length).to.equal(1);
//     expect(room.items[0]).to.equal(item);
//   });

// });



// describe('Enemy', function () {

//   let enemy;
//   let room;
//   let item;
//   let sandwich;
//   let player;

//   beforeEach(function () {
//     room = new Room("Test Room", "A test room");
//     item = new Item("rock", "just a simple rock");
//     sandwich = new Food("sandwich", "a delicious looking sandwich");
//     enemy = new Enemy('enemy', 'an ordinary character', room);
//     player = new Player("player", room);

//     World.enemies.push(enemy);
//     World.setPlayer(player);

//     enemy.items.push(item);
//     room.items.push(sandwich);
//   });


//   it('should inherit from Character class', function () {
//     expect(enemy instanceof Character).to.be.true;
//     expect(enemy instanceof Enemy).to.be.true;
//     expect(enemy instanceof Player).to.be.false;
//   });


//   it('should have a cooldown attribute that defaults to 3000ms', function () {
//     expect(enemy.cooldown).to.equal(3000);
//   });


//   it('should be able to move to a new room', function () {

//     let westRoom = new Room("West Room", "A room to the west of testRoom");
//     room.connectRooms('w', westRoom);

//     enemy.cooldown = 0;

//     expect(enemy.currentRoom).to.equal(room);

//     enemy.randomMove();

//     expect(enemy.currentRoom).to.equal(westRoom);
//     expect(enemy.cooldown).above(0);
//   });


//   it('should target the player when hit', function () {

//     expect(enemy.attackTarget).to.equal(null);

//     player.hit('enemy');

//     expect(enemy.attackTarget).to.equal(player);

//   });


//   it('should attack the player when targetting player', function () {

//     player.hit('enemy');

//     enemy.cooldown = 0;

//     expect(player.health).to.equal(100);
//     enemy.attack();
//     expect(player.health).to.equal(90);
//     expect(enemy.cooldown).above(0);

//   });

// });


