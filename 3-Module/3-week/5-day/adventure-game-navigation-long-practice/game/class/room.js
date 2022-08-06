class Room {

    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.exits = {};
        this.items = [];
    }

    itemsToString() {
        const itemsStr = this.items.map((item) => {
            const takeForm =
                `
                <form action="/items/${item.id}/take" method="post">
                    <button type="submit">Take</button>
                </form>
                `;

            return `
                <li>
                    <p>${item.name}</p>
                    <div class="actions">
                        ${takeForm}
                    </div>
                </li>
                `;
        }).join("\n");

        if (!itemsStr) return '<h3>No Items in Room</h3>';

        return `
            <h3>Available Items:</h3>
            <ul>${itemsStr}</ul>
            `;
    }

    exitsToString() {
        const exits = this._getExits().map(direction => {
            let exit;
            switch (direction) {
                case 'n':
                    exit = (`<a href="/rooms/${this.id}/north">North</a>`);
                    break;
                case 's':
                    exit = (`<a href="/rooms/${this.id}/south">South</a>`);
                    break;
                case 'e':
                    exit = (`<a href="/rooms/${this.id}/east">East</a>`);
                    break;
                case 'w':
                    exit = (`<a href="/rooms/${this.id}/west">West</a>`);
                    break;
                default:
                    break;
            }
            if (!exit) return '';
            return `<li>${exit}</li>`
        }).join('\n');
        return `<ul>${exits}</ul>`
    }

    _getExits() {
        return Object.keys(this.exits);
    }

    _connectRooms(direction, connectingRoom) {

        // Check if the direction and connecting room are valid
        if (['n', 's', 'e', 'w'].indexOf(direction) < 0 || !connectingRoom) {
            throw new Error("Error: Invalid room connection");
        }

        this.exits[direction] = connectingRoom;
    }

    _getRoomInDirection(direction) {
        return this.exits[direction];
    }

    _addItem(item) {
        this.items.push(item);
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
  Room,
};
