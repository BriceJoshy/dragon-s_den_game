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
const caveInsideImage = document.querySelector("#caveInsideImage");
const buyHealthImage = document.querySelector("#buyHealthImage");
const buyDaggerImage = document.querySelector("#buyDaggerImage");
const buyClawHammerImage = document.querySelector("#buyClawHammerImage");
const buySwordImage = document.querySelector("#buySwordImage");
const winImage = document.querySelector("#winImage");
const loseImage = document.querySelector("#loseImage");
const fightDragonImage = document.querySelector("#fightDragonImage");
const deadImage = document.querySelector("#deadImage");

const buy = [buyDaggerImage, buyClawHammerImage, buySwordImage];

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
    "button functions": [goTown, goTown, easterEgg],
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
  {
    name: "easter egg",
    "button text": ["2", "8", "Go to Town Square!!"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen beyween 0 and 10. If the number matches one of the random numbers, you win!!",
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
  buy[0].style.display = "none";
  buy[1].style.display = "none";
  buy[2].style.display = "none";
  buyHealthImage.style.display = "none";
  winImage.style.display = "none";
  loseImage.style.display = "none";
  fightDragonImage.style.display = "none";
  deadImage.style.display = "none";
  update(locations[0]);
}
function goStore() {
  storeImage.style.display = "block";
  townSquareImage.style.display = "none";
  caveInsideImage.style.display = "none";
  buy[0].style.display = "none";
  buy[1].style.display = "none";
  buy[2].style.display = "none";
  buyHealthImage.style.display = "none";
  update(locations[1]);
}

function goCave() {
  caveInsideImage.style.display = "block";
  townSquareImage.style.display = "none";
  storeImage.style.display = "none";
  buy[0].style.display = "none";
  buy[1].style.display = "none";
  buy[2].style.display = "none";
  buyHealthImage.style.display = "none";

  update(locations[2]);
}

// for store stuff
function buyHealth() {
  if (gold >= 10 && health < 100) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
    storeImage.style.display = "none";
    buy[0].style.display = "none";
    buy[1].style.display = "none";
    buy[2].style.display = "none";
    buyHealthImage.style.display = "block";
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
      storeImage.style.display = "none";
      buyHealthImage.style.display = "none";
      if (currentWeapon === 1) {
        buy[0].style.display = "block";
      } else if (currentWeapon === 2) {
        buy[0].style.display = "none";
        buy[1].style.display = "block";
      } else if (currentWeapon === 3) {
        buy[0].style.display = "none";
        buy[1].style.display = "none";
        buy[2].style.display = "block";
      }
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
  fightDragonImage.style.display = "block";
  loseImage.style.display = "none";
  townSquareImage.style.display = "none";
  storeImage.style.display = "none";
  caveInsideImage.style.display = "none";
  buy[0].style.display = "none";
  buy[1].style.display = "none";
  buy[2].style.display = "none";
  buyHealthImage.style.display = "none";
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
  if (isMonsterHit()) {
    health -= getMonsterAttackValue(monsters[fighting].level);
  } else {
    text.innerText += "Attack Missed!!";
  }
  if (Math.random() <= 0.1 && inventory.length !== 1) {
    // should not break the only weapon
    text.innerText += "Your " + inventory.pop() + " breaks!!";
    currentWeapon--;
  }
  // monster gets the damage
  // math.random is going to generate a random number btw 0 and 1
  // multiply by the xp and floor functions till for a whole number +1
  monsterHealth -=
    weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose_dead();
  } else if (monsterHealth <= 0) {
    // "=" is assignment operator , "==" compares after all the type conversions
    // "===" compares directly without any type conversions , compares if they aare identical
    // instead we use the ternary operator
    fighting === 2 ? winGame() : defeatMonster();
  }
}

function getMonsterAttackValue(level) {
  let hit = level * 5 - Math.floor(Math.random() * xp);
  console.log(hit);
  // returning the value
  return hit;
}

function isMonsterHit() {
  // return 80% true i.e except 20%
  // if the players health is <20 then its always a hit
  return Math.random() > 0.2 || health < 20;
}

// dodge function
function dodge() {
  text.innerText =
    "You dodge the attack from the " + monsters[fighting].name + ".";
}
function run() {
  goTown();
}

function defeatMonster() {
  // setting the gold to monsters level + 6.7 round to whole
  gold += Math.floor(monsters[fighting].level * 6.7);
  // xp is monsters level added to it
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}

function lose_dead() {
  deadImage.style.display = "block";
  townSquareImage.style.display = "none";
  storeImage.style.display = "none";
  caveInsideImage.style.display = "none";
  buy[0].style.display = "none";
  buy[1].style.display = "none";
  buy[2].style.display = "none";
  buyHealthImage.style.display = "none";
  fightDragonImage.style.display = "none";
  update(locations[5]);
}

function lose() {
    loseImage.style.display = "block";
    townSquareImage.style.display = "none";
    storeImage.style.display = "none";
    caveInsideImage.style.display = "none";
    buy[0].style.display = "none";
    buy[1].style.display = "none";
    buy[2].style.display = "none";
    buyHealthImage.style.display = "none";
    fightDragonImage.style.display = "none";
    deadImage.style.display = "none";
    update(locations[5]);
  }


function winGame() {
  winImage.style.display = "block";
  townSquareImage.style.display = "none";
  storeImage.style.display = "none";
  caveInsideImage.style.display = "none";
  buy[0].style.display = "none";
  buy[1].style.display = "none";
  buy[2].style.display = "none";
  buyHealthImage.style.display = "none";
  deadImage.style.display = "none";
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

function easterEgg() {
  update(locations[7]);
}

function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

// while the numbers is less than 10 push a random number
// if > 10 the condition becomes false
function pick(guess) {
  let numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.round(Math.random() * 11));
  }
  text.innerText =
    "You've picked " + guess + ". Here are the random numbers:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.indexOf(guess) !== -1) {
    text.innerText = "Right! You win 20 gold!!!!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText = "Wrong! You lose 10 health!!!";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}
