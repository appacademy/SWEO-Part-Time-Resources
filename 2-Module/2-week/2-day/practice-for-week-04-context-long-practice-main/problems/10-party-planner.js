class PartyPlanner{
	constructor(){
		this.guestList = []
	}
	addToGuestList(name){
		this.guestList.push(name)
	}
	throwParty(){
		if(this.guestList.length) return this.guestList.map((name) => `Welcome to the party ${name}`).join(' and ')
		else return "Gotta add people to the guest list"
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}