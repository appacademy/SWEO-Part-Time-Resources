class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    takeItem(itemId) {
        let item = this.currentRoom._removeItem(itemId);

        if (item) {
            this.items.push(item);
            return item;
        }
    }

    dropItem(itemId) {
        const item = this._removeItem(itemId);
        this.currentRoom._addItem(item);
    }

    eatItem(itemId) {
        let item = this._getItem(itemId);

        if (!item) {
            throw new Error(`You do not have this item`);
        } else if (!item.isFood) {
            throw new Error(`You cannot eat ${item.name}`);
        } else {
            this._removeItem(item.id);
            return item;
        }

    }

    move(direction) {

        const nextRoom = this.currentRoom._getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;
            return nextRoom;
        } else {
            throw new Error("You cannot move in that direction");
        }
    }

    inventoryToString() {
        if (this.items.length === 0) {
            return (`<p>${this.name} is not carrying anything.</p>`);
        } else {
            const itemsStr = this.items.map(item => {
                let eatForm = '';
                if (item.isFood) {
                    eatForm = `
                        <form action="/items/${item.id}/eat" method="post">
                            <button type="submit">Eat</button>
                        </form>
                    `;
                }
                
                const dropForm = `
                    <form action="/items/${item.id}/drop" method="post">
                        <button type="submit">Drop</button>
                    </form>
                `;


                return `
                    <li>
                        <p>${item.name}</p>
                        <div class="actions">
                            ${eatForm}
                            ${dropForm}
                        </div>
                    </li>
                `;
            }).join("\n");

            return `
                <h3>${this.name} is carrying:</h3>
                <ul>${itemsStr}</ul>
            `;
        }
    }

    _removeItem(itemId) {
        for (let i = 0 ; i < this.items.length ; i++) {
            let item = this.items[i];
            if (item.id == itemId) {
                return this.items.splice(i, 1)[0];
            }
        }

        throw new Error("Item not found");
    }

    _getItem(id) {
        for (let i = 0 ; i < this.items.length ; i++) {
            let item = this.items[i];
            if (item.id == id) {
                return this.items[i];
            }
        }

        throw new Error("Item not found");
    }
}

module.exports = {
  Player,
};
