let xp  = 0;
let health = 100;
let gold = 50;
let currItem = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"/*, "dager", "sword"*/];
let weaponCount = 0;

/*</div>
    <div id="weaponBar">
      <div id = "weaponControls">
        <span>Weapon List: <strong><span id="weaponList"></span></strong></span><br>
        <button id="prevWeaponButton">&#8592 Previous Weapon</button>
        <button id="nextWeaponButton">Next Weapon &#8594</button>
      </div>

      <span class = "weaponInfo">
        Weapon Name: <strong><span id = "currentWeaponName"></span></strong></span><br>
        Weapon Damage: <strong><span id="currentWeaponDamage"></span></strong><br>
        Weapon Price: <strong><span id="currentWeaponPrice"></span></strong></span> */

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const weaponsText = document.querySelector("#weaponsText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const detail1 = document.querySelector("#det1");
const detail2 = document.querySelector("#det2");
const detail3 = document.querySelector("#det3");

const buybutton = document.querySelector("#buyButton");
const weaponcontrols = document.querySelector("#weaponControls");
const weaponListText = document.querySelector("#weaponList");
const weaponbar = document.querySelector("#weaponBar");
const prevwepnbttn = document.querySelector("#prevWeaponButton");
const nextwepnbttn = document.querySelector("#nextWeaponButton");
const currentWeaponNameText = document.querySelector("#currentWeaponName");
const currentWeaponDamageText = document.querySelector("#currentWeaponDamage");
const currentWeaponPriceText = document.querySelector("#currentWeaponPrice");

const enemies=[
    {
        name: "Slime",
        health: 30
    },
    {
        name: "Fanged Beast",
        health: 50
    },
    {
        name: "Dragon",
        health: 100
    }
]

const healthPortions = [
    {
        name : "Healing lvl 1",
        healing : 10,
        price : 10
    },
    {
        name : "Healing lvl 2",
        healing : 20,
        price : 20
    },
    {
        name : "Healing lvl 3",
        healing : 30,
        price : 30
    }
]

const weapons = [{   
        name: "Sword",
        damage: 10,
        price: 5 },
        {   
        name: "Spear",
        damage: 10,
        price: 6},
        {   
        name: "Dagger",
        damage: 5,
        price: 4},
        {   
        name: "Axe",
        damage: 11,
        price: 7},
        {   
        name: "Mace",
        damage: 12,
        price: 10},
        {   
        name: "Bow",
        damage: 10,
        price: 12},
        {   
        name: "Crossbow",
        damage: 15,
        price: 14},
        {   
        name: "Staff",
        damage: 18,
        price: 16},
        {   
        name: "Wand",
        damage: 20,
        price: 30
    }
];
const locations = [
    {
        name: "Town Square",
        "button text" : ['Go to store', 'Go to cave', 'Fight dragon'],
        "text": "You are in the town square. You see a sign that says \"The 'town square'\".",
        "button function": [goStore, goCave, fightDragon]
    },
    {
        name: "Store",
        "button text" : ["Buy Health Portion", "Buy weapon", "Go to town square"],
        "text" : "You enter the store. You see a sign that says \"Welcome to the store!\" \n What do you want to buy?",
        "button function": [buyHealth, buyWeapon, goTown]
    },
    {
        name: "Cave",
        "button text" :["Fight Slime", "Fight fanged beast", "Go to town square"],
        "text" : "You enter the cave. You see some monsters. Which one do you want to fight?",
        "button function": [fightSlime,fightBeast,fightDragon,goTown]
    },
    {
        name: "Fight Dragon",
        "button text": ["Attack", "Dodge", "Run"],
        "text": "You are fighting the dragon! Use your weapons to deal damage to to the dragon, but watch out for its attacks!.",
        "button function": [attack, dodge, goTown]
    }
]

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
function update(location){
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    text.innerText = location["text"];
    button1.onclick = location["button function"][0];
    button2.onclick = location["button function"][1];
    button3.onclick = location["button function"][2];
}
function goTown(){
    console.log("Going to town.");
    update(locations[0]);
    weaponbar.style.display = "none";
}
function goStore() {
    console.log("Going to store.");
    update(locations[1]);
}
function fightDragon() {
    console.log("Fighting dragon.");
    update(locations[3]);
}
function buyWeapon () {
    console.log("Buying weapon.");
    weaponbar.style.display = "block";
    weaponcontrols.style.height = "70px";
    weaponListText.innerText = weapons.map(weapon => weapon.name).join(", ");
    detail1.innerText = "Weapon Name: ";
    detail2.innerText = "Weapon Damage: ";
    detail3.innerText = "Weapon Price: ";
    currItem = 0;
    currentWeaponNameText.innerText = weapons[currItem].name;
    currentWeaponDamageText.innerText = weapons[currItem].damage;
    currentWeaponPriceText.innerText = weapons[currItem].price;
    
    nextwepnbttn.onclick = 
    function() {
        currItem = (currItem + 1) % weapons.length;
        currentWeaponNameText.innerText = weapons[currItem].name;
        currentWeaponDamageText.innerText = weapons[currItem].damage;
        currentWeaponPriceText.innerText = weapons[currItem].price;
    }
    prevwepnbttn.onclick = 
    function() { 
        currItem = (currItem - 1 + weapons.length) % weapons.length;
        currentWeaponNameText.innerText = weapons[currItem].name;
        currentWeaponDamageText.innerText = weapons[currItem].damage;
        currentWeaponPriceText.innerText = weapons[currItem].price;
    }
    buybutton.onclick = function() {
        if (weaponCount <= 3){
            if (gold >= weapons[currItem].price) {
                gold -= weapons[currItem].price;
                weaponsText.innerText = parseInt(weaponsText.innerText) + 1;
                text.innerText = "You have bought the " + weapons[currItem].name + " for " + weapons[currItem].price + " gold.";
                inventory.push(weapons[currItem].name);
                goldText.innerText = gold;
                weaponCount++;
            }
            else {
                text.innerText = "Not enough gold to buy weapon.";
            }
        }
        else{
            text.innerText = "You can buy at most 3 weapons."
        }
        
    }
    currItem = 0;
}

function buyHealth () {
    detail1.innerText = "Portion Name: ";
    detail2.innerText = "Portion Healing: ";
    detail3.innerText = "Portion Price: ";
    console.log("Buying Health Portion.");
    weaponbar.style.display = "block";
    weaponcontrols.style.height = "70px";
    currItem = 0;
    currentWeaponNameText.innerText = healthPortions[currItem].name;
    currentWeaponDamageText.innerText = healthPortions[currItem].healing;
    currentWeaponPriceText.innerText = healthPortions[currItem].price;
    prevwepnbttn.onclick = 
    function () {
        currItem = (currItem - 1 + healthPortions.length) % healthPortions.length;
        currentWeaponNameText.innerText = healthPortions[currItem].name;
        currentWeaponDamageText.innerText = healthPortions[currItem].healing;
        currentWeaponPriceText.innerText = healthPortions[currItem].price;
    }
    nextwepnbttn.onclick = 
    function () {
        currItem = (currItem + 1) % healthPortions.length;
        currentWeaponNameText.innerText = healthPortions[currItem].name;
        currentWeaponDamageText.innerText = healthPortions[currItem].healing;
        currentWeaponPriceText.innerText = healthPortions[currItem].price;
    }
    buybutton.onclick = 
    function () {
        if (gold >= healthPortions[currItem].price) {
                gold -= healthPortions[currItem].price;
                weaponsText.innerText = parseInt(weaponsText.innerText) + 1;
                text.innerText = "You have bought the " + healthPortions[currItem].name + " for " + healthPortions[currItem].price + " gold.";
                inventory.push(healthPortions[currItem].name);
                goldText.innerText = gold;
            }
            else {
                text.innerText = "Not enough gold to buy health portion.";
            }
    }


}

function fight() {
    
}
function goCave() {
    console.log("Going to cave.");
        update(locations[2]);
}
function fight(){
    console.log("Fighting monster.");
    
}