const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
var turn = 0;
var gameState = "play";
var count = 0;
var particle;
var line; 

function setup() {

  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <= width; k = k + 80) {
    
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));

  }

  for (var j = 75; j <=width; j=j+50) {

    plinkos.push(new Plinko(j,75));

  }

  for (var j = 50; j <=width-10; j=j+50) {
    
    plinkos.push(new Plinko(j,175));

  }

  for (var j = 75; j <=width; j=j+50) {
      
    plinkos.push(new Plinko(j,275));

  }

  for (var j = 50; j <=width-10; j=j+50) {

    plinkos.push(new Plinko(j,375));

  }
  
}

function draw() {
  
  background(100,0,255);
  
  textSize(20);
  text("SCORE : " + score, 20, 30);
  text("Turn : " + turn,680,30);

  textSize(24);
  text("500", 15, 550);
  text("400", 95, 550);
  text("300", 175, 550);
  text("200", 255, 550);
  text("100", 335, 550);
  text("100", 415, 550);
  text("200", 495, 550);
  text("300", 575, 550);
  text("400", 655, 550);
  text("500", 735, 550);

  Engine.update(engine);
 
  if(particle != null){

    particle.display();

    if(particle.body.position.y >= 780) {

      if(particle.body.position.x >= 320 && particle.body.position.x <= 400 || particle.body.position.x >= 400 && particle.body.position.x <= 480) {

        particle = null;

        score += 100;

        if(count >= 5) gameState = "end";

      }
      
      else if(particle.body.position.x >= 480 && particle.body.position.x <= 560 || particle.body.position.x >= 240 && particle.body.position.x <= 320) {

        particle = null;

        score += 200;

        if(count >= 5) gameState = "end";

      }

      else if(particle.body.position.x >= 160 && particle.body.position.x <= 240 || particle.body.position.x >= 560 && particle.body.position.x <= 640) {

        particle = null;

        score += 300;

        if(count >= 5) gameState = "end";

      }

      else if(particle.body.position.x >= 640 && particle.body.position.x <= 720 || particle.body.position.x >= 80 && particle.body.position.x <= 160) {

        particle = null;

        score += 400;

        if(count >= 5) gameState = "end";

      }

      else if(particle.body.position.x >= 0 && particle.body.position.x <= 80 || particle.body.position.x >= 720 && particle.body.position.x <= 800) {

        particle = null;

        score += 500;

        if(count >= 5) gameState = "end";

      }

    }

  }

  if(gameState === "end") {

    textSize(60);
    stroke("green");
    strokeWeight(5);
    text("GAME OVER", 250, 350);
    textSize(30);

  }

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
     
  }

  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();

  }

}

function mousePressed() {

  if(gameState !== "end") {

    count++

    particle = new Particle(mouseX, 10, 10, 10);

    turn++

  }

}
