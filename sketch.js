var fixedRect, movingRect;
var rect1 , rect2

function setup() {
  createCanvas(800,400);
  fixedRect =  createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "yellow"
  movingRect =  createSprite(400, 200, 60, 50);
  movingRect.shapeColor = "blue"
  rect1 =  createSprite(400, 100, 50, 50);
  rect1.shapeColor = "black"
  rect2 =  createSprite(100, 100, 50, 50);
  rect2.shapeColor = "yellow"
  rect2.velocityX = 3
  
}

function draw() {
  background(220,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

 console.log("Distance " + (movingRect.x - fixedRect.x) )
 console.log("Width/2 " + (movingRect.width + fixedRect.width)/2 )

 if((movingRect.x - fixedRect.x) <= (movingRect.width + fixedRect.width)/2 
   && (fixedRect.x - movingRect.x) <= (movingRect.width + fixedRect.width)/2
   && (fixedRect.y - movingRect.y) <= (movingRect.height/2 + fixedRect.height/2)
  && (movingRect.y - fixedRect.y) <= (movingRect.height/2 + fixedRect.height/2))
 {
  fixedRect.shapeColor = "red"
 }
 else{
  fixedRect.shapeColor = "yellow"
 }
 if((rect1.x - rect2.x) <= (rect2.width + rect1.width)/2 
   && (rect2.x - rect1.x) <= (rect2.width + rect1.width)/2)
{
rect2.velocityX=-1*rect2.velocityX

}
  drawSprites();
}