var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music=loadSound("music.mp3")
}



function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3=createSprite(510,580,200,30);
    block3.shapeColor="yellow";

    block4=createSprite(720,580,200,30);
    block4.shapeColor="green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor="black";
    ball.velocityY=7;
    ball.velocityX=2;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    function bounceOff(ball,block1) {
        if (ball.x - block1.x < block1.width/2 + ball.width/2
        && block1.x - ball.x < block1.width/2 + ball.width/2) {
        ball.velocityX = ball.velocityX * (-1);
        
      }
      if (ball.y - block1.y < block1.height/2 + ball.height/2
        && block1.y - ball.y < block1.height/2 +ball .height/2) {
          ball.velocityY = ball.velocityY * (-1);
      }
      }

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor="blue"
        music.loop();
    }



    if(block2.isTouching(ball)&&ball.bounceOff(block2)){
        ball.shapeColor = "orange";

        
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball)&&ball.bounceOff(block3)){
      ball.shapeColor = "yellow";
     ball.velocityX=0;
     ball.velocityY=0;

      //write code to stop music
      
  }

    //write code to bounce off ball from the block4
    if(block4.isTouching(ball)&&ball.bounceOff(block4)){
      ball.shapeColor = "green";
      
  }
    drawSprites();
} 
