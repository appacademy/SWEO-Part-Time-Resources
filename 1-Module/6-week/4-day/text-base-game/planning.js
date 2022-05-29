
/***** MAIN

inventory = {
    egg: 1,
    bucket: 1,
    knife: 1,
}


------------castleFirstFloor()----------------
t: welcome to lumbridge castle, what would you like to do?
options: exit castle (run courtYard()), enter kitchen, go up to second floor 

------------kitchen()--------------
t: location: kitchen
options: talk to the Cook(), take a bowl, castleFirstFloor()

----Cook()----
questStarted = false;

//if questStarted is true:
    //if ingredients are in inventory:
        //t: Thank you so much!!
        //t: Congratulations! you have completed Cook's Assitant! You are awarded: 1 quest point & 300 cooking XP

    //if not in invetory:
        //t: please hurry!

//if questStarted is false:
t: Oh, dear, oh dear, oh dear. I'm in a terrible mess! It's the Duke's birthday today, and I should be making him a lovely big birthday cake.
t: I've forgotten to buy the ingredients. I'll never get them in time now. He'll sack me! What will I do? I have four children and a goat to look after. Would you help me? Please?
options:
    - deny: I can't right now, maybe later
        - t: Fine. I always knew you Adventurer types were callous beasts. Go on your merry way!
    - accept: I'm always happy to help a cook in distress
        - t: Oh thank you, thank you. I need milk, an egg and flour. I'd be very grateful if you can get them for me. You can find them near the castle.

------------outsideCastle()-----------------
options: cross bridge, go to general store, lumbridge swamp 

------------castleSecondFloor()-----------------
t: As you walk up the second floor you hear the duke of the castle screaming "WHERE IS MY CAKE??". You decide that exploring the castle can wait till later...

------------acrossBridge()-----------------
options: kill goblin(gives 10 gold), enter alkharid gate, go to the cow pen, go to the chicken pen, outside of castle

------------generalStore()-----------------
options: buy flour, buy map, buy hammer, buy party hat, buy bucket

------------cowPen()-----------------
AskedGrillie = false;
options: milk cow, kill cow, talk to grillie goat,

------------chickenPen()-----------------
options: milk cow, kill cow, talk to grillie goat,
*/

// --------------------------------------------------------------------
/***** Extra

selectItemInInv()

inventory = {
    dagger:{
        drop: removeDaggerFromInv()
        wield: equipDagger()
    }
}

castleFirstFloor()
t: welcome to lumbridge castle, what would you like to do?
options: exit castle, enter kitchen, enter dining room, enter 

-----------------------------
castleSecondFloor()

-----------------------------
castleThirdFloor()


*/