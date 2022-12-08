function character(health, damage) {
    this.health = health;
    this.damage = damage;
    this.isDefending = false;
    this.isDead = false
    this.isAChicken = false
}

let Hero   = new character(100, 15);
let Dragon = new character(200, 8);

let newMessage = "Empty string message";

function updateDisplay() {
    document.getElementById("heroHealth").innerHTML   = Hero.health;
    document.getElementById("dragonHealth").innerHTML = Dragon.health;
    document.getElementById("textBox").innerHTML      = newMessage;
}