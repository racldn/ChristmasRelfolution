// borrowed from https://designers.hubspot.com/blog/how-to-implement-an-animated-snow-effect-using-html5-canvas-and-javascript

var snow = (function createSnow() {
  let canvas = document.getElementById('canvas-snow');
  let ctx = canvas.getContext("2d");
  let maxFlakes = 255;
  let flakes = [];

    for (var i = 0; i < maxFlakes; i++) {
      flakes.push({
        x: Math.random() * canvas.width, //spawn x
        y: Math.random() * canvas.height, //spawn y
        r: Math.random() * 4 + 1, //radius
        v: Math.random() * 4 + 1 //velocity
      });
    }
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";

    ctx.beginPath();
    for (let i = 0; i < maxFlakes; i++) {
      let flake = flakes[i];
      ctx.moveTo(flake.x, flake.y);
      ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    update();
  }

  //Function to move the snowflakes - positions them back at the top when they reach the bottom
  function update() {
    for (let i = 0; i < maxFlakes; i++) {
      let flake = flakes[i];

      if (flake.y > canvas.height) {
        flakes[i] = {
          x: Math.random() * canvas.width,
          y: -10,
          r: flake.r,
          v: flake.v
        }
      } else {
        flake.y += flake.v + 1 + flake.r / 2;
      }  
    }  
  }

  return {
    draw: draw
  }
})();
