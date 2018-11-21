class DragDrop {
  constructor(game) {
    this.game = game
    this.canvasOffset = canvas.getBoundingClientRect();
    this.selection;
    this.dragOffsetX = 0;
    this.dragOffsetY = 0;
    this.mouse = { x: 0, y: 0 };
    this.init()
  }

  init() {
    this.game.canvas.addEventListener('mousedown', (event) => {
      if(this.selection) this.restoreLastPosition();

      this.game.weapons.reverse().some((weapon) => {
        if (weapon.contains(this.mouse.x, this.mouse.y)) {
          this.dragOffsetX = this.mouse.x - weapon.x;
          this.dragOffsetY = this.mouse.y - weapon.y;
          this.selection = weapon;
          this.selection.isActive = false;
        }
      });
    }, true);

    this.game.canvas.addEventListener('mousemove', (event) => {
      this.updateMousePos(event);
      if (this.selection) {
        this.selection.x = this.mouse.x - this.dragOffsetX;
        this.selection.y = this.mouse.y - this.dragOffsetY;
      }
    }, true);

    this.game.canvas.addEventListener('mouseup', (event) => {
      if (this.isOccupied(this.mouse, this.weapons)) {
        this.restoreLastPosition()
      } else {
        let tile = this.findTile();
        this.selection.y = tile.y;
        this.selection.x = tile.x < 100 ? tile.x + 100 : tile.x;
        
        this.selection.lastPosition = {
          x: this.selection.x,
          y: this.selection.y
        }
      }
      this.selection.isActive = true;
      this.selection = null;
    }, true);
  }

  updateMousePos(event) {
    this.mouse.x = event.pageX - this.canvasOffset.top
    this.mouse.y = event.pageY - this.canvasOffset.left
  }

  isOccupied() {
    let tile = this.findTile();
    return this.game.weapons.reverse().some((weapon) => weapon.x == tile.x && weapon.y == tile.y);
  }

  findTile() {
    return {
      x: Math.floor(this.mouse.x / 100) * 100,
      y: Math.floor(this.mouse.y / 100) * 100
    };
  }

  restoreLastPosition() {
    this.selection.x = this.selection.lastPosition.x;
    this.selection.y = this.selection.lastPosition.y;
  };
}
