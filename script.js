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

// accessing the data index by the properties
// using {} "empty objects"
// objects contain key values
const location = [
  {
    name: "town square",
    "button text": ["Go to Store", "Go to Cave", "Fight Dragon"],
  },
];

// initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// creating reusable functions
function update(location) {}

// functions
function goStore() {
  // updates the text
  button1.innerText = "Buy 10 health(10 gold)";
  button2.innerText = "Buy Weapon(30 gold)";
  button3.innerText = "Go to Town Square";
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;
  text.innerText = "You've entered the store!";
}

function goCave() {}

function fightDragon() {
  console.log("go to fighting dragon");
}

// for store stuff
function buyHealth() {}
function buyWeapon() {}
function goTown() {
  // updates the text
  button1.innerText = "Go to Store";
  button2.innerText = "Go to Cave";
  button3.innerText = "Fight Dragon";
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  text.innerText =
    'You\'re in the  Town Square!. You see a sign that says "store".';
}
