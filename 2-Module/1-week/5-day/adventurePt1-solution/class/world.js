const { Room } = require('./room');
const { Item } = require('./item');
const { Food } = require('./food');
const worldData = require('../data/world-data')


class World {
    constructor() {
        this.rooms = {};
    }

    loadWorld(worldData) {

        const roomList = worldData.rooms;
        const itemList = worldData.items;

        // Instantiate new room objects
        // Get name, id and description from room data
        for (let i = 0 ; i < roomList.length ; i++) {

            let roomData = roomList[i];
            let newRoom = new Room(roomData.name, roomData.description);

            this.rooms[roomData.id] = newRoom;
        }

        // Connect rooms by ID
        // Note that all rooms must be created before they can be connected
        for (let i = 0 ; i < roomList.length ; i++) {

            let roomID = roomList[i].id;
            let roomConnections = roomList[i].exits;

            for (const direction in roomConnections) {
                let connectedRoomID = roomConnections[direction];
                let roomToConnect = this.rooms[connectedRoomID];
                this.rooms[roomID].connectRooms(direction, roomToConnect);
            }

        }

        // Instantiate items
        for (let i = 0 ; i < itemList.length ; i++) {

            let itemData = itemList[i];
            let newItem;

            if (itemData.isFood) {
                newItem = new Food(itemData.name, itemData.description);
            } else {
                newItem = new Item(itemData.name, itemData.description);
            }

            let itemRoom = this.rooms[itemData.room];
            itemRoom.items.push(newItem);
       }

    }
}

let world = new World();
world.loadWorld(worldData);
// console.log('the room', world.rooms[2])
// console.log('after the room')
console.log(worldData.items)
// console.log(worldData);


module.exports = {
  World,
};
