var myGamePiece;
var gravityOn = false;
function startGame() {
    myGamePiece = new square(30,120, "white", 1400, 240);
    myGamePiece2 = new square(30,120, "white", 198, 240);
    myGamePiece3 = new square(30,30, "white", 799,300);
    myGameArea.start();
}

// The canvas (game area) specs
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1598;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

// The square object
function square(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
}

// Refreshes the html to include what happened in the JavaScript
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();    
    myGamePiece.update();
    myGamePiece2.newPos();    
    myGamePiece2.update();
    myGamePiece3.newPos();    
    myGamePiece3.update();
    bouncySquare();
    /*if(gravityOn){
        gravity();
    } */
    
}

// The button controlls
function moveup() {
    myGamePiece.speedY -= 1; 
}

function movedown() {
    myGamePiece.speedY += 1; 
}

function moveup2() {
    myGamePiece2.speedY -= 1; 
}

function movedown2() {
    myGamePiece2.speedY += 1; 
}

//make the square bounce
function bouncySquare(){
    if(myGamePiece3.y > myGameArea.canvas.height - 30 || myGamePiece3.y < 0){
        myGamePiece3.speedY *= -1
    }
    if(myGamePiece3.x > myGameArea.canvas.width - 30 || myGamePiece3.x < 0){
        myGamePiece3.speedX *= -1
    }
    
    if (myGamePiece3.x  < myGamePiece2.x && myGamePiece3.x > myGamePiece2.x && myGamePiece3.y > myGamePiece2.y && myGamePiece3.y < myGamePiece2.y + 120 ){
        myGamePiece3.x *= -1
    }
    
    
    
    
    
}
/*function gravity(){
    let gravity = -1;
    if (myGamePiece.y<myGameArea.canvas.height - 120){
        myGamePiece.speedY -= gravity;
    }
}
function gravityOnOff(){
    if (gravityOn){
        gravityOn = false;
        Math.round (myGamePiece.speedY);
    }else{
        gravityOn = true;
    }
}*/
function start(){
    setTimeout(function(){
        myGamePiece3.speedY = Math.floor(Math.random()*10)-5
        myGamePiece3.speedX = Math.floor(Math.random()*10)-5
    },3000)
    
}
start();