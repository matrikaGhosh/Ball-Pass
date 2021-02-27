

function setup() {
  
  createCanvas(400, 400);
  
}

function draw() {
  background('lightBlue')
  fill('red')
  rect(mouseX,340,100,20); 
  rect(200,200,20,20)
  textSize(20)
  fill('blue')
  text('Ball Hit',180,30)
  if(keyDown('space')){
    ball.velocityX = 2
    ball.velocityY = 3
    
  }
}