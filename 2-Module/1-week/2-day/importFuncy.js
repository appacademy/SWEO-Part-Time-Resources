const importObj = require("../2-day/exportFuncy");
//Object destructuring way - const { hi, bye } = require("../2-day/exportFuncy");

const hi = importObj.hi;

const bye = importObj.bye;

hi("Alex");
bye()