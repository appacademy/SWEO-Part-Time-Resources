const { executionAsyncId } = require('async_hooks');
const { Console } = require('console');
const { truncate } = require('fs');
const readline = require('readline');
const { callbackify } = require('util');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const randomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

//obj for the set cards in deck
let deck = {one: 4, two: 4, three: 4, four: 4, five: 4, six: 4, seven: 4,
    eight: 4, nine: 4, ten: 4, jack: 4, queen: 4, king: 4, ace: 4
};
let deckKeys = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"];

//players in the game including user
let player = {card1: "", card2: "", chips: 25};
let opp1 = {card1: "", card2: "", chips: 25};
let opp2 = {card1: "", card2: "", chips: 25};
let opp3 = {card1: "", card2: "", chips: 25};
let opp4 = {card1: "", card2: "", chips: 25};
let gang = [player, opp1, opp2, opp3, opp4];

//obj for table
let table = {card1: "", card2: "", card3: "", card4: "", card5: "", pot: 0}
let tcards = ["card1", "card2", "card3", "card4", "card5"];

console.log("---------WELCOME TO THE HONOR TABLE!------------")

const start = () => {
    for(let i = 0; i < deckKeys.length; i++) {
        let key = deckKeys[i];
        deck[key] = 4;
    }
    console.log("Ante is 1 chip")
    rl.question("Pay ante to play? [Y]/[N]: ", (ans) => {
        ans = ans.toLowerCase();
        if(ans === "y") {
            player.chips--;
            opp1.chips--;
            opp2.chips--;
            opp3.chips--;
            opp4.chips--;
            table.pot += 5;
            deal();
        }
        else if(ans === "n") {
            console.log("That's a shame, Have a good day!");
            rl.close();
        }
        else {
            console.log("-------------------------------");
            console.log("Please type either [Y] or [N]");
            start();
        }
    });
}
const randomCard = () => {
    let n = randomNum(1, 15);
    if(n === 1) return "one";
    if(n === 2) return "two";
    if(n === 3) return "three";
    if(n === 4) return "four";
    if(n === 5) return "five";
    if(n === 6) return "six";
    if(n === 7) return "seven";
    if(n === 8) return "eight";
    if(n === 9) return "nine";
    if(n === 10) return "ten";
    if(n === 11) return "jack";
    if(n === 12) return "queen";
    if(n === 13) return "king";
    if(n === 14) return "ace";
}

const deal = () => {
    for(let i = 0; i < gang.length; i += 0){
        let id = gang[i];
        let c1 = randomCard();
        let c2 = randomCard();

            if(deck[c1] > 0) {
                if(deck[c2] > 0) {
                    id.card1 = c1;
                    id.card2 = c2;
                    deck[c1]--;
                    deck[c2]--;
                    i++
                }
            }
    }
    for(let i = 0; i < tcards.length; i += 0) {
        let card = tcards[i];
        let t = randomCard();

        if(deck[t] > 0) {
            table[card] = t;
            deck[t]--;
            i++;
        }
    }
    turn0();
}

let spot = 0;
const turn0 = () => {
    console.log("---------------------------------");
    console.log("Pot: " + table.pot);
    console.log("---------------------------------");
    console.log("Your cards: [" + player.card1 + "] [" + player.card2 + "] chips: " + player.chips);

    rl.question("Would you like to [B]et, [C]all, [F]old: ", (ans) => {
        ans = ans.toLowerCase();

        if(ans === "b") {
            spot++;
            rl.question("How much would you like to bet?: ", bet0);
        }
        else if(ans === "c") {
            spot++;
            oppBet();
        }
        else if(ans === "f") {
            spot++;
            console.log("Bet-er luck next time!");
            after();
        }
        else {
            console.log("-------------------------------");
            console.log("Please choose a valid option");
            turn0();
        }
    });
}

const turn1 = () => {
    console.log("---------------------------------");
    console.log("Table: [" + table.card1 + "] [" + table.card2 + "] [" + table.card3 + "] pot:" + table.pot);
    console.log("---------------------------------");
    console.log("Your cards: [" + player.card1 + "] [" + player.card2 + "] chips: " + player.chips);

    rl.question("Would you like to [B]et,[C]all, [F]old: ", (ans) => {
        ans = ans.toLowerCase();

        if(ans === "b") {
            spot++
            rl.question("How much would you like to bet?: ", bet1);
        }
        else if(ans === "c") {
            spot++
            oppBet();
        }
        else if(ans === "f") {
            spot++;
            console.log("Bet-er luck next time!");
            after();
        }
        else {
            console.log("-------------------------------");
            console.log("Please choose a valid option");
            turn1();
        }
    });
}

const turn2 = () => {
    console.log("---------------------------------");
    console.log("Table: [" + table.card1 + "] [" + table.card2 + "] [" + table.card3 + "] [" + table.card4 + "] pot:" + table.pot);
    console.log("---------------------------------");
    console.log("Your cards: [" + player.card1 + "] [" + player.card2 + "] chips: " + player.chips);

    rl.question("Would you like to [B]et, [C]all, [F]old: ", (ans) => {
        ans = ans.toLowerCase();

        if(ans === "b") {
            spot++;
            rl.question("How much would you like to bet?: ", bet2);
        }
        else if(ans === "c") {
            spot++;
            oppBet();
        }
        else if(ans === "f") {
            spot++;
            console.log("Bet-er luck next time!");
            after();
        }
        else {
            console.log("-------------------------------");
            console.log("Please choose a valid option");
            turn2();
        }
    });
}

