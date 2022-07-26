window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = 400,
    height = canvas.height = 220,
    xcenter = 200,
    ycenter = 110,
    radius = 0,
    radiusmax = 100,
    start_angle1 = 0,
    start_angle2 = 0;

  function toRadians(angle) {
    return angle * (Math.PI / 180);
  }

  function draw(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  }

  function drawWheel(xc, yc, start_angle, count, rad) {
    var inc = 360 / count;
    for (var angle = start_angle; angle < start_angle + 180; angle += inc) {
      var x = Math.cos(toRadians(angle)) * rad;
      var y = Math.sin(toRadians(angle)) * rad;
      draw(xc - x, yc - y, xc + x, yc + y);
    }
  }

  function update() {
    start_angle1 += 0.1;
    start_angle2 -= 0.1;
    if(radius<radiusmax) radius++;
    context.clearRect(0, 0, width, height);
    drawWheel(xcenter, ycenter, start_angle1, 40, radius);
    drawWheel(xcenter, ycenter, start_angle2, 40, radius);
    requestAnimationFrame(update);
  }


  update();
};
