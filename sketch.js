var ball, ball1;
var rect1, rect2;

function setup() {
  createCanvas(800,400);
  ball = createSprite(400, 200, 50, 50);
 ball.shapeColor = "red";

  ball1 = createSprite(650,350,80,30);
  ball1.shapeColor = "blue";

  rect1 = createSprite(300,150,100, 30);
  rect1.shapeColor = "yellow";

  rect2 = createSprite(700,250,100,30);
  rect2.shapeColor = "pink";


}


function draw() {
  background(0);  
  
  ball1.x = World.mouseX;
  ball1.y = World.mouseY;
 
  if(isTouching(ball1,rect1)){


    rect1.shapeColor = "green";
    ball1.shapeColor = "green";

  }else{

    rect1.shapeColor = "red";
    ball1.shapeColor = "blue";

  }

  drawSprites();
  
}



function isTouching(p1,p2){

 
  if(p1.x-p2.x < p2.width/2 + p1.width/2
    && p2.x-p1.x <p2.width/2 + p1.width/2
    && p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2 ) {
      return true;

  }else{
   
  return false;
  
  }




}