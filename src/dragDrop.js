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

    this.game.canvas.addEventListener('mousedown', (event) => {
      if(this.game.dragDrop.selection) return;
      if(!(this.mouse.y >= 600 && this.mouse.y <= 700)) return; // not in toolbar!

      let weapon;

      
      if (this.mouse.x >= 0 && this.mouse.x < 100) {
        if(this.game.christmasSpirit < 50) return;
        weapon = new GingerbreadMan(0, 600, this.game);
      } else if (this.mouse.x >= 100 && this.mouse.x < 200) {
        if(this.game.christmasSpirit < 10) return;
        weapon = new ChristmasPudding(100, 600, this.game);   
      } else {
        return; // RETURN IF 'NULL' IS SELECTED - WILL CRASH IF REMOVED
      }

      this.game.christmasSpirit -= weapon.cost;     
      this.game.addWeapon(weapon);
      this.selection = weapon;
      this.dragOffsetX = this.mouse.x - weapon.x;
      this.dragOffsetY = this.mouse.y - weapon.y;
    }, true);
  }

  updateMousePos(event) {
    this.mouse.x = (event.clientX - this.canvasOffset.left) / (this.canvasOffset.right - this.canvasOffset.left) * canvas.width;
    this.mouse.y = (event.clientY - this.canvasOffset.top) / (this.canvasOffset.bottom - this.canvasOffset.top) * canvas.height;
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
