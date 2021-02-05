//global variable
var backround
function preload(){
B=loadImage("tower.png");  
D=loadImage("door.png")
G=loadImage("ghost-standing.png")

}
function setup(){
 createCanvas(600,600) 
  backround=createSprite(300,300,600,600)
  backround.addImage("b",B)
  backround.velocityY=4
  backround.scale=1.3
  ghost=createSprite(300,150,10,10)
  ghost.addImage("g",G)
  ghost.scale=0.5
  ghost.velocityY=2
  DF = new Group()


}
function draw(){
  background(220)
  if(backround.y>650){
   backround.y=backround.height/2  
     }
  doors()
ghost.x=mouseX
ghost.y=mouseY
  
 if(ghost.isTouching(DF)){
    ghost.destroy();
    DF.destroyEach();
    backround.velocityY=0
  doors.velocityYEach=0
 } 
  
  
  
  drawSprites()
}
function doors(){
 
if(frameCount%50===0){
  var doors = createSprite(random(50,550),0,40,40)  
 doors.velocityY=4 
  doors.addImage("d",D) 
 DF.add(doors)
} 
}






