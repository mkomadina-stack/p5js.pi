// https://editor.p5js.org/
// https://p5js.org/reference/


// demonstrate PI by using probabilities of random points in and out of circle

  circleX = 200;
  circleY = 200;
  circleDiameter = 400;
  count = 0;
  inside = 0;
  outside = 0;

  function setup() {
    background(220);
    createCanvas(600, 600);

    rect(0,0,circleDiameter, circleDiameter);
    circle(circleX, circleY, circleDiameter);

    textCount = createInput();
    textCount.position(10, 450);
    textCount.size(350);

    textInside = createInput();
    textInside.position(10, 480);
    textInside.size(350);

    textOutside = createInput();
    textOutside.position(10, 510);
    textOutside.size(350);


    textRatio = createInput();
    textRatio.position(10, 540);
    textRatio.size(350);
  }

  function draw() {
    // background(220);
    x = random(circleDiameter);
    y = random(circleDiameter);

    if (withinCircle(x,y, circleDiameter/2)) {
      stroke(255,0,0);
      print("true");
      inside += 1;
    }
    else {
      stroke(0,0,0);
      print("false");
      outside += 1;
    }

    // point(x,y);
    circle(x, y, 2);

    ratio = (inside/count)*4;
    textCount.value("number of points: " + count);
    textInside.value("number inside: " + inside);
    textOutside.value("number outside: " + outside);
    textRatio.value("ratio 4*(inside/total): " + ratio);

    count += 1;



  }

  function withinCircle(x, y, r) {
    // check if point x,y is within circle of radius r
    // https://stackoverflow.com/questions/481144/equation-for-testing-if-a-point-is-inside-a-circle

    dx = abs(x-circleX);
    dy = abs(y-circleY);

    d = sqrt(sq(dx) + sq(dy));

    if (sqrt(sq(dx) + sq(dy)) > r) {
      return false;
    }
    else {
      return true;
    }

  }


