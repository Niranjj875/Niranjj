var bg , sleep , brush , gym , eat, bath , move ;
var astronaut;
var edges;
function preload(){
bg = loadImage('iss.png');
sleep = loadAnimation('sleep.png');
brush = loadAnimation('brush.png');
gym = loadAnimation ('gym1.png','gym2.png','gym11.png','gym12.png');
eat = loadAnimation('eat1.png','eat2.png');
bath = loadAnimation('bath1.png','bath2.png');
move = loadAnimation('move.png','move1.png');

}

function setup() {
  createCanvas(800,400);
  astronaut=createSprite(300,260);
  astronaut.addAnimation('sleeping',sleep);
  astronaut.scale=0.1;
  
}

function draw() {
  background(bg);
  textSize(20);
  fill('Blue');
  text("Instruction",20,35);
  textSize(15);
  text("Up arrow = brushing",20,55) 
  text("Down arrow = Gymming",20,70);
  text("Left arrow = bathing",20 ,85);
  text("right arrow = Eatng",20,100);
  text("m key = moving",20,120);

edges=createEdgeSprites();
astronaut.bounceOff(edges);
if(keyDown("UP_ARROW")){
  astronaut.addAnimation('brushing',brush)
  astronaut.changeAnimation('brushing');
  astronaut.y = 350 ;
  astronaut.veloctiyX=0;
  astronaut.veloctiyY=0;

}
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation('gymming',gym)
  astronaut.changeAnimation('gymming');
  astronaut.y = 350 ;
  astronaut.veloctiyX=0;
  astronaut.veloctiyY=0;
  
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation('bathing',bath)
  astronaut.changeAnimation('bathing');
  astronaut.x = 300 ;
  astronaut.veloctiyX=0;
  astronaut.veloctiyY=0;
  
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation('eating',eat)
  astronaut.changeAnimation('eating');
  astronaut.x = 150 ;
  astronaut.y = 350 ;
  astronaut.veloctiyX=0.5;
  astronaut.veloctiyY=0.5;
  
}
if(keyDown("m")){
  astronaut.addAnimation('moving',move)
  astronaut.changeAnimation('moving');
  astronaut.veloctiyX=1;
  astronaut.veloctiyY=1;
  
}
  drawSprites();
}