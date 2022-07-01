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
// merlin.getNumberOfMages();
// Healer.getNumberOfHealers();
maraTurn();

// Healer.compareMana(mara, shera)