const turn3 = () => {
    console.log("---------------------------------");
    console.log("Table: [" + table.card1 + "] [" + table.card2 + "] [" + table.card3 + "] [" + table.card4 + "] [" + table.card5 + "] pot:" + table.pot);
    console.log("---------------------------------");
    console.log("Your cards: [" + player.card1 + "] [" + player.card2 + "] chips: " + player.chips);

    rl.question("Would you like to [B]et, [C]all, [F]old: ", (ans) => {
        ans = ans.toLowerCase();

        if(ans === "b") {
            spot++;
            rl.question("How much would you like to bet?: ", bet3);
        }
        else if(ans === "c") {
            spot++;
            oppBet();
        }
        else if(ans === "f") {
            spot++;
            console.log("Bet-er luck next time!");
            after();
        }
        else {
            console.log("-------------------------------");
            console.log("Please choose a valid option");
            turn3();
        }
    });
}

const end = () => {
    console.log("-------------------------------");
    console.log("-------------------------------");
    console.log("-------------------------------");
    console.log("Table: [" + table.card1 + "] [" + table.card2 + "] [" + table.card3 + "] [" + table.card4 + "] [" + table.card5 + "] pot:" + table.pot);
    console.log("-------------------------------");
    console.log("[P]layer's hand: [" + player.card1 + "] [" + player.card2 + "]");
    console.log("-------------------------------");
    console.log("Opp[1]'s hand: [" + opp1.card1 + "] [" + opp1.card2 + "]");
    console.log("-------------------------------");
    console.log("Opp[2]'s hand: [" + opp2.card1 + "] [" + opp2.card2 + "]");
    console.log("-------------------------------");
    console.log("Opp[3]'s hand: [" + opp3.card1 + "] [" + opp3.card2 + "]");
    console.log("-------------------------------");
    console.log("Opp[4]'s hand: [" + opp4.card1 + "] [" + opp4.card2 + "]");

    rl.question("Who has the best hand?: ", (ans) => {
        ans = ans.toLowerCase();
        if(ans === "p"){
            console.log("-------------------------------");
            console.log("Congrants!!! You Win!!!");
            console.log("Winnings: " + table.pot);
            player.chips += table.pot;
            table.pot = 0;
            after();
        }
        else if(ans === "1") {
            console.log("-------------------------------");
            console.log("Bet-er luck next time!");
            opp1.chips += table.pot;
            table.pot = 0;
            after();
        }
        else if(ans === "2") {
            console.log("-------------------------------");
            console.log("Bet-er luck next time!");
            opp2.chips += table.pot;
            table.pot = 0;
            after();
        }
        else if(ans === "3") {
            console.log("-------------------------------");
            console.log("Bet-er luck next time!");
            opp3.chips += table.pot;
            table.pot = 0;
            after();
        }
        else if(ans === "4") {
            console.log("-------------------------------");
            console.log("Bet-er luck next time!");
            opp4.chips += table.pot;
            table.pot = 0;
            after();
        }
        else {
            console.log("-------------------------------");
            console.log("Please choose a player");
            end();
        }
    });
}

const after = () => {
    spot = 0;
    console.log("-------------------------------");
    console.log("Hope you enjoyed!")
    rl.question("Would you like to play again? [Y]/[N]: ", (ans) => {
        ans = ans.toLowerCase();

        if(ans === "y") start();

        else if(ans === "n") {
            console.log("That's a shame, Have a good day!");
            rl.close();
        }
        else {
            console.log("-------------------------------");
            console.log("Please type either [Y] or [N]");
            after();
        }
    });
}

const oppBet = () => {
    for(let i = 1; i < gang.length; i++) {
        let id = gang[i];
        let odds = randomNum(1, 5);
        if(id.card1 === id.card2) {
            if(odds < 3){
                let amount = randomNum(6, 11);
                 return call(amount);
            }
        }
        else if(id.card1 !== id.card2) {
            if(odds === 1) {
                let amount = randomNum(1, 6);
                return call(amount);
            }
        }
    }
    if(spot === 1) turn1();
    else if(spot === 2) turn2();
    else if(spot === 3) turn3();
    else if(spot === 4) end();
    else {
        after();
    }
}

const call = (amount) => {
    console.log("-------------------------------");
    rl.question("Bet was raised by " + amount + " would you like to [C]all or [F]old?: ", (ans) => {
        ans = ans.toLowerCase();

        if(ans === "c") {
            upPot(amount);
        }
        else if(ans === "f") {
            console.log("Bet-er luck next time!");
            after();
        }
        else {
            console.log("-------------------------------");
            console.log("Please choose a valid option");
            call();
        }
        if(spot === 1) turn1();
        else if(spot === 2) turn2();
        else if(spot === 3) turn3();
        else if(spot === 4) end();
        else {
            after();
        }
    })
}

const bet0 = num => {
    if(num <= player.chips){
        upPot(num);
        turn1();
    }
    else {
        console.log("-------------------------------");
        console.log("You don't have that much")
        turn0();
    }
}

const bet1 = num => {
    if(num <= player.chips){
        upPot(num);
        turn2();
    }
    else {
        console.log("-------------------------------");
        console.log("You don't have that much")
        turn1();
    }
}

const bet2 = num => {
    if(num <= player.chips){
        upPot(num);
        turn3();
    }
    else {
        console.log("-------------------------------");
        console.log("You don't have that much")
        turn2();
    }
}

const bet3 = num => {
    if(num <= player.chips){
        upPot(num);
        end();
    }
    else {
        console.log("-------------------------------");
        console.log("You don't have that much")
        turn3();
    }
}

const upPot = num => {
    table.pot += num * 5;

    for(let i = 0; i < gang.length; i++) {
        let id = gang[i];
        id.chips -= num;
    }

}
/*
const selectWinner = () => {
    let winner = gang[0];
    for(let i = 0; i < gang.langth; i++) {
        let id = gang[i];

    }
}
*/

start();
