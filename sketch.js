var screen=0;



function preload() {
bg=loadImage("egg.jpg");
ck=loadImage("hen.jpg");
}


function setup(){
createCanvas(windowWidth,windowHeight);
}

function draw(){
 background(ck);   
 if(screen==0){
 startScreen()    
 }
}

function startScreen(){
 background(bg);
 fill("black") ;
   textAlign(CENTER);
   textSize(50);
   text("WELCOME TO THE EGG CATCHER GAME",width/2,height/4);
fill("red");
text("click to start",width/2,height/2);
}