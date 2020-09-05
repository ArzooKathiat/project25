const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

	Engine.run(engine);

  paper = new Paper(10,100,70);
  side1 = new Dustbin(width/2,height-50,200,20);
	

	side2=new Dustbin (width/2.7,height-90,20,100);


	side3=new Dustbin (510,height-90,20,100);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  paper.display();
  ground.display();
  side3.display();

  keyPressed();
  drawSprites();
 
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  }
}

