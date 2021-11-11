var spookyRoom, mazeBackground
var security
var system
var gameState = 1
var score = 0

const accessCode1 = "DIAMOND"
const accessCode2 = "PYTHON"
const accessCode3 = "GLOVE"
const accessCode4 = "AGE"

function preload(){
  spookyRoom = loadImage("images/Spooky room.jpeg")
  mazeBackground = loadImage("images/Maze Background.jpeg");
}

function setup(){
createCanvas(1450, 700)
security = new Security()
system = new System()
}

function draw(){
background(spookyRoom);

clues();
//security.display();

if(score === 4) {
 gameState = 1
}

if(gameState === 1){
  clear()
  background(mazeBackground);
  var wall1 = createSprite(200 , 350, 15, 500)
  var wall2 = createSprite(692 , 100, 1000 , 15)
  var wall3 = createSprite(1200 , 350, 15 , 500)
  var wall4 = createSprite(692 , 600, 1000 , 15)  
  var wall5 = createSprite(692 , 100, 1000 , 15)
  var wall6 = createSprite(692 , 100, 1000 , 15)
  var wall7 = createSprite(692 , 100, 1000 , 15)
  var wall8  = createSprite(692 , 100, 1000 , 15)
  
  


  drawSprites();
}

}

function clues(){
  fill("white")
  textSize(15);
  text("What is very shiny and very costly?",100,50);
  fill("cyan")
  text("Hint : This is required to beat the game, or to save your family...", 100, 70)

  fill("white")
  textSize(15);
  text("Which is the coding platform that is also the name of an animal?",750,50);
  fill("cyan")
  text("Hint : T H P O Y N", 750,70)

  fill("white")
  textSize(15);
  text("What has 5 fingers but is a Non-living object?",750,500);
  fill("cyan")
  text("Hint :  E O G V L", 750,520)

  fill("white")
  textSize(15);
  text("What goes up, but never comes down?",100,500);
  fill("cyan")
  text("Hint : G A E", 100,520)
}
