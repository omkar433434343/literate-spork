var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
}


function draw(){
  background("red");
  fill("blue")
  textSize(40)
  text("quiz", 380,50)
  
    
  fill("yellow")
   textSize(20)
  text("Question:- What starts and ends with the letter ‘E’, but has only one letter? ",150, 100 );
    
  text("1: Everyone ",150, 140 );
  
  text("2: Envelope",150, 180);
  
  text("3: Estimate ",150, 220 );
  
  text("4: Example",150, 260 );
  
  text("enter answer below ", 400, 350)
}




//made by om
