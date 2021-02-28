
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint; 
var object,object1,object2,object3,object4,object5,roofobject;
var ball1,ball2,ball3,ball4,ball5;
var world;

function setup() {
	createCanvas(800, 800);
	rectMode(CENTRE);

	engine = Engine.create();
	world = Engine.world;

	roofobject = new roofobject(width/2,height/4,width/7,20);

	objectdiameter=40;

	startobjectPositionX=width/2;
	startobjectPositionY=height/4;
	object1=new(startobjectPositionX-objectdiameter*2,startobjectPositionY,objectdiameter);
	object2=new(startobjectPositionX-objectdiameter*3,startobjectPositionY,objectdiameter);
	object3=new(startobjectPositionX,startobjectPositionY,objectdiameter);
	object4=new(startobjectPositionX+objectdiameter,startobjectPositionY,objectdiameter);
	object5=new(startobjectPositionX+objectdiameter*2,startobjectPositionY,objectdiameter);

	//Create a Ground.

	var Render=Render.create({
		//element:document.body,
		engine:engine,
		options:{
			width:800,
			height:800,
			//wireframes:frames;
		}
	});

	ball1=new ball(object1.body,roofobject.body,-objectdiameter*2,0);
	ball2=new ball(object2.body,roofobject.body,-objectdiameter*1,0);
	ball3=new ball(object3.body,roofobject.body,0,0);
	ball4=new ball(object4.body,roofobject.body,-objectdiameter*1,0);
	ball5=new ball(object5.body,roofobject.body,-objectdiameter*2,0);

	//Giving conditions.

	constraint1={
		bodyA:object1.body,
		bodyB:roofobject.body,
		pointB: {x:-objectdiameter*2, y:0}}
		
    constraint2={
			bodyA:object2.body,
			bodyB:roofobject.body,
			pointB:{ x:-objectdiameter, y:0}}

	constraint3={
		bodyA:object3.body,
		bodyB:roofobject.body,
		pointB:{ x:0, y:0}}

	constraint4={
		bodyA:object4.body,
		bodyB:roofobject.body,
		pointB:{ x:-objectdiameter*2, y:0}}

    constraint5={
		bodyA:object5.body,
		bodyB:roofobject.body,
		pointB:{ x:-objectdiameter*2, y:0}}

		Engine.run(engine);
	
	}

//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  object.display();
  object1.display();
  object2.display();
  object3.display();
  object4.display();
  object5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  drawSprites();
 
}

function keyPressed(){
	if(KeyCode===UP_ARROW){
		Matter.Body.applyforce(object1.body.object1.body.position,{x:-50, y:-45});
	}
}



