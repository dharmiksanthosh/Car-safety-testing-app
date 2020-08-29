var car,wall;
var speed,weight;

function setup() {
  createCanvas(1500,400);

  speed = random(50,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";
  car.velocityX = speed;

  wall = createSprite(1500,200,60,200);
  wall.shapeColor = rgb(80,80,80);

}

function draw() {
  background(0); 

if(isTouching(car,wall)){

  var deformation = (0.5 * weight * speed * speed)/22500;
  car.velocityX = 0;

  if(deformation<100){

    car.shapeColor = "green";
  }
  if(deformation>100&&deformation<180){

    car.shapeColor = rgb(230,230,0);
  }
  if (deformation>180) {
    
    car.shapeColor = "red";
  }
}

  drawSprites();
}
