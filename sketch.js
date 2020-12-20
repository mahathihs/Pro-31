const World=Matter.World;
const Engine=Matter.Engine;
const Body=Matter.Body;
const Bodies=Matter.Bodies;
const Render=Matter.Render;
const Constraint=Matter.Constriant;

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(380,790,790,20);
  
  var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
    });
    
    Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0); 

  for(var k=0; k<=width; k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  
  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j=40; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j=15; j<=width; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for(var j=0; j<particles.length; j++){
    particles[j].display();
  }

  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
  }

  ground.display();
}