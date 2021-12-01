const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15;
var ball;
var rope;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,1200,20);
    platform = new Ground(150, 305, 300, 170);

   b1=new Box(900,100,70,70);
   b2=new Box(900,100,70,70);
   b3=new Box(900,100,70,70);
   b4=new Box(900,100,70,70);
   b5=new Box(900,100,70,70);
   b6=new Box(900,100,70,70);
   b7=new Box(900,100,70,70);
   b8=new Box(800,100,70,70);
   b9=new Box(800,100,70,70);
   b10=new Box(800,100,70,70);
   b11=new Box(800,100,70,70);
   b12=new Box(800,100,70,70);
   b13=new Box(800,100,70,70);
   b14=new Box(800,100,70,70);
   b15=new Box(800,100,70,70);

   ball=new Ball(300,200,80,80);
   rope=new Rope(ball.body,{x:500,y:50});

}

function draw(){
    background("yellow")
    
      
    Engine.update(engine);
    //strokeWeight(4);
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    ground.display();
    ball.display();
    rope.display();
   // b1.display();
}

function mouseDragged(){
   // if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
   // }
}


/*function mouseReleased(){
    rope.fly();
    gameState = "launched";
}
*/


