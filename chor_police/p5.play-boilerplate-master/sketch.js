var gameState=0;
//1 is when 2nd key is touch;
var redKey,blueKey,greenKey,fakeBlueKey,fakeGreenkey,blueKeyImg,GreenKeyImg,redKeyImg;
var diamonds,diamondImg;
var chor,police;
var chorImg;
var onButton,onButtonImg,offButtonImg,onButton2,onButton3;
var wall1,wall2,wall3,wall4, wall5,wall6,wall7,wall8,wall9, wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17;
var wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32;
var wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40,wall41,wall42,wall43,wall44,wall45,wall46,wall47;
var glitchWall1,glitchWall2;
var wallPaper;

function preload(){

chorImg = loadImage("images/chor.png")
redKeyImg= loadImage("images/redKey.png")
greenKeyImg= loadImage("images/greenKey.png")
blueKeyImg= loadImage("images/blueKey.png")
diamondImg= loadImage("images/diamond.png")
policeImg= loadImage("images/police.png")
onButtonImg= loadImage("images/onButton.png")
offButtonImg= loadImage("images/offButton.png")
wallPaper=loadImage("images/bank.jfif")
}


function setup() {
  blueKey=createSprite(50,450,30,30);
  fakeBlueKey=createSprite(150,270,30,30);
  blueKey.addImage(blueKeyImg);
  fakeBlueKey.addImage(blueKeyImg);
  blueKey.visible=false;
  fakeBlueKey.visible=false;
  blueKey.scale=0.2
  fakeBlueKey.scale=0.2
  fakeGreenKey =createSprite(30,30,30,30);
  greenKey= createSprite(980,470,30,30)
  greenKey.addImage(greenKeyImg);
  fakeGreenKey.addImage(greenKeyImg);
  greenKey.scale=0.06;
  fakeGreenKey.scale=0.06;
  greenKey.visible=false;
  fakeGreenKey.visible=false;
  redKey=createSprite(50,550,30,30);
  redKey.addImage(redKeyImg);
  redKey.scale=0.1;
  redKey.visible=false;
  diamonds=createSprite(980,240,30,30);
  diamonds.addImage(diamondImg);
  diamonds.scale=0.1


  

  
  wall1=createSprite(50,500,500,10);
  wall2=createSprite(100,575,10,50);
  wall3=createSprite(700,500,650,10);
  wall4=createSprite(200,530,10,50);
  wall5=createSprite(300,575,10,50);
  wall6=createSprite(400,530,10,50);
  wall7=createSprite(500,575,10,50);
  wall8=createSprite(600,530,10,50);
  wall9=createSprite(700,575,10,50);
  wall10=createSprite(800,530,10,50);
  wall11=createSprite(900,575,10,50);
  wall12=createSprite(340,500,100,10);
  wall13=createSprite(800,530,10,50);
  wall14=createSprite(50,420,100,10);
  wall15=createSprite(100,455,10,80);
  wall16=createSprite(200,370,10,100);
  wall17=createSprite(100,320,200,10);
  wall18=createSprite(300,420,210,10);
  wall19=createSprite(405,375,10,100);
  wall20=createSprite(500,440,10,110);
  wall21=createSprite(500,330,200,10);
  wall22=createSprite(600,380,10,110);
  wall23=createSprite(800,440,410,10);
  wall24=createSprite(200,250,10,200);
  wall25=createSprite(150,320,110,10);
  wall26=createSprite(100,255,10,120);
  wall27=createSprite(200,30,10,110);
  wall28=createSprite(300,250,10,350);
  wall29=createSprite(300,10,10,30);
  wall30=createSprite(950,470,10,50);
  wall31=createSprite(60,36,10,70);
  wall32=createSprite(30,75,70,10);
  wall33=createSprite(405,300,10,270);
  wall34=createSprite(405,50,10,100);
  wall35=createSprite(505,300,10,50);
  wall36=createSprite(450,100,100,10);
  wall37=createSprite(500,150,10,109);
  wall38=createSprite(680,204,370,10);
  wall39=createSprite(680,270,370,10);
  wall40=createSprite(865,240,10,150);
  wall41=createSprite(905,240,10,150);
  wall42=createSprite(960,240,10,150);
  wall43=createSprite(915,320,100,10);
  wall44=createSprite(935,160,150,10);
  wall45=createSprite(935,320,150,10);
  glitchWall1=createSprite(865,180,10,50);
  glitchWall2=createSprite(865,300,10,50);
 
  
 
 onButton=createSprite(950,550,30,30);
 onButton2=createSprite(900,470,30,30);
 onButton3=createSprite(360,400,30,30);
 police=createSprite(250,100,30,30);
 police.addImage(policeImg);
 police.scale=0.2;   
 police.velocityY=-7
 //blueKey=createSprite(50,450,30,30)




 onButton.addImage("off",offButtonImg);
 onButton.addImage("on",onButtonImg);
 onButton2.addImage("off",offButtonImg);
onButton2.addImage("on",onButtonImg);
onButton3.addImage("off",offButtonImg);
onButton3.addImage("on",onButtonImg);
//blueKey.addImage()

chor=createSprite(150,550,30,30);
 chor.addImage(chorImg);
 chor.scale=0.07;
 onButton.scale=0.1
 onButton2.scale=0.1
 onButton3.scale=0.1
 
 
  wall1.shapeColor=color('black');
  wall2.shapeColor=color('black');
  wall3.shapeColor=color('black');
  wall4.shapeColor=color('black');
  wall5.shapeColor=color('black');
  wall6.shapeColor=color('black');
  wall7.shapeColor=color('black');
  wall8.shapeColor=color('black');
  wall9.shapeColor=color('black');
  wall10.shapeColor=color('black');
  wall11.shapeColor=color('black');
  wall12.shapeColor=color('black');
  wall13.shapeColor=color('black');
  wall14.shapeColor=color('black');
  wall15.shapeColor=color('black');
  wall16.shapeColor=color('black');
  wall17.shapeColor=color('black');
  wall18.shapeColor=color('black');
  wall19.shapeColor=color('black');
  wall20.shapeColor=color('black');
  wall21.shapeColor=color('black');
  wall22.shapeColor=color('black');
  wall23.shapeColor=color('black');
  wall24.shapeColor=color('black');
  wall25.shapeColor=color('black');
  wall26.shapeColor=color('black');
  wall27.shapeColor=color('black');
  wall28.shapeColor=color('black');
  wall29.shapeColor=color('black');
  wall30.shapeColor=color('black');
  wall31.shapeColor=color('black');
  wall32.shapeColor=color('black');
  wall33.shapeColor=color('black');
  wall34.shapeColor=color('black');
  wall35.shapeColor=color('black');
  wall36.shapeColor=color('black');
  wall37.shapeColor=color('black');
  wall38.shapeColor=color('black');
  wall39.shapeColor=color('black');
  wall40.shapeColor=color('black');
  wall41.shapeColor=color('black');
  wall42.shapeColor=color('black');
  wall43.shapeColor=color('black');
  wall44.shapeColor=color('black');
  wall45.shapeColor=color('black');
  glitchWall1.shapeColor=color('black');
  glitchWall2.shapeColor=color('black');
 



  createCanvas(1000,600);
  
}

