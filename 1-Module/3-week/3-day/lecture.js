// OBJECTS! >> POJO

let obj = {};

obj.name = "Wayne";
let myProp = "isChonky"
obj[myProp] = true;
obj["hasTail"] = false;
obj.furColor = "black";


console.table(obj)
let wax = {};
wax.name = "Wax";
wax["isChonky"] = false;
let banana = "hasTail";
wax[banana] = false;
let fur = "Torty"
wax["furColor"] = fur;
console.table(wax)