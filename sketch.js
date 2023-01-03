var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bg , bullet , cloud , coin , enemy1 , enemy2 , gameover , ground ,
mario1 , mario2 , mariodead , mariohead , pipes , text , score ;

function preload(){
mario_running = loadAnimation("mario1.png" , "mario2.png");
enemy_running = loadAnimation("enemy1.png" , "enemy2.png");
ground = loadImage("ground.png");
pipes = loadImage("pipes.png");
text1 = loadImage("text.png");
gameOver = loadImage("gameover.png") ;
bg = loadImage("bg.png") 
mariodead = loadImage("mariodead.png")
}

function setup() {
  createCanvas(600, 200);

  mario  = createSprite(50,180,20,50);
  mario.addAnimation("mario_running", mario_running);
  mario.scale = 0.5;
mario.addImage("marioDead" , mariodead) ;
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",ground);
  ground.x = ground.width /2;

  gameover = createSprite(300,100);
  gameover.addImage(gameOver);

  text = createSprite(300,140);
  text.addImage(text1);
  gameOver.scale = 0.5;

 

  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  score = 0;

}

function draw() {
  background(180);
 text("Score: "+ score, 500,50);
 
 if(gameState === PLAY){
  gameOver.visible = false

 //move the ground
 ground.velocityX = -4;
 //scoring
 score = score + Math.round(frameCount/60);
 
 if (ground.x < 0){
   ground.x = ground.width/2;
 }
 if(keyDown("space")&& trex.y >= 100) {
  mario.velocityY = -13;
}

trex.velocityY = trex.velocityY + 0.8
 spawnPipe()

 if(pipeGroup.isTouching(mario)){
  gameState = END;
}

}
else if (gameState === END) {
  ground.velocityX = 0;
  gameOver.visible = true;
 pipeGroup.setVelocityXEach(0);
  
 mario.velocityY = 0 ;
  mario.changeAnimation ("collided", trex_collided) ;
   cloudsGroup.setLifetimeEach(-1) ;
   obstaclesGroup.setLifetimeEach(-1) ;
 }
 
 drawSprites()


}

function spawnPipe() {
  //write code here to spawn the clouds
   if (frameCount % 60 === 0) {
     pipe = createSprite(600,180,40,10);
    pipe.y = Math.round(random(10,60));
    pipe.addImage(cloudImage);
    pipe.scale = 0.5;
    pipe.velocityX = -3;
    
     //assign lifetime to the variable
     pipe.lifetime = 134;
    
    //adjust the depth
    pipe.depth = trex.depth;
    mario.depth = trex.depth + 1;
    
    //adding cloud to the group
   pipeGroup.add(pipe);
    }
  

  }

/*
  
  
  
 

    
   
    //spawn obstacles on the ground
    spawnObstacles();
    
    if(obstaclesGroup.isTouching(trex)){
        gameState = END;
    }
  }
   else if (gameState === END) {
    ground.velocityX = 0;
    gameOver.visible = true;
  restart.visible = true;
   obstaclesGroup.setVelocityXEach(0);
   cloudsGroup.setVelocityXEach(0); 
   trex.velocityY = 0 ;
     trex.changeAnimation ("collided", trex_collided) ;
     cloudsGroup.setLifetimeEach(-1) ;
     obstaclesGroup.setLifetimeEach(-1) ;
   }
  
 
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  
  
  drawSprites();
}

function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(400,165,10,40);
   obstacle.velocityX = -6;
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}


}*/