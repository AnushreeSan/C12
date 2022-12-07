var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud,cloudsGroup,cloudImage;





function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  cloudImage= loadImage("cloud.png");
  
  groundImage = loadImage("ground2.png");
  
 
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  }
function draw(){
background(180);

if(keyDown("space")&& trex.y>=100){
  trex.velocityY =-10;
}

trex.velocityY = trex.velocityY +0.8

if(ground.x<0){
  ground.x = ground.width/2;
}

trex.collide(invisibleGround);


spawnClouds();

drawSprites();

}

function spawnClouds(){

  if(frameCount % 60 ===0){
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y=Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;


    cloud.depth = trex.depth
    trex.depth = trex.depth +1;
  }
}
