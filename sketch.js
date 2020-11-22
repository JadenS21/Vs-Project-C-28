const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone;
var boy;

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    
    stone = new Stone(200,550);
    boy = new Boy(210,600,20,50);
    
	Engine.run(engine);
  
}

function draw() {
    background(0);
    Engine.update(engine);
    
	stone.display();
	boy.display();
    
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    boy.fly();
}

function keyPressed(){
    if(keyCode === 32){
        boy.attach(stone.body)
    }
}