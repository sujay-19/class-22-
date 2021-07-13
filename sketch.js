const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,robe5;
var con1,con2,con3,con4,con5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var bob_options = {
		restitution: 0.8
	  }
	  bob1 = Bodies.circle(300,180,30,bob_options)
	  bob2 = Bodies.circle(330,180,30,bob_options)
	  bob3 = Bodies.circle(360,180,30,bob_options)
	  bob4 = Bodies.circle(390,180,30,bob_options)
	  bob5 = Bodies.circle(420,180,30,bob_options)
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	World.add(world,bob1)
	World.add(world,bob2)
	World.add(world,bob3)
	World.add(world,bob4)
	World.add(world,bob5)



	con1 = Matter.Constraint.create({
		pointA:{x:300,y:100},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:160,
		stiffness:0.1	
	})
   World.add(world,con1)

   con2 = Matter.Constraint.create({
	pointA:{x:330,y:100},
	bodyB:bob2,
	pointB:{x:0,y:0},
	length:160,
	stiffness:0.1	
})
World.add(world,con2)

con3 = Matter.Constraint.create({
	pointA:{x:360,y:100},
	bodyB:bob3,
	pointB:{x:0,y:0},
	length:160,
	stiffness:0.1	
})
World.add(world,con3)

con4 = Matter.Constraint.create({
	pointA:{x:390,y:100},
	bodyB:bob4,
	pointB:{x:0,y:0},
	length:160,
	stiffness:0.1	
})
World.add(world,con4)

con5 = Matter.Constraint.create({
	pointA:{x:420,y:100},
	bodyB:bob5,
	pointB:{x:0,y:0},
	length:160,
	stiffness:0.1	
})
World.add(world,con5)
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("red");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,30)
  ellipse(bob2.position.x,bob2.position.y,30)
  ellipse(bob3.position.x,bob3.position.y,30)
  ellipse(bob4.position.x,bob4.position.y,30)
  ellipse(bob5.position.x,bob5.position.y,30)
  
  push();
  strokeWeight(2);
  stroke("blue");
  line(bob1.position.x,bob1.position.y,300,100)
  line(bob2.position.x,bob2.position.y,340,100)
  line(bob3.position.x,bob3.position.y,380,100)
  line(bob4.position.x,bob4.position.y,420,100)
  line(bob5.position.x,bob5.position.y,460,100)
  pop();
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob

function keyPressed() {
	if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(bob1,{x:0,y:0},{x:0.08,y:0});
    }
}