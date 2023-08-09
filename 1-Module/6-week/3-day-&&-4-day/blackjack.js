/*
We will make a game of blackjack. I wont be including money or bets in this version in case you are opposed to gambling.

The goal here will be the following:
	Setup:
	You'll need a function responsible for running the game.
	The game will need an [array] of cards:
		cards will need a value of A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
		cards will need a suit from S, D, H, C or Spade, Diamond, Heart, Club
		cards with an A, or Ace, can be either 1 or an 11.
			That value can change mid-round if the player or opponent draws a card that would have made the total go above 21.
				*Think of where this additional logic should be added
		Examples: SA = Ace of Spades; AD = Ace of Diamonds; KH || HK = King of Hearts
		*Plan how you will read the value on a card
		**Choose the data type / method of organizing suits and values
		***We won't actually be using the suit of the card but it should be present regardless.
	The array of the cards needs to be randomized.
		*You shouldn't get an A, then a 2, then a 3, then a 4 all in a row and from the same suits.
	
	Play:
	The opponent will get 2 cards from the deck.
		One of these cards will be console.logged to the player. The other one is unknown (facedown). 
	The Player will get 2 cards.
		*They should be informed of which cards they get
		**Bonus, have a readline input that repeats what cards they have in case they forget.
	The player then has 2 options:
		They may ask for another card
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
	*The cards used in the previous rounds are gone from the deck
	*If you choose to add betting to this project, the total $ for the player will need to be updated each round they win or lose
	*If you play enough rounds that the deck is getting low on cards
		Add all the cards that have been used back into the deck
		Randomize the order of the deck
		Choose the logic you'll use on when to shuffle so that you never run into a round where there aren't enough cards
		**Bonus, you can setup your deck to include 2 copies of every card
*/


const blackJack = () => {
	// your code here
}
