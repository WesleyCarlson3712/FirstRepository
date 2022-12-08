let maxNumber = 1000;
let guessCount = 1;

let unknownNumber = Math.floor(Math.random()*maxNumber+1);

document.getElementById("maxNumDisplay").innerHTML = maxNumber;

function respondToGuess() {
    let guess = document.getElementById("guessInput").value;
    let response;
    if(guess==unknownNumber){
       response = "You guessed my number! :)<br>You made " + guessCount + " guesses.";
        document.getElementById("response").style.color = "green";
    }
    else if(guess<unknownNumber){
        response = guess + " is too low<br>You made " + guessCount + " guesses.";
        document.getElementById("response").style.color = "red";
    }
    else if(guess>unknownNumber){
        response = guess + " is too high<br>You made " + guessCount + " guesses.";
        document.getElementById("response").style.color = "red";
    }
    document.getElementById("response").innerHTML = response;
    guessCount++;
    
}