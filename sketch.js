const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;




var base1 
var base2
var link


function setup() {
  createCanvas(1400,600);

  engine = Engine.create();
  world = engine.world;
  
  base1=new Ground(700,400,200,10);
  base2 = new Ground(1000,200,200,10);
  box1 = new Box (700,380,40,40)
  box2 = new Box (740,380,40,40)
  box3 = new Box (780,380,40,40)
  box4 = new Box (820,380,40,40)

  polygon = Bodies.rectangle(400,400,20,20)
  World.add(world,polygon);

link = new SlingShot(polygon,{x:300,y:400})

}

function draw() {
  background("black");
  
  Engine.update(engine);

  base1.display();
  base2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  link.display();

rect(polygon.position.x,polygon.position.y,20,20)


  drawSprites();


}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  link.fly();

}