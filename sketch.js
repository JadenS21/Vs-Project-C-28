const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone;
var boy;
var mango1,mango2,mango3,mango4,mango5

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    
    stone = new Stone(200,550);
    boy = new Boy(210,600,20,50);
    
    mango1 = new Mango(700,300,20,40);
    mango2 = new Mango(740,270,20,40);
    mango3 = new Mango(680,300,10,20);
    mango4 = new Mango(700,270,10,20);
    mango5 = new Mango(730,320,15,30);
    
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

function detectCollision(lstone,lmango){
    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance<=lmango.r + lstone.r){
        Matter.Body.setStatic(lmango.body,false)
    }
}