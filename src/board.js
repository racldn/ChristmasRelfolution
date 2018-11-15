
class Board{
constructor(canvas) {
  this.canvas = canvas;
  this.width = canvas.width;
  this.height = canvas.height;
  this.ctx = canvas.getContext('2d');
  var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
  if (document.defaultView && document.defaultView.getComputedStyle) {
    this.stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10)      || 0;
    this.stylePaddingTop  = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10)       || 0;
    this.styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10)  || 0;
    this.styleBorderTop   = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10)   || 0;
  }
  var html = document.body.parentNode;
  this.htmlTop = html.offsetTop;
  this.htmlLeft = html.offsetLeft;

  this.valid = false;
  this.weapons = [];
  this.dragging = false;
  this.selection = null;
  this.dragoffx = 0;
  this.dragoffy = 0;

  var myState = this;

  canvas.addEventListener('selectstart', function(e) { e.preventDefault(); return false; }, false);

  canvas.addEventListener('mousedown', function(e) {
    var mouse = myState.getMouse(e);
    var mx = mouse.x;
    var my = mouse.y;
    var weapons = myState.weapons;
    var l = weapons.length;
    for (var i = l-1; i >= 0; i--) {
      if (weapons[i].contains(mx, my)) {
        var mySel = weapons[i];
        myState.dragoffx = mx - mySel.x;
        myState.dragoffy = my - mySel.y;
        myState.dragging = true;
        myState.selection = mySel;
        myState.valid = false;
        return;
      }
    }
    if (myState.selection) {
      myState.selection = null;
      myState.valid = false;
    }
  }, true);
  canvas.addEventListener('mousemove', function(e) {
    if (myState.dragging){
      var mouse = myState.getMouse(e);
      myState.selection.x = mouse.x - myState.dragoffx;
      myState.selection.y = mouse.y - myState.dragoffy;
      myState.valid = false;
    }
  }, true);
  canvas.addEventListener('mouseup', function(e) {
    var mouse = myState.getMouse(e);
    var occupied = myState.checkOccupied(mouse);
    if (occupied == true) {
      myState.selection.x = myState.selection.position.x;
      myState.selection.y = myState.selection.position.y;
      myState.dragging = false;
    }else {
    var center = myState.findCenter(mouse);
    myState.dragging = false;
    myState.selection.x = center.x - (myState.selection.w / 2);
    myState.selection.y = center.y - (myState.selection.h / 2);
    myState.selection.position = {x: myState.selection.x, y: myState.selection.y}
  }
  myState.valid = false;
  }, true);

  this.selectionColor = '#CC0000';
  this.selectionWidth = 2;
  this.interval = 30;
  setInterval(function() { myState.draw(); }, myState.interval);
}

checkOccupied (mouse) {
  var mx = parseInt(mouse.x.toString()[0]);
  var my = parseInt(mouse.y.toString()[0]);
  var weapons = this.weapons;
  var l = weapons.length;
  for (var i = l-1; i >= 0; i--) {
    var mySel = weapons[i];
    var gridX = parseInt(mySel.position.x.toString()[0]);
    var gridY = parseInt(mySel.position.y.toString()[0]);
    if (gridX == mx && gridY == my) {
      return true;
    }
  }
}

findCenter (mouse) {
  var mx = parseInt(mouse.x.toString()[0]);
  var my = parseInt(mouse.y.toString()[0]);
  mx = (mx * 100) + 50;
  my = (my * 100) + 50;
  return {x: mx, y: my};
}

addWeapon (weapon) {
  this.weapons.push(weapon);
  this.valid = false;
}

clear () {
  this.ctx.clearRect(0, 0, this.width, this.height);
}

draw () {
  if (!this.valid) {
    var ctx = this.ctx;
    var weapons = this.weapons;
    this.clear();
    var l = weapons.length;
    for (var i = 0; i < l; i++) {
      var weapon = weapons[i];
      if (weapon.x > this.width || weapon.y > this.height ||
          weapon.x + weapon.w < 0 || weapon.y + weapon.h < 0) continue;
      weapons[i].draw(ctx);
    }

    if (this.selection != null) {
      ctx.strokeStyle = this.selectionColor;
      ctx.lineWidth = this.selectionWidth;
      var mySel = this.selection;
      ctx.strokeRect(mySel.x,mySel.y,mySel.w,mySel.h);
    }

    this.valid = true;
  }
}

getMouse (e) {
  var element = this.canvas, offsetX = 0, offsetY = 0, mx, my;
  if (element.offsetParent !== undefined) {
    do {
      offsetX += element.offsetLeft;
      offsetY += element.offsetTop;
    } while ((element = element.offsetParent));
  }
  offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
  offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;

  mx = e.pageX - offsetX;
  my = e.pageY - offsetY;

  return {x: mx, y: my};
}
}
function init() {
  var board = new Board(document.getElementById('canvas'));
  board.addWeapon(new Weapon(40,40,50,50)); // The default is gray
  board.addWeapon(new Weapon(60,140,40,60, 'lightskyblue'));
  // Lets make some partially transparent
  board.addWeapon(new Weapon(80,150,60,30, 'rgba(127, 255, 212, .5)'));
  board.addWeapon(new Weapon(125,80,30,80, 'rgba(245, 222, 179, .7)'));
}

init();
