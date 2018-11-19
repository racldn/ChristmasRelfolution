class DragDrop {
  constructor(canvas, weapons) {
    this.canvas = canvas;
    this.weapons = weapons;
    this.canvasOffset = canvas.getBoundingClientRect();
    this.selection;
    this.dragging = false;
    this.dragOffsetX = 0;
    this.dragOffsetY = 0;
    this.mouse = { x: 0, y: 0 };
    this.init()
  }

  init() {
    this.canvas.addEventListener('mousedown', (e) => {
      if(this.selection) {
        this.restoreLastPosition()
      }
      this.weapons.reverse().some((weapon) => {
        if (weapon.contains(this.mouse.x, this.mouse.y)) {
          this.dragOffsetX = this.mouse.x - weapon.x;
          this.dragOffsetY = this.mouse.y - weapon.y;
          this.dragging = true;
          this.selection = weapon;
          this.selection.isActive = false;
        }
      });
    }, true);

    this.canvas.addEventListener('mousemove', (event) => {
      this.updateMousePos(event);
      if (this.dragging) {
        this.selection.x = this.mouse.x - this.dragOffsetX;
        this.selection.y = this.mouse.y - this.dragOffsetY;
      }
    }, true);

    this.canvas.addEventListener('mouseup', (event) => {
      if (this.isOccupied(this.mouse, this.weapons)) {
        this.restoreLastPosition()
        this.dragging = false;
      } else {
        let tile = this.findTile();
        this.dragging = false;
        if (tile.x < 100) {
          this.selection.x = tile.x + 100;
          this.selection.y = tile.y;
        } else {
          this.selection.x = tile.x;
          this.selection.y = tile.y;
        }
        this.selection.lastPosition = {
          x: this.selection.x,
          y: this.selection.y
        }
      }
      this.selection.isActive = true;
      this.selection = null;
    }, true);
  }

  findTile() {
    return {
      x: Math.floor(this.mouse.x / 100) * 100,
      y: Math.floor(this.mouse.y / 100) * 100
    };
  }

  updateMousePos(event) {
    this.mouse.x = event.pageX - this.canvasOffset.top
    this.mouse.y = event.pageY - this.canvasOffset.left
  }

  isOccupied() {
    let mouseX = Math.floor(this.mouse.x / 100) * 100;
    let mouseY = Math.floor(this.mouse.y / 100) * 100;
    return this.weapons.reverse().some((weapon) => weapon.x == mouseX && weapon.y == mouseY);
  }

  restoreLastPosition() {
    this.selection.x = this.selection.lastPosition.x;
    this.selection.y = this.selection.lastPosition.y;
  };
}  