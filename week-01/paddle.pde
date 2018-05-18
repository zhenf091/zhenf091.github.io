class paddle
{

  PVector padLoc = new PVector (10, height * .5 );
  float w = 10;
  float h = 50;
  
  paddle( boolean side)
  {
   padLoc.x = side ? w : width - w;
  }
  void paddleMovement()
  {
    imageMode(CENTER);
    image(weasley, padLoc.x, constrain(padLoc.y,h/2,height -h/2), 75, 100);
    if (up)
    {
      padLoc.y-= 5;
    }
    if (down)
    {
      padLoc.y+=5;
    }
  }
}