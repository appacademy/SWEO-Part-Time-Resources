// ----------------------------option formatter test--------------------------
const options = {
    1: "exit castle",
    2: "enter kitchen", 
    3: "enter dining room", 
    4: "go up to the second floor"
};
const introText = "Welcome to Lumbridge Castle, what would you like to do?";

function optionFormatter(introText, optionObj){
    let string = introText + "\n";
    for(key in optionObj){
        string += `[${key}] ${optionObj[key]}\n`
    }
    string += "Your answer: "
    return string;
}

console.log(optionFormatter(introText, options));

// ----------------------------inventory logger test--------------------------
const inventory = {
    egg: 1,
    bucket: 1,
    knife: 1,
}

function inventoryLogger(inventoryObj){
    let invString = "--------------Here is your current inventory--------------\n";
    for(item in inventoryObj){
        const numberOfItems = inventoryObj[item]
        invString += `${item}: x${numberOfItems}\n`
    }
    return invString;
}

console.log(inventoryLogger(inventory));

// ----------------------------add item to inventory test--------------------------
const inventory2 = {
    egg: 1,
    bucket: 1,
    knife: 1,
}
function addItemToInventory(inventory, item, quantity){
    //check if item exists in inventory
    //if item exists in inv, add the quantity to the value
    if(item in inventory){
        inventory[item] += quantity;
    }
    //if item doesn't exist, set item to the quantity
    else{
        inventory[item] = quantity;
    }
    return inventory;
}

console.log(addItemToInventory(inventory2, "bowl", 1))
console.log(addItemToInventory(inventory2, "bowl", 100))


// ----------------------------test loot randomizer--------------------------

function randomHelper(min, max) {
    let range = max - min;
    return min + Math.floor(Math.random() * (range + 1));
}

const goblinLoots = {
    bones: 1,
    chefs_hat: 1,
    coins: 5,
    goblin_mail: 1,
    water_rune: 6,
    beer: 1,
    goblin_book: 1,
    clue_scroll: 1,
    hammer: 1
}

function lootMonsterRandomizer(monsterLootTable){
    const items = Object.keys(monsterLootTable)
    
    //use random helper (0, items.length-1) to random select the loot
    const selectItemIndex = randomHelper(0, items.length-1);

    const selectItemKey = items[selectItemIndex] //represents the loot selected
    const selectItemQuantity = monsterLootTable[selectItemKey] //represents the value or quantity of the item

    //add the selected item and quantity to a new array and return that.
    const item = [selectItemKey, selectItemQuantity ];
    return item;
}


console.log(lootMonsterRandomizer(goblinLoots));
