var bullet1,bullet2,bullet3,bullet4;
var bullet1w,bullet2w,bullet3w,bullet4w,

  createCanvas(1500,750);
  bullet1=createSprite(50, 150, 50, 10);
  bullet2=createSprite(50, 300, 50, 10);
  bullet3=createSprite(50, 450, 50, 10);
  bullet4=createSprite(50, 600, 50, 10);
  
  bullet1w=createSprite(1480,150,10,50);
  bullet2w=createSprite(1480,300,10,50);
  bullet3w=createSprite(1480,450,10,50);
  bullet4w=createSprite(1480,600,10,50);


function draw(){
  background(0,0,0);  
  bullet1.velocityX=random(-1,-6);
  bullet2.velocityX=random(-1,-6);
  bullet3.velocityX=random(-1,-6);
  bullet4.velocityX=random(-1,-6);
 
 if(bullet1.velocityX>-3){
  bullet1.shapeColour="red";
 }
 if(bullet1.velocityX=-3){
  bullet1.shapeColour="orange";
 }
if(bullet1.velocityX<-3){
  bullet1.shapeColour="green";
 }
  
 if(bullet2.velocityX>-3){
  bullet2.shapeColour="red";
   }
   if(bullet2.velocityX=-3){
    bullet2.shapeColour="orange";
   }
  if(bullet2.velocityX<-3){
    bullet2.shapeColour="green";
   }
 
   if(bullet3.velocityX>-3){
    bullet3.shapeColour="red";
     }
     if(bullet3.velocityX=-3){
      bullet3.shapeColour="orange";
     }
    if(bullet3.velocityX<-3){
      bullet3.shapeColour="green";
     }
 
     if(bullet.velocityX>-3){
      bullet4.shapeColour="red";
       }
       if(bullet4.velocityX=-3){
      bullet4.shapeColour="orange";
       }
      if(bullet4.velocityX<-3){
        bullet4.shapeColour="green";
       }
       bullet1.collide(bullet1w);
       bullet2.collide(bullet2w);
       bullet3.collide(bullet3w);
       bullet4.collide(bullet4w);
 
 drawSprites();
}