/*
Patch notes 3.0:
-added very static general store buy option (need to refactor and make it more dynamic later w/ objects)
-quest completion for cooks assistant
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
    axe: 1
};

//conditional here: cook dialogue and interactions will be different depending on if the quest is started or not
let cookQuestStarted = false;
let cookQuestCompleted = false;

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
            //if quest has been completed, new dialogue
            if (cookQuestCompleted === true){
                console.log("Duke: this cake is... ABSOLUTELY TERRIBLE, IT SMELLS LIKE A GOBLIN!");
                console.log("You: maybe I should come back later...");
                rl.question("....press enter to continue....", ()=>{
                    lumbridgeCastle();
                })
            }
            else{
                console.log("As you make your way up the stairs you start to hear something...")
                console.log("Duke: where is my BANQUET, where is my CAKE?!, WHERE IS THAT DARN COOK!!!")
                console.log("You: maybe I should come back later...")
                rl.question("....press enter to go back....", ()=>{
                    lumbridgeCastle()
                })
            }
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
            outsideCastle();
        }
        else if (answer === "3") {
            generalStore();
        }
        else if (answer === "4") {
            console.log("The swamp is extremely foggy right now, it's safer to explore it later...")
            outsideCastle();
        }
        else if (answer === "5") {
            lootGoblinSimulator();
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

function generalStore(){
    const options = {
        1: "flour - 5gp",
        2: "eggs - 5gp",
        3: "blue partyhat - 1gp",
        i: "check your inventory",
        exit: "exit the general store",
    };
    const introText = "Welcome to the general store, what would you like to buy?";

    console.log("----------------The General Store----------------")

    rl.question(optionFormatter(introText, options), (answer) => {

        if (answer === "1" && inventory["coins"] >= 5) {
            console.log("you buy the flour from the store");
            inventory.coins -= 5;
            addItemToInventoryH(inventory, "flour", 1);
            rl.question("....press enter to continue....", ()=>{
                generalStore();
            })
        }
        else if (answer === "2" && inventory["coins"] >= 5) {
            inventory.coins -= 5;
            console.log("you buy the eggs from the store");
            addItemToInventoryH(inventory, "eggs", 1);
            rl.question("....press enter to continue....", ()=>{
                generalStore();
            })
        }
        else if (answer === "3" && inventory["coins"] >= 1) {
            inventory.coins -= 1;
            console.log("--------item bought--------");
            console.log("you buy the blue partyhat from the store");
            addItemToInventoryH(inventory, "blue partyhat", 1);
            rl.question("....press enter to continue....", ()=>{
                generalStore();
            })
        }
        else if (answer === "i") {
            console.log(inventoryFormatter(inventory)); //logs our inventory
            rl.question("....press enter to continue....", ()=>{
                generalStore();
            })
        }
        else if (answer === "exit") {
            console.log("you leave the store!")
            rl.question("....press enter to continue....", ()=>{
                outsideCastle();
            })
        }
        else {
            console.log("sorry you do not have enough coins to buy this...")
            rl.question("....press enter to continue....", ()=>{
                generalStore();
            })
            
        }
    });
}

function lootGoblinSimulator(){
    const goblinLoots = {
        coins: 5,
        goblin_mail: 1,
        milk: 1,
    }
    const randomLootObj = lootMonsterRandomizer(goblinLoots); //{coins: 5}
    const lootItem = randomLootObj[0]; //coins
    const lootQuantity = randomLootObj[1]; //5
    console.log("------------vs. Goblin-----------")
    console.log(`You killed a goblin and received... ${lootItem} x${lootQuantity}`)

    const introText = `Would you like to pick up ${lootItem} x${lootQuantity}?`;
    const options = {
        1: "yes",
        2: "no",
    };
    
    rl.question(optionFormatter(introText, options), answer =>{
        if(answer === "1"){
            addItemToInventoryH(inventory, lootItem, lootQuantity);
            console.log(`You've added ${lootItem} x${lootQuantity} to your inventory`)
            rl.question("....press enter to continue....", ()=>{
                outsideCastle();
            })
            
        }
        else{
            outsideCastle();
        }
    })
    
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
            cookNPC();
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



function cookNPC() {
    //if cookQuestStarted is true, check inventory for items and complete quest
    if (cookQuestCompleted === true){
        console.log("Cook: Thank you for your help!")
        rl.question("....press enter to continue....", ()=>{
            kitchen();
        })
    }
    else if (cookQuestStarted === true) {
        if ("eggs" in inventory && "milk" in inventory && "flour" in inventory) {
            inventory.eggs--;
            inventory.milk--;
            inventory.flour--;

            //remove key value pairs that have value of 0

            console.log("Congratulations! you have completed Cook's Assitant! You are awarded: 1 quest point & 300 cooking XP")
            cookQuestCompleted = true;
            rl.question("....press enter to continue....", ()=>{
                kitchen();
            })
        }
        else {
            console.log("Cook: Please hurry and find me milk, eggs, and flour!")
            rl.question("....press enter to continue....", ()=>{
                kitchen();
            })
        }
    }
    else {
        const options = {
            1: "leave kitchen",
            2: "Accept: You like cake, so maybe the cook will give you some if you help him, so you accept his quest",
            3: "Deny: Make your own cake, you're a chef",
        };
        const introText = "Cook: I've forgotten to buy the ingredients. I'll never get them in time now. He'll sack me! What will I do? I have four children and a goat to look after. Would you help me? Please?";

        console.log("----------------Talking to the Cook----------------")
        rl.question("Cook: Oh, dear, oh dear, oh dear. I'm in a terrible mess! It's the Duke's birthday today, and I should be making him a lovely big birthday cake. \n ....press enter to continue....", () => {
            rl.question(optionFormatter(introText, options), (answer) => {
                if (answer === "1") {
                    lumbridgeCastle();
                }
                else if (answer === "2") {
                    console.log("-------------------dialogue-------------------")
                    console.log("You: I'm always happy to help a cook in distress...");
                    console.log("Cook: Oh thank you, thank you. I need milk, an egg and flour. I'd be very grateful if you can get them for me. You can find them outside of the castle.")
                    console.log("...............you have started `cook's assistant`.................")
                    cookQuestStarted = true; //set the quest start to true
                    rl.question("....press enter to continue....", ()=>{
                        kitchen();
                    })
                }
                else if (answer === "3") {
                    console.log("-------------------dialogue-------------------")
                    console.log("You: Make your own cake, you're a chef");
                    console.log("Cook: Fine. I always knew you Adventurer types were callous beasts. Go on your merry way!");
                    rl.question("....press enter to continue....", ()=>{
                        kitchen();
                    })
                    
                }
                else {
                    kitchen();
                }
            });
        })

    }


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


function randomHelper(min, max) {
    let range = max - min;
    return min + Math.floor(Math.random() * (range + 1));
}

//this function takes in an object and random selects something from the object
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
