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
];

// initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// creating reusable functions
function update(locations) {
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
  update(locations[0]);
}
function goStore() {
  update(locations[1]);
}

function goCave() {
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

function goFight() {}
