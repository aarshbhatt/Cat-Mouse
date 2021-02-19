var bg, bgImage;
var cat, cat_sitting,cat_running,cat_standing;
var mouse, mouse1, mouse_scared,mouse2;



function preload() {
    //load the images here
    bgImage = loadImage("images/garden.png");

    cat_sitting = loadAnimation("images/cat1.png");
    cat_running = loadAnimation("images/cat2.png","images/cat3.png");
    cat_standing = loadAnimation("images/cat4.png")

    mouse1 = loadAnimation("images/mouse1.png");
    mouse_scared = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouse2 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    bg = createSprite(500,400,10,10);
    bg.addImage(bgImage);

    cat = createSprite(750,650,800,800);   
    cat.scale = 0.1;
    cat.addAnimation("running", cat_running);
    cat.addAnimation("sitting",cat_sitting);
    cat.addAnimation("Cstanding", cat_standing);
   // cat.debug = true ;
    cat.setCollider("rectangle",0,0,800,800)

    mouse = createSprite(150,650,50,50);
    mouse.addAnimation("standing", mouse1);
    mouse.addAnimation("scared", mouse_scared)
    mouse.addAnimation("teasing",mouse2);
    mouse.scale = 0.1
    //mouse.debug = true; 
    //mouse.setCollider("rectangle",0,0,800,800);
    
}

function draw() {

    background("white");
    //Write condition here to evalute if tom and jerry collide
    cat.changeAnimation("sitting", cat_sitting)
      
    keyPressed();
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       cat.changeAnimation("Cstanding", cat_standing);
       cat.velocityX = 0;
       mouse.changeAnimation("teasing", mouse2);
    }
    
     

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5
      cat.changeAnimation("running",cat_running)
      mouse.changeAnimation("scared", mouse_scared)
  } 
}

function isTouching(obj1, obj2){

  if(obj1.x - obj2.x <= obj1.width/2 + obj2.width/2 && 
    obj2.x - obj1.x <= obj1.width/2 + obj2.width/2 &&
    obj2.y - obj1.y <= obj1.height/2 + obj2.height/2 &&
    obj1.y - obj2.y <= obj1.height/2 + obj2.height/2  ){
    return true
   
 } else {
     return false
 }
}
