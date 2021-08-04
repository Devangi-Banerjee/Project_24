var side1, side2, side3;
var ground;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    side1=createSprite(560, 660 , 200,20);
	side1.shapeColor=color("red");

	side2=createSprite(650 , 600 ,20,100);
    side2.shapeColor=color("red");

	side3=createSprite(470 , 600 , 20,100);
	side3.shapeColor=color("red");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	Engine.run(engine);
  
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
   
	ball = new paper(100,600);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body , paperObject.body.position,{x: 85 , y:85});
	}
}


