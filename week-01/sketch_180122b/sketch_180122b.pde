paddle padL;
paddle padR;
ball b;
boolean up, down;
PImage weasley;
PImage hogwarts;

//images: https://www.pixilart.com/art/welcome-to-hogwarts-39f2a3d408
//http://piq.codeus.net/picture/225285/fred_and_george_weasley_students_


void setup() {
  size(520, 520);
  b = new ball();
  padL = new paddle(true);
  padR = new paddle(false);
  weasley = loadImage("weasley.png");
  hogwarts = loadImage("hogwarts.png");
}

void draw() {
  background(28);
  image(hogwarts,10, 280);
  padR.paddleMovement();
  padL.paddleMovement();
  b.ballMovement();
  b.collisionCheckL(padL);
  b.collisionCheckR(padR);
  b.checkBallEdges();
  textSize(10);
  textAlign(LEFT);
  text("Quidditch Pong", width/2-40, 30);
}





void keyPressed() {
  if (key == CODED) {
    if (keyCode == UP) {
      up = true;
    }
    if (keyCode == DOWN) {
      down = true;
    }
  }
}

void keyReleased() {
  if (key == CODED) {
    if (keyCode == UP) {
      up = false;
    }
    if (keyCode == DOWN) {
      down = false;
    }
  }
}