function draw() {


  background(wallPaper);  
  if(gameState===0){
   textSize(30);
   fill(0);
    

   
    text('PRESS SPACE TO START',570,100);


    chor.x=150;
    chor.y=550
  }
  if(keyDown('space')&&gameState===0){
gameState=1;
  }
 
  if (keyDown('w')&&gameState===1){
    chor.y-=5;
  }
  else if (keyDown('a')&&gameState===1){
    chor.x-=5;
  }
  else if (keyDown('s')&&gameState===1){
    chor.y+=5;
  }
  else if (keyDown('d')&&gameState===1){
    chor.x+=5;
  }


if(chor.isTouching(wall1)||chor.isTouching(wall2)||chor.isTouching(wall3)||chor.isTouching(wall4)||
chor.isTouching(wall5)||chor.isTouching(wall6)||chor.isTouching(wall7)||
chor.isTouching(wall8)||chor.isTouching(wall9)||chor.isTouching(wall10)||
chor.isTouching(wall11)||chor.isTouching(wall12)||chor.isTouching(wall13)||
chor.isTouching(wall14)||chor.isTouching(wall15)||chor.isTouching(wall16)||
chor.isTouching(wall17)||chor.isTouching(wall18)||chor.isTouching(wall19)||
chor.isTouching(wall20)||chor.isTouching(wall21)|chor.isTouching(wall22)||
chor.isTouching(wall23)||chor.isTouching(wall24)||
chor.isTouching(wall25)||chor.isTouching(wall26)||chor.isTouching(wall27)||chor.isTouching(wall28)||
chor.isTouching(wall29)||chor.isTouching(wall30)||chor.isTouching(wall31)||chor.isTouching(wall32)||
chor.isTouching(wall33)||chor.isTouching(wall34)||chor.isTouching(wall35)||chor.isTouching(wall36)||
chor.isTouching(wall37)||chor.isTouching(wall38)||chor.isTouching(wall39)||chor.isTouching(wall40)||
chor.isTouching(wall41)||chor.isTouching(wall42)||chor.isTouching(wall43)||chor.isTouching(wall44)||
chor.isTouching(wall45))
{
 /* chor.collide(wall1);
  chor.collide(wall2);
  chor.collide(wall3);
  chor.collide(wall4);
  chor.collide(wall5);
  chor.collide(wall6);
  chor.collide(wall7);
  chor.collide(wall8);
  chor.collide(wall9);
  chor.collide(wall10);
  chor.collide(wall11);
  chor.collide(wall12);
  chor.collide(wall13);
  chor.collide(wall14);
  chor.collide(wall15);
  chor.collide(wall16);
  chor.collide(wall17);
  chor.collide(wall18);
  chor.collide(wall19);
  chor.collide(wall20);
  chor.collide(wall21);
  chor.collide(wall22);
  chor.collide(wall23);
  chor.collide(wall24);
  chor.collide(wall25);
  chor.collide(wall26);
  chor.collide(wall27);
  chor.collide(wall28);
  chor.collide(wall29);
  chor.collide(wall30);
  chor.collide(wall31);
  chor.collide(wall32);
  chor.collide(wall33);
  chor.collide(wall34);
  chor.collide(wall35);
  chor.collide(wall36);
  chor.collide(wall37);
  chor.collide(wall38);
  chor.collide(wall39);
  chor.collide(wall40);
  chor.collide(wall41);
  chor.collide(wall42);
  chor.collide(wall43);
  chor.collide(wall44);
  chor.collide(wall45);*/
  
}
if(chor.isTouching(onButton)){
  onButton.changeAnimation("on",onButtonImg)
  wall12.velocityX=-3
}
if(chor.isTouching(onButton2)){
  onButton2.changeAnimation("on",onButtonImg)
  wall14.velocityX=-3
  wall17.velocityX=-3
  gameState=1;
  blueKey.visible=true;
  fakeBlueKey.visible=true;


  //spawnBlueKey();

}

if(chor.isTouching(blueKey)){
  wall40.velocityY=-5;
  fakeBlueKey.destroy()
}

if(chor.isTouching(fakeBlueKey)||chor.isTouching(fakeGreenKey)){
  gameState=0
}
if(chor.isTouching(police)){
  gameState=0
}
if(chor.isTouching(greenKey)){
  wall41.velocityY=-5;
  fakeGreenKey.destroy()
}
if(chor.isTouching(redKey)){
 wall42.velocityY=-5;
}
if(chor.isTouching(diamonds)){
  text('YOU ARE A PRO ROBBER',800,100)
}

console.log(chor.isTouching(fakeBlueKey));
console.log(chor.isTouching(blueKey));

if(chor.isTouching(onButton3)){
  onButton3.changeAnimation("on",onButtonImg)
  wall30.velocityY=3
  wall32.velocityX=-3
  greenKey.visible=true;
  fakeGreenKey.visible=true;
  redKey.visible=true
 
}


edges=createEdgeSprites();
chor.collide(edges[0]);
chor.collide(edges[1])
chor.collide(edges[2])
chor.collide(edges[3])
police.bounceOff(edges[0]);
police.bounceOff(edges[1])
police.bounceOff(edges[2])
police.bounceOff(edges[3])
police.bounceOff(wall18)

  drawSprites();
}

function spawnBlueKey(){
 
//if(gameState===1) {
  
 
 
  /*var rand=Math.round (random(1,2));
 
if (rand===1){
    blueKey.x=50;
    blueKey.y=450;
    fakeBlueKey.x=150;
    fakeBlueKey.y=270
  } else if(rand===2){
    blueKey.x=150;
    blueKey.y=270;
    fakeBlueKey.x=50;
    fakeBlueKey.y=450;

  }*/ 
 blueKey.depth=chor.depth;
 fakeBlueKey.depth=chor.depth;
 //console.log(blueKey.depth);
 //console.log(fakeBlueKey.depth);
 
  
//}
if (chor.isTouching(blueKey)){
  gameState=2
  console.log(gameState)
} 

}





