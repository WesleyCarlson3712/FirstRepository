/***********************************************************************************************
 * Create functions to make each button do something. There are currently 3 
 * things that can be changed, the Hero's and Dragon's health, and the message.
 * 
 * The function names are "attack()", "defend()", and "run()".
 * 
 * The Hero and the Dragon objects are already created and have variables set
 * for their health and damage amounts. Access these values using:
 * Hero.health, Hero.damage, Dragon.health, Dragon.damage
 * 
 * To change the message being displayed, there is a string variable already
 * created called "newMessage". Just set it to something else.
 * 
 * To change what appears on the screen, you need to call the function
 * "updateDisplay()" at the end of your functions.
 *********************************************************************************************/

function attack(){
    let heroDamage = Hero.damage;
    let dragonDamage = Dragon.damage;
    if (Hero.isDefending) 
         heroDamage = Math.ceil(heroDamage * 1.5);
    
        Dragon.health -= heroDamage;
        checkIfDead();
        if (Dragon.isDead == false)
            Hero.health -= dragonDamage;
        checkIfDead();
    if (Dragon.isDead == false && Hero.isDead == false){
        newMessage = "You attack the dragon and do " + heroDamage + " damage. <br> The dragon attacks you and does " + dragonDamage + " damage.";
    }
    updateDisplay();
    Hero.isDefending = false;
}




function defend(){
    let dragonDamage = Dragon.damage
    Hero.isDefending = true;
    dragonDamage = Math.ceil(dragonDamage / 3); 
    Hero.health -= dragonDamage;
    newMessage = "You defend.<br> The dragon attacks you and does " + dragonDamage +" damage"
    checkIfDead();
    updateDisplay();
}




function run(){
    if (Math.round(Math.random() * 10) > 8){
        
        newMessage = "You escaped the dragon!"
        document.getElementById("heroImage").style.visibility = "hidden"
        document.getElementById("attack").style.visibility = "hidden"
        document.getElementById("defend").style.visibility = "hidden"
        document.getElementById("run").style.visibility = "hidden"   
    }
    else {
        newMessage = "You fail to escape the dragon.<br> The dragon attacks you and does " + Dragon.damage +" damage"
    
    Hero.health -= Dragon.damage;
    checkIfDead();
    }
    
    updateDisplay();
}




function checkIfDead(){
    
    if (Dragon.health <= 0){
        Dragon.health = 0
        Dragon.isDead = true
        newMessage = "You killed the dragon! You win!"
        document.getElementById("attack").style.visibility = "hidden"
        document.getElementById("defend").style.visibility = "hidden"
        document.getElementById("run").style.visibility = "hidden"
        document.getElementById("magic").style.visibility = "hidden"
    }
    if (Hero.health <= 0){
        Hero.health = 0
        Hero.isDead = true
        newMessage = "You are dead.<br> GAME OVER"
        document.getElementById("attack").style.visibility = "hidden"
        document.getElementById("defend").style.visibility = "hidden"
        document.getElementById("run").style.visibility = "hidden"
        document.getElementById("magic").style.visibility = "hidden"
        
    }
    updateDisplay();
}
    
    





function magic() {
    let number = Math.ceil(Math.random() * 5);
    switch(number){
        case 1:
            document.getElementById("dragonImage").src = "Pictures/chicken.png";
            newMessage = "You cast a spell on the dragon and it temporarily transforms into a chicken. The dragon is too confused to fight back";
            Dragon.isAChicken = true
            updateDisplay();
            //dragon becomes a chicken
            break;
        case 2:
            document.getElementById("heroImage").src = "Pictures/chicken.png";
            newMessage = "You cast a spell on yourself, and temporarily transform into a chicken. The dragon attacks you and does " + Dragon.damage +" damage";
            Hero.isAChicken = true
            updateDisplay();
            //you become a chicken
            break;
        case 3:
            
            //deal lots of damage
            break;
        case 4:
            
            Hero.health = Math.ceil(Hero.health / 2);
            newMessage = "Everything seems fine until you realize that your health has been cut in half "
            updateDisplay();
            //take lots of damage
            break;
        case 5:
            //nothing happens
            break;
                
        
    }
}






/*document.getElementById("dragonImage").src = "Pictures/chicken.png";
        newMessage = "You cast a spell on the dragon and it magicly transforms into a chicken"
        updateDisplay();*/

//document.getElementById("dragonImage").src = "Pictures/chicken.png";


 


































/*Dragon.damage=8
let heroTurn = true
function attack() {
    if (heroTurn = true){
        Hero.damage = Math.round(Math.random() * 15) 
        Dragon.health -= Hero.damage;


        if (Dragon.health > 0){
        newMessage = "You attacked the dragon and did " + Hero.damage + " damage!";
        }
        else {newMessage = "You stab the dragon's corpse"}
        if (Dragon.health <= 0) 
            Dragon.health = 0;

        heroTurn = false
        updateDisplay();
        dragonAttack();
        updateDisplay();
 }  }

function defend () {
    if (heroTurn = true){
        Dragon.damage -= 5

        newMessage = "You defended. All dammage you take will be reduced by 5 until your next turn";
        heroTurn = false
        updateDisplay();
        dragonAttack();
        updateDisplay();
}   }   


function run (){
    if (heroTurn = true){
        if (Math.round(Math.random()) == 1){
            newMessage = "You escape the dragon" 
        }
        else{ newMessage = "You fail to escape the dragon";   
        }
        heroTurn = false
        updateDisplay();
        dragonAttack
        updateDisplay();
}   }


function dragonAttack(){
    if (Dragon.health > 0) { 
        
        Hero.health -= Dragon.damage
        Dragon.damage = 8
        newMessage = "The dragon attacks, and does " + Dragon.damage + " damage";
        updateDisplay();
    heroTurn = true
    }
    else {heroTurn = true}
}

*/ 


