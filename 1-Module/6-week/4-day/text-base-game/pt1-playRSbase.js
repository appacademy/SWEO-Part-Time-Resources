/*
Patch notes 1.0:
-added lumbridge castle
-added kitchen
-added second floor dialogue with the duke
-added outside area of the castle
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inventory = {
    bronze_sword: 1,
    wooden_shield: 1,
    coins: 25,
    fishing_net: 1,
    axe: 1,
};

lumbridgeCastle();

function lumbridgeCastle() {
    const options = {
        1: "go up to the second floor",
        2: "enter kitchen",
        3: "go outside the castle",
        4: "log out",
        i: "check inventory",
    };
    const introText = "Welcome to Lumbridge Castle, what would you like to do?";

    console.log("----------------Lumbridge Castle 1st Floor----------------")

    //optionFormatter(intro text, objectOptions) --> string formatted
    rl.question(optionFormatter(introText, options), (answer) => {

        if (answer === "1") {
            console.log("As you make your way up the stairs you start to hear something...")
            console.log("Duke: where is my BANQUET, where is my CAKE?!, WHERE IS THAT DARN COOK!!!")
            console.log("You: maybe I should come back later...")
            rl.question("....press enter to go back....", ()=>{
                lumbridgeCastle()
            })
        }
        else if (answer === "2") {
            kitchen();
        }
        else if (answer === "3") {
            outsideCastle();
        }
        else if (answer === "4") {
            rl.close(); //close the interface
        }
        else if (answer === "i") {
            console.log(inventoryFormatter(inventory)); //logs our inventory
            lumbridgeCastle();
        }
        else {
            lumbridgeCastle(); //return back to the castle
        }
    });
}

function outsideCastle() {
    const options = {
        1: "go back inside the castle",
        2: "cross the bridge",
        3: "go to the general store",
        4: "enter the lumbridge swamp",
        5: "kill a goblin",
        i: "check inventory",
    };
    const introText = "You are currently outside, in the front of the castle, what would you like to do?";
    console.log("----------------outside the castle----------------")
    rl.question(optionFormatter(introText, options), (answer) => {
        if (answer === "1") {
            lumbridgeCastle();
        }
        else if (answer === "2") {
            console.log("the bridge is blocked by hundreds of cabbages, let's explore it later...")
        }
        else if (answer === "3") {
            console.log("seems like a crowd is blocking this path, let's explore it later...")
            outsideCastle();
        }
        else if (answer === "4") {
            console.log("The swamp is extremely foggy right now, it's safer to explore it later...")
            outsideCastle();
        }
        else if (answer === "5") {
            console.log("You killed a goblin and received...")
            outsideCastle();
        }
        else if (answer === "i") {
            console.log(inventoryFormatter(inventory)); //logs our inventory
            outsideCastle();
        }
        else {
            outsideCastle();
        }
    });
}

function kitchen() {
    const options = {
        1: "leave kitchen",
        2: "talk to Cook",
        3: "take a bowl x1",
        i: "check inventory",
    };
    const introText = "You are currently inside the castle's kitchen, what would you like to do?";
    console.log("----------------Inside the Castle's Kitchen----------------")
    rl.question(optionFormatter(introText, options), (answer) => {
        if (answer === "1") {
            lumbridgeCastle();
        }
        else if (answer === "2") {
            console.log("the cook seems busy...");
            kitchen();
        }
        else if (answer === "3") {
            console.log("you snatch the bowl into your inventory");
            addItemToInventoryH(inventory, "bowl", 1);
            kitchen();
        }
        else if (answer === "i") {
            console.log(inventoryFormatter(inventory)); //logs our inventory
            kitchen();
        }
        else {
            kitchen();
        }
    });
}




// -------------------------------HELPER FUNCTIONS--------------------------------
//helpers that do the logic to update data, format text, etc.

//adds or updates an item w/ quantity to the inventory of choice
function addItemToInventoryH(inventory, item, quantity) {
    //check if item exists in inventory
    //if item exists in inv, add the quantity to the value
    if (item in inventory) {
        inventory[item] += quantity;
    }
    //if item doesn't exist, set item to the quantity
    else {
        inventory[item] = quantity;
    }
    return inventory;
}

//formats the output of the inventory
function inventoryFormatter(inventoryObj) {
    let invString = "--------------Here is your current inventory--------------\n";
    for (item in inventoryObj) {
        const numberOfItems = inventoryObj[item]
        invString += `${item}: x${numberOfItems}\n`
    }
    return invString;
}

//formats the options in the dialogue
function optionFormatter(introText, optionObj) {
    let string = introText + "\n";
    for (key in optionObj) {
        string += `[${key}] ${optionObj[key]}\n`
    }
    string += "Your answer: "
    return string;
}

