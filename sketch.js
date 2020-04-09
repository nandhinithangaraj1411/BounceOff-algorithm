var movingRect,fixedRect

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 400, 80, 30);
  fixedRect=createSprite(400,200,50,30);
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  movingRect.velocityY=-5;
  fixedRect.velocityY= 5;

}

function draw() {
  background(255,255,255);  
 // movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;

bounceOff(movingRect,fixedRect);
  drawSprites();
}


