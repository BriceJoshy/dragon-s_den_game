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
const button2 = document.querySelector("#button1");
const button3 = document.querySelector("#button1");
const text = document.querySelector("#button1");
const xpText = document.querySelector("#button1");
const healthText = document.querySelector("#button1");
const goldText = document.querySelector("#button1");
const monsterStats = document.querySelector("#button1");
const monsterNameText = document.querySelector("#button1");
const monsterHealthText = document.querySelector("#button1");

// initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
