const { Room } = require('./room');
const { Item } = require('./item');
const { Food } = require('./food');

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
            newRoom.id = i + 1;
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
                this.rooms[roomID]._connectRooms(direction, roomToConnect);
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

            newItem.id = i + 1;

            let itemRoom = this.rooms[itemData.room];
            itemRoom.items.push(newItem);
       }

    }

    availableRoomsToString() {
        let roomsStr = "";
        for (const [roomId, room] of Object.entries(this.rooms)) {
            roomsStr += `<option value="${roomId}">${room.name}</option>`
        }
        return roomsStr;
    }
}

module.exports = {
  World,
};
