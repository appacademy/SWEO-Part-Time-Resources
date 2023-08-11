/*
We will make a game of blackjack. I wont be including money or bets in this version in case you are opposed to gambling.

The goal here will be the following:
	Setup:
	You'll need a function responsible for running the game.
	The game will need an [array] of cards:
		cards will need a value of A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
		cards will need a suit from S, D, H, C or Spade, Diamond, Heart, Club
		cards of a J, Q, or K have a value of 10
		cards with an A, or Ace, can be either 1 or an 11.
			That value can change mid-round if the player or opponent draws a card that would have made the total go above 21.
				*Think of where this additional logic should be added
		Examples: SA = Ace of Spades; AD = Ace of Diamonds; KH || HK = King of Hearts
		*Plan how you will read the value on a card
		**Choose the data type / method of organizing suits and values
		***We won't actually be using the suit of the card but it should be present regardless.
	The array of the cards needs to be randomized.
		*You shouldn't get an A, then a 2, then a 3, then a 4 all in a row and from the same suits.
		**Bonus: "Shuffle the deck" by splitting the cards array in half.
			Create a new deck and fill it up by
			randomly adding items to it from one half or the other half 
			until both half decks are empty.
	
	Play:
	The opponent will get 2 cards from the deck.
		One of these cards will be console.logged to the player. The other one is unknown (facedown). 
	The Player will get 2 cards.
		*They should be informed of which cards they get
		**Bonus, have a readline input that repeats what cards they have in case they forget.
	The player then has 2 options:
		They may ask for another card
			if you get another card and your val goes above 21, you lose
		They may stop asking for cards and move on
		*Bonus, asking for another card here could be done as recursion
	When the player wants to move on, the opponent reveals their hidden card
		If the opponent has a number greater then the player
			The opponent wins the round
		If the opponent has less then the player
			They draw cards until they have a total of 17 or greater
			*On each card draw:
				They beat the player and win the round.
				They go above 21 and lose. Player wins.
				They reach 17+ and are tied with player. Draw, no one wins.

	Another round begins
	*The cards used in the previous rounds are gone from the deck until shuffled back in.
	*To shuffle:
		Add all the cards that have been used back into the deck
		Randomize the order of the deck
		Choose the logic you'll use on when to shuffle so that you never run into a round where there aren't enough cards
		**Bonus, you can setup your deck to include 2 copies of every card
	*If you choose to add betting to this project, the total $ for the player will need to be updated each round they win or lose

*/

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const deck = [
	'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS',
	'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD',
	'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH',
	'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC'
]

const blackJack = (deck) => {
	deck = shuffle(deck)
	console.log("heres the deck, ", deck)

	// Start dealing the cards
	let playerHand = [];
	let opponentHand = [];
	for (let i = 0; i < 4; i++) {
		if (i % 2 === 0) playerHand.push(deck.pop())
		else opponentHand.push(deck.pop())
	}

	console.log(`Your cards are ${playerHand[0]} and ${playerHand[1]}`)
	console.log(`Your opponent has 1 card face down, and a ${opponentHand[0]}`)

	function playerDrawingCards() {
		rl.question("Would you like to draw another card? Yes or No ", playerDrawCardAnswer);
	}

	function playerDrawCardAnswer(answer) {
		if (answer === "Yes") {
			playerHand.push(deck.pop())
			console.log(`Your cards are ${playerHand.join(" and ")}`)
			console.log(`Your hand value is ${calcHandvalue(playerHand)}`)
			if (calcHandvalue(playerHand) > 21) {
				console.log("You Lose")
				rl.close()
				return
			}
			rl.question("Would you like to draw another card? Yes or No ", playerDrawCardAnswer);
		}
		else {
			console.log(`The opponent cards are ${opponentHand.join(" and ")}`)
			console.log(`The opponent hand value is ${calcHandvalue(opponentHand)}`)
			if (calcHandvalue(opponentHand) > calcHandvalue(playerHand)) {
				console.log("You Lose")
				rl.close()
				return
			}
			if (calcHandvalue(opponentHand) === calcHandvalue(playerHand)) {
				console.log("It's a draw")
				rl.close()
				return
			}
			if (calcHandvalue(opponentHand) < 17) {
				while (calcHandvalue(opponentHand) < 17) {
					opponentHand.push(deck.pop())
				}
				if (calcHandvalue(opponentHand) > calcHandvalue(playerHand)) {
					console.log("You Lose")
					rl.close()
					return
				}
				else if (calcHandvalue(opponentHand) === calcHandvalue(playerHand)) {
					console.log("It's a draw")
					rl.close()
					return
				}
				else {
					console.log("You Win!")
					rl.close()
					return
				}
			}
			console.log("You Win!")
			rl.close()
			return
		}
	}

	function calcHandvalue(hand) {
		let sum = 0
		let valObj = {
			'A': 11,
			'2': 2,
			'3': 3,
			'4': 4,
			'5': 5,
			'6': 6,
			'7': 7,
			'8': 8,
			'9': 9,
			'1': 10,
			'J': 10,
			'Q': 10,
			'K': 10
		}
		let aces = 0
		for (let card of hand) {
			let val = valObj[card[0]]
			if (card[0] === "A") {
				aces++
				// console.log("found an ace ", aces)
			}
			sum += val
		}

		// console.log("sum big?", sum > 21)
		// console.log("aces?", aces)
		// console.log("whileloop going?", sum > 21 && aces > 0)

		while (sum > 21 && aces > 0) {
			sum -= 10
			aces--
		}

		return sum
	}


	playerDrawingCards()



	// function funcName (args) {
	// 	rl.question("", cb);
	// }

}




const shuffle = (deck, shuffleTimes = 10) => {
	if (shuffleTimes === 0) return deck

	let halfwayIndex = Math.floor(deck.length / 2)
	let [half1, half2] = [deck.slice(0, halfwayIndex), deck.slice(halfwayIndex)]  // destructuring

	let shuffled = [];
	while (half1.length || half2.length) {
		let binary = Math.floor(Math.random() * 2) // 1 or 0

		if (binary) { // random number was a 1
			if (half1.length) shuffled.push(half1.pop()) // as long as there are cards left
			else shuffled.push(half2.pop())
		} else { // random number was a 0
			if (half2.length) shuffled.push(half2.pop()) // as long as there are cards left
			else shuffled.push(half1.pop())
		}
	}

	return shuffle(shuffled, shuffleTimes - 1)
}

blackJack(deck)
