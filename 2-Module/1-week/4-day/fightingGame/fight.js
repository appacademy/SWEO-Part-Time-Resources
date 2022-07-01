const Healer = require('./healer');
const Mage = require('./mage');
const NPC = require('./npc');

let merlin = new Mage('Merlin', 'Lightning Strike')
let yennefer = new Mage('Yennefer', 'Fire Blast');
let mara = new Healer('Mara', 'Heavenly Wrath');
let shera = new Healer('Shera', 'Blind Rage');


let sheraTurn = () => setTimeout(() => {
  shera.heal(mara);
  // console.log(mara);
  // console.log(merlin);
  // console.log(yennefer);
  // console.log(shera);
  console.log(Healer.compareMana(mara,shera));
}, 3000)

let yenneferTurn = () => setTimeout(() => {
  yennefer.attack(shera);
  
  sheraTurn();
}, 3000)

let merlinTurn = () =>  setTimeout(() => {
  merlin.attack(yennefer);
  
  yenneferTurn();
}, 3000)

let maraTurn = () => setTimeout(() => {
  mara.attack(merlin);
  
  merlinTurn();
}, 3000)

// NPC.getNumberOfNPCs();
// Mage.getNumberOfMages();
// Healer.getNumberOfHealers();
// maraTurn();
// sheraTurn();

mara.totals(); // can use a static method from the parent in an inherited class instance method and get the result this way
mara.getNumberOfNPCs() // cannot directly call the static method from the instance.






