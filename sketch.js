var mr,fr;



function setup() {
  createCanvas(1200,600);
 mr= createSprite(400, 200, 50, 50);
fr= createSprite(200,200,50,50);
mr.shapeColor="blue";
fr.shapeColor="blue";
}

function draw() {
  background(0,0,0);
  mr.x=World.mouseX;
  mr.y=World.mouseY;  
if (mr.x-fr.x<mr.width/2+fr.width/2 && fr.x-mr.x<mr.width/2+fr.width/2 && mr.y-fr.y<mr.height/2+fr.height/2 && fr.y-mr.y<mr.height/2+fr.height/2 )  {
 
  mr.shapeColor="red";
  fr.shapeColor="red";


}
else {
 
 
  mr.shapeColor="blue";
  fr.shapeColor="blue";

}
  drawSprites();
}