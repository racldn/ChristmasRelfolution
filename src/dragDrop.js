class DragDrop {
  constructor(game) {
    this.game = game
    this.canvasOffset = this.game.canvas.getBoundingClientRect();
    this.selection;
    this.dragOffsetX = 0;
    this.dragOffsetY = 0;
    this.mouse = { x: 0, y: 0 };
    this.init()
  }

  init() {
    this.game.canvas.addEventListener('mousemove', (event) => {
      this.updateMousePos(event);
      if (this.selection) {
        this.selection.x = this.mouse.x - this.dragOffsetX;
        this.selection.y = this.mouse.y - this.dragOffsetY;
      }
    }, true);

    this.game.canvas.addEventListener('mouseup', (event) => {
      if (this.isOccupied(this.mouse, this.weapons)) return;
      if (this.mouse.y > 600) return;
      let tile = this.findTile();

      this.selection.y = tile.y;
      this.selection.x = tile.x < 100 ? tile.x + 100 : tile.x;
      this.selection.isActive = true;
      this.selection = null;
    }, true);
  }

  addSelection(obj) {
    if(this.selection) return false;
    this.selection = obj;
    this.dragOffsetX = this.mouse.x - obj.x;
    this.dragOffsetY = this.mouse.y - obj.y;
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
}
