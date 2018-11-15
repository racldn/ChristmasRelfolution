class Game {
	constructor() {
		this.canvas = document.getElementById("canvas");
		this.ctx = this.canvas.getContext("2d");
		this.elves = [];
		this.bullets = [];
		this.weapons = [];
    this.canvasOffset = canvas.getBoundingClientRect();
    this.selection;
    this.dragging = false;
		this.dragOffsetX = 0;
    this.dragOffsetY = 0;
    this.mouse = { x: 0, y: 0 };

		this.canvas.addEventListener('mousedown', (e) => {      
      this.weapons.reverse().some((weapon) => {
        if(weapon.contains(this.mouse.x, this.mouse.y)) {
          this.dragOffsetX = this.mouse.x - weapon.x;
          this.dragOffsetY = this.mouse.y - weapon.y;
          this.dragging = true;
          this.selection = weapon;
        }
      })
    }, true);
    
		this.canvas.addEventListener('mousemove', (event) => {
      this.updateMousePos(event);

			if (this.dragging) {
				this.selection.x = this.mouse.x - this.dragOffsetX;
        this.selection.y = this.mouse.y - this.dragOffsetY;
			}
    }, true);
    
		this.canvas.addEventListener('mouseup', (event) => {
			if (this.isOccupied()) {
				this.selection.x = this.selection.lastPosition.x;
        this.selection.y = this.selection.lastPosition.y;
        this.dragging = false;
			} else {
        let tile = this.findTile();
        this.dragging = false;
				this.selection.x = tile.x;
        this.selection.y = tile.y;
				this.selection.lastPosition = {
					x: this.selection.x,
					y: this.selection.y
        }
			}
    }, true);

		this.update();
	}

	update() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		this.elves.forEach((elf) => {
			elf.update(this.ctx);
		});
		this.weapons.forEach((weapon) => {
			weapon.update(this.ctx);
		});
		this.bullets.forEach((bullet) => {
			bullet.update(this.ctx);
    });

		requestAnimationFrame(() => {
			this.update()
		});
  }
  
	addElf() {
		this.elves.push(new Elf());
	}

	addWeapon(weapon) {
		this.weapons.push(weapon);
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
}

const game = new Game();
game.addWeapon(new Weapon(0, 0));
game.addWeapon(new Weapon(100, 100));
game.addWeapon(new Weapon(0, 200));
game.addWeapon(new Weapon(100, 300));

setInterval(() => {
	game.addElf(document.getElementById('canvas'));
}, 3000);