$(window).load(function () {
  let c = document.getElementById("canvas");
  let ctx = c.getContext("2d");
  let RADIUS = 300;
  let num_sections = 6; //set this for number of divisions

  function drawCircle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
  }
  function drawAngledLine(x, y, length, angle) {
    const radians = (angle / 180) * Math.PI;
    let endX = x + length * Math.cos(radians);
    let endY = y - length * Math.sin(radians);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(endX, endY);
    ctx.closePath();
    ctx.stroke();
     

  }
  //draw circle outline
  drawCircle(320, 320, RADIUS);
  //loop the number of sections to draw each
  for (i = 1; i <= num_sections; i++) {
    drawAngledLine(320, 320, RADIUS, i * (360 / num_sections));
  }
});
co