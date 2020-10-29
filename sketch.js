var playerPaddle,computerpaddle,pong;



function setup(){
  createCanvas(400,400);
  //player Paddle
  playerPaddle = new Paddle();
  computerpaddle=new Paddle();
  pong=new Paddle();
}

function draw() {
  //set background to white
  background("white");
  
  playerPaddle.xPosition = 390;
  playerPaddle.yPosition = mouseY;
  
  playerPaddle.display();
  
  //computer paddle
  computerpaddle.xPosition=0
  computerpaddle.yPosition=160
  
  computerpaddle.display();
  
  //draw the ball
  pong.xPosition=200;
  pong.yPosition=200
  pong.width=10
  pong.height=10
  
  pong.display();
  

}