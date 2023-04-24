// initially experiance of player is 0
let xp = 0;
// health is max at start
let health = 100;
// starting gold
let gold = 50;
// starting weapon
let currentWeapon = 0;
// at the time of fight
let fighting;
// monsters health
let monsterHealth;
// the inventory can store multiple things so its an array
// let inventory = ["stick","dagger","sword"];
let inventory = ["stick"];

// refrencing the html stuff
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const townSquareImage = document.querySelector("#townSquareImage");
const storeImage = document.querySelector("#storeImage");
const caveEntranceImage = document.querySelector("#caveEntranceImage");
const caveInsideImage = document.querySelector("#caveInsideImage");

const weapons = [
  {
    name: "stick",
    power: 5,
  },
  {
    name: "dagger",
    power: 30,
  },
  {
    name: "claw hammer",
    power: 50,
  },
  {
    name: "sword",
    power: 100,
  },
];

const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15,
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60,
  },
  {
    name: "dragon",
    level: 20,
    health: 300,
  },
];
// accessing the data index by the properties
// using {} "empty objects"
// objects contain key values
const locations = [
  {
    name: "town square",
    "button text": ["Go to Store", "Go to Cave", "Fight Dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: 'You\'re in the  Town Square!. You see a sign that says "store".',
  },
  {
    name: "store",
    "button text": [
      "Buy 10 health(10 gold)",
      "Buy Weapon(30 gold)",
      "Go to Town Square",
    ],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You've entered the store'",
  },
  {
    name: "cave",
    "button text": ["Fight Slime", "Fight Fanged Beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You've entered the cave. You see some monsters",
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, run],
    text: "You've entered the cave. You see some monsters",
  },
  {
    name: "Kill monster",
    "button text": [
      "Go to Town Square",
      "Go to Town Square",
      "Go to Town Square",
    ],
    "button functions": [goTown, goTown, goTown],
    text: 'The monster screams "Arg!" as it dies. you gain XP points and gold!!.',
  },
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You have died ☠️",
  },
  {
    name: "win",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You've defeated the dragon, you win the game 🎉 !!!!!",
  },
];

// initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// creating reusable functions
function update(locations) {
  monsterStats.style.display = "none";
  button1.innerText = locations["button text"][0];
  button2.innerText = locations["button text"][1];
  button3.innerText = locations["button text"][2];
  button1.onclick = locations["button functions"][0];
  button2.onclick = locations["button functions"][1];
  button3.onclick = locations["button functions"][2];
  text.innerText = locations.text;
}

// functions
function goTown() {
  townSquareImage.style.display = "block";
  storeImage.style.display = "none";
  caveInsideImage.style.display = "none";
  update(locations[0]);
}
function goStore() {
  storeImage.style.display = "block";
  townSquareImage.style.display = "none";
  caveInsideImage.style.display = "none";
  update(locations[1]);
}

function goCave() {
  caveInsideImage.style.display = "block";
  townSquareImage.style.display = "none";
  storeImage.style.display = "none";

  update(locations[2]);
}

// for store stuff
function buyHealth() {
  if (gold >= 10 && health < 100) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else if (gold < 10) {
    text.innerText = "Not enough gold";
  } else if (health == 100) {
    text.innerText = "Health is full";
  }
}
function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You know have a new " + newWeapon + "!!.\n";
      inventory.push(newWeapon);
      text.innerText += "In your inventory you have: " + inventory;
    } else {
      text.innerText = "Not enough gold";
    }
  } else {
    text.innerText = "You have the most powerfull weapon!!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}
function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    // if we user var it can come outside of the if statement
    // so we use let
    // shift is removing the first element from the array and returning into this variable
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += "In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell you only weapon (Are you dumb?)";
  }
}

function fightSlime() {
  fighting = 0;
  goFight();
}
function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}

// go fight function
function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  // displaying the monster stats html element by updating the css display property = block
  // updating the css text in javascript
  monsterStats.style.display = "block";
  // setting the inner text of the monster name and monster health
  monsterNameText.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

// attack function
function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks!.";
  text.innerText =
    "You attack it with your " + weapons[currentWeapon].name + ".";
  // you get damage
  health -= +monsters[fighting].level;
  // monster gets the damage
  // math.random is going to generate a random number btw 0 and 1
  // multiply by the xp and floor functions till for a whole number +1
  monsterHealth -=
    weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    // "=" is assignment operator , "==" compares after all the type conversions
    // "===" compares directly without any type conversions , compares if they aare identical
    // instead we use the ternary operator
    fighting === 2 ? winGame() : defeatMonster();
  }
}

// dodge function
function dodge() {
  text.innerText =
    "You dodge the attack from the " + monsters[fighting].name + ".";
}
function run() {}

function defeatMonster() {
  // setting the gold to monsters level + 6.7 round to whole
  gold += Math.floor(monsters[fighting].level * 6.7);
  // xp is monsters level added to it
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}

function lose() {
  update(locations[5]);
}
function winGame() {
  update(locations[6]);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}
