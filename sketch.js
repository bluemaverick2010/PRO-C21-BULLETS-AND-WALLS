function setup() {
  createCanvas(700,300);
  
  lane1=createSprite(350, 100, 700, 5);
  lane2=createSprite(350, 200, 700, 5);
  
  bullet1=createSprite(10, 50, 30, 10);
  bullet2=createSprite(10, 150, 30, 10);
  bullet3=createSprite(10, 250, 30, 10);
  
  wall1=createSprite(690, 50, 10, 80);
  wall2=createSprite(690, 150, 10, 80);
  wall3=createSprite(690, 250, 10, 80);

  wall1thickness=random(22,83);
  wall2thickness=random(22,83);
  wall3thickness=random(22,83);

  bullet1weight=random(30,52);
  bullet2weight=random(30,52);
  bullet3weight=random(30,52);

  bullet1speed=random(223,321);
  bullet2speed=random(223,321);
  bullet3speed=random(223,321);
}

function draw() {
  background(0,0,0); 
  drawSprites();
  bullet1.velocityX=bullet1speed;
  bullet2.velocityX=bullet2speed;
  bullet3.velocityX=bullet3speed;

  if(bullet1.isTouching(wall1))
    {
    bullet1.velocityX=0;
    var damageWall1=(0.5*bullet1weight*bullet1speed*bullet1speed)/(wall1thickness*wall1thickness*wall1thickness);
      if(damageWall1>10)
      {
      wall1.shapeColor=color(255,0,0);  
      }
      if(damageWall1<=10)
      {
      wall1.shapeColor=color(0,255,0);  
      }
    }

    if(bullet2.isTouching(wall2))
    {
    bullet2.velocityX=0;
    var damageWall2=(0.5*bullet2weight*bullet2speed*bullet2speed)/(wall2thickness*wall2thickness*wall2thickness);
      if(damageWall2>10)
      {
      wall2.shapeColor=color(255,0,0);  
      }
      if(damageWall2<=10)
      {
      wall2.shapeColor=color(0,255,0);  
      }
    }
    
    if(bullet3.isTouching(wall3))
    {
    bullet3.velocityX=0;
    var damageWall3=(0.5*bullet3weight*bullet3speed*bullet3speed)/(wall3thickness*wall3thickness*wall3thickness);
      if(damageWall3>10)
      {
      wall3.shapeColor=color(255,0,0);  
      }
      if(damageWall3<=10)
      {
      wall3.shapeColor=color(0,255,0);  
      }
    }  
}