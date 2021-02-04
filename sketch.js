
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paper, arrow, dunk, dunkImg, arrowImg, win
var world, bin, dustbinImg, school, p1,p2,p3


function preload(){
	dustbinImg=loadImage("dustbin.png");
	school=loadImage("school.jpg");
	arrowImg=loadImage("red_arrow.png");
	dunkImg=loadImage("shooter.png");
	win=loadImage("win.jpg")
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,690,width,20);

	arrow=createSprite(1200,250,1600,350);
	arrow.addImage(arrowImg);
	arrow.scale=0.5

	dunk=createSprite(900,350,40,40)
	dunk.addImage(dunkImg);

	p1=createSprite(800,100,1600,350);
	p2=createSprite(500,450,1100,425);
	p3=createSprite(1550,425,400,450);
	paper=new Paper(200,500,70,70);

	


	dustbinObj=new dustbin(1200,650);
 
	
	


	bin=createSprite(1200,523,20,30);
	bin.addImage(dustbinImg);
	bin.scale=0.9;

	Engine.run(engine);
  

}


function draw() {
	rectMode(CENTER);
	background(school);
	
	
	if((mousePressedOver(p1))||(mousePressedOver(p2))||(mousePressedOver(p3))) { 
        paper.body.position.x=mouseX
        paper.body.position.y=mouseY
	  }
	  if(paper.body.position.x>1080||paper.body.position.x<1300||paper.body.position.y>400){
	  arrow.display();
	  paper.display();
	  dunk.display();
	  groundObject.display();
	  dustbinObj.display();
	
	bin.display();}

	stop();

	
	  
	  }



	//dustbin starts at x=1080
	//dustbin ends at x=1300
	//dusrbin starts at y=400

function stop(){
	if(paper.body.position.x>1080&&paper.body.position.x<1300&&paper.body.position.y>400){
	
		background(win)
	}

}




