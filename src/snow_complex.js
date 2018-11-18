// borrowed from https://designers.hubspot.com/blog/how-to-implement-an-animated-snow-effect-using-html5-canvas-and-javascript

var snow = (function createSnow() {
    let canvas = document.getElementById('canvas-snow');
    let ctx = canvas.getContext("2d");
    let maxFlakes = 255; 
    let flakes = [];
    let angle = 0;

    for (var i = 0; i < maxFlakes; i++) {
      flakes.push({
        x: Math.random() * canvas.width, //spawn x
        y: Math.random() * canvas.height, //spawn y
        r: Math.random() * 4 + 1, //radius
        v: Math.random() * maxFlakes //velocity
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

  //Function to move the snowflakes
  //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
  function update() {
    angle += 0.01;
    for (let i = 0; i < maxFlakes; i++) {
      let flake = flakes[i];
      //Updating X and Y coordinates
      //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
      //Every particle has its own velocity which can be used to make the downward movement different for each flake
      //Lets make it more random by adding in the radius
      flake.y += Math.cos(angle + flake.v) + 1 + flake.r / 2;
      flake.x += Math.sin(angle) * 2;

      //Sending flakes back from the top when it exits
      //Lets make it a bit more organic and let flakes enter from the left and right also.
      if (flake.x > canvas.width + 5 || flake.x < -5 || flake.y > canvas.height) {
        if (i % 3 > 0) //66.67% of the flakes
        {
          flakes[i] = {
            x: Math.random() * canvas.width,
            y: -10,
            r: flake.r,
            v: flake.v
          };
        }
        else {
          //If the flake is exiting from the right
          if (Math.sin(angle) > 0) {
            //Enter from the left
            flakes[i] = {
              x: -5,
              y: Math.random() * canvas.height,
              r: flake.r,
              v: flake.v
            };
          }
          else {
            //Enter from the right
            flakes[i] = {
              x: canvas.width + 5,
              y: Math.random() * canvas.height,
              r: flake.r,
              v: flake.v
            };
          }
        }
      }
    }
  }

  return {draw}
})();
