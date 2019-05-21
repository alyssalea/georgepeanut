function preload(){
  peanut = loadImage("assets/peanut.png")
}

function setup(){
  createCanvas(1000,1000)
  background(50)
  frameRate (60)
}

function draw() {
   
  //winkyface
   fill (255,166,77)
   noStroke()
  ellipse (700,700,150)
  //eye
  fill (0)
  ellipse (660,680,50)
  fill(random(1,255),random(1,255),random(1,255))
  ellipse (660,680,45)
  fill(0,0,255)
  ellipse(660,680,40)
  fill(random(1,255),random(1,255),random(1,255))
  ellipse (660,680,35)
  fill(0,255,255)
  ellipse(660,680,30)
  fill(random(1,255),random(1,255),random(1,255))
  ellipse (660,680,25)
  fill(128,255,0)
  ellipse(660,680,20)
  fill(random(1,255),random(1,255),random(1,255))
  ellipse (660,680,15)
  fill(255,128,0)
  ellipse(660,680,10)
  fill(random(1,255),random(1,255),random(1,255))
  ellipse (660,680,5)
  
  
  
  //Line 1
  strokeWeight(5)
  stroke(6)
  line (700,680,740,670)
  //Line 2
  line (700,680,740,680)
  //Line 2
  line (700,680,740,690)
  //side smile
  noFill();
  arc(700, 720, 50, 30, 0, HALF_PI);
  
  //Necc
   fill (255,166,77)
   strokeWeight(0)
  rect(670,770,60,70)
  //Body
  fill (255,166,77)
   strokeWeight(0)
   rect(640,790,140,170,60)
   //line
   
    //hat
    fill(1,1,1)
    ellipse(700,630,170,15)
    rect(650,500,100,125)
    
   strokeWeight(30)
   stroke(255,166,77)
   //rect(830,520,750,20)
   //line 2
   stroke(255,166,77)
   strokeWeight(30)
  
//Backdrop
 // noStroke(0)
  //fill(4,89,226)
  //rect(270,80,350,170)
  //words
  noStroke(0)
  textAlign(CENTER)
  textSize(120)
  fill(232,186,48)
  //text('Planters ',500,200)
  image(peanut,270,80);
  
  textAlign(CENTER)
  textSize(50)
   fill(145,120,7)
  text('Sweet',150,500)
  
   textAlign(CENTER)
  textSize(50)
  fill(145,120,7)
  text('and',280,500)
  
 textAlign(CENTER)
  textSize(50)
  fill(145,120,7)
  text('Crunchy',440,500)
  
  textAlign(CENTER)
  textSize(90)
  fill(random(1,255),random(1,255),random(1,255))
  text('Peanuts',mouseX,mouseY)
  
   if(keyIsPressed=== true){
    background(50);
  }
  
}