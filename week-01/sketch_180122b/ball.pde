class ball
{
  PVector ballLoc = new PVector(width *.5, height * .5);
  float r = 10;
  PVector ballSp;

  ball()
  {
    float angle = random(-PI/2,PI/2);
    ballSp = new PVector(5*cos(angle),5*sin(angle));
  }
  void ballMovement()
  {

    noStroke();
    fill(255,223,0);
    rect(ballLoc.x, ballLoc.y, r, r);
    ballLoc.x -= ballSp.x;
    ballLoc.y -= ballSp.y;
  }

  void checkBallEdges()
  {
    if (ballLoc.y < 0 || ballLoc.y > height  )
    {
      ballSp.y *= -1;
    }

    if (ballLoc.x > width || ballLoc.x < 0)
    {
      ballLoc = new PVector(width *.5, height * .5);
    }
  }


  void collisionCheckL(paddle p)
  {
    if (ballLoc.y < p.padLoc.y + p.h/2 && ballLoc.y > p.padLoc.y - p.h/2 && ballLoc.x - r < p.padLoc.x + p.w/2)
    {
      ballSp.x *=-1;
      //ballSp.y *= -1;
    }
  }
  void collisionCheckR(paddle p)
  {
    if (ballLoc.y < p.padLoc.y + p.h/2 && ballLoc.y > p.padLoc.y - p.h/2 && ballLoc.x + r > p.padLoc.x + p.w/2)
    {
      ballSp.x *=-1;
      //ballSp.y *= -1;
    }
  }
}