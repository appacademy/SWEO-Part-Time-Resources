// Use context binding (bind, call, and apply) a few times during the project 
// where best applied (having a method as a callback function or saved to a 
// variable and called later)

// A Candy Crush/Bejeweled-like game that can be played through the terminal. Make 
// the rules as simple as possible with some unique blocks (ex: if you match 
//   a special block with other normal blocks, then it deletes a whole row).

// Create class, instance and static methods and variables
// Inheritance
// Overriding parent class methods (can be static or instance)

const BejeweledUI = require("./bejeweledUI")


// LABELS AND GEM SET OPTIONS
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
const fruit = "🍇 🥝 🍓 🍊 🍋 🥥 🍌 🍉 🍈 🍍 🥭 🍎 🍐 🍑 🍒";
const veggies = "🥑 🍆 🥔 🥕 🌽 🌶️ 🥒 🥬 🥦 🧄 🧅 🍄 🍠";
const food = "🍔 🍟 🍕 🌭 🥪 🌮 🌯 🥙 🍳 🥘 🍲 🥣 🥗 🥯 🥞 🧇 🍝 🥠 🥡";
const eastern = "🍱 🍘 🍙 🍚 🍛 🍜 🍢 🍣 🍤 🍥 🥮 🍡 🥟";
const desserts = "🍦 🍧 🍨 🍩 🍪 🎂 🍰 🧁 🥧 🍫 🍬 🍭 🍮 🍯 🍿 🥨 🥜";
const drinks = "🥛 ☕ 🍵 🍶 🍾 🍷 🍸 🍹 🍺 🍻 🥂 🥃 🥤 🧃 🧉";
const other = "🌰 🍞 🥐 🥖 🧀 🍖 🍗 🥩 🥓 🥚 🦪 ";
 const zodiac = "🐒 🐕 🐅 🐎 🐂 🐖 🐑 🐀 🐇 🐓 🐍 🐉";
const plants = "💐 🌸 🌹 🌺 🌻 🌼 🌷 🌱 🌲 🌳 🌴 🌵 🌾 🌿 ☘️ 🍀 🍁 🍂 🍄";

// + pie, lollipop, ice_cream, chocolate, doughnut

const bejeweled = new BejeweledUI(
  rows = numbers,
  columns = alphabet.split("").slice(0,10),
  gems = fruit.split(" ").slice(0,6),
)
bejeweled.startGame()
