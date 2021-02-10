var fixedRect, movingRect,a,b,c;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  a=createSprite(100,100,50,50)
  a.shapeColor="blue"
  b=createSprite(200,100,50,50)
  b.shapeColor="orange"
  c=createSprite(300,100,50,50)
  c.shapeColor="cyan"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(c,movingRect))
{
  c.shapeColor = "red";
  movingRect.shapeColor = "red";
}
else
{
  c.shapeColor = "green";
movingRect.shapeColor = "green";
}
  
  
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2)
     {
  return true
}
else {
return false
}
}