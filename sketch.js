var trex_running
var edges 
var groundImage


function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png") 
groundImage=loadImage("ground2.png")
}

function setup() {
  createCanvas(600,200);
  trex=createSprite(150, 170, 30, 75);
  trex.addAnimation("running",trex_running)
  trex.scale=0.5;
  ground=createSprite(300,180,600,10)
  ground.addImage("ground",groundImage)
}

function draw() {
  background("lightblue"); 

  if(keyDown("space")){ 
trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+0.8 

  edges=createEdgeSprites()
trex.collide(ground)

ground.velocityX=-2;

if(ground.x<0){
  ground.x=300;
}


  drawSprites();
}
