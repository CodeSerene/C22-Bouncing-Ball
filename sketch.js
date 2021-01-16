const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var myengine,myworld;
var ground;
var ball;


function setup() {
  createCanvas(400,400);
  myengine=Engine.create();
   
  myworld=myengine.world;

var ground_options={
  isStatic:true
}

var ball_options={
  restitution:1.5
}


ground=Bodies.rectangle(200,392,200,20,ground_options);
World.add(myworld,ground);
console.log(ground.position.x)


ball=Bodies.circle(200, 200, 30, ball_options);
World.add(myworld,ball);

}



function draw() {
true
  background("pink");  
  Engine.update(myengine);
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400, 10)
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 30, 30);
  
}