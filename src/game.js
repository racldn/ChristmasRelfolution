class Game {
	constructor() {
		this.canvas = document.getElementById("canvas");
		this.ctx = this.canvas.getContext("2d");
		this.elves = [];
		this.bullets = [];
		this.weapons = [];
		this.inGame = true;
		this.dragDrop = new DragDrop(this.canvas, this.weapons);
		this.elfSound = new Sound("assets/audio/elfChomp.wav");
		this.GBMSound = new Sound("assets/audio/GBMSqueal.mp3")

		this.update();
	}

	update() {
		if (this.inGame) {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

			this.weapons.forEach((weapon) => {
				weapon.update();
			});
			this.bullets.forEach((bullet) => {
				bullet.update();
				collision.bulletHitsSide(bullet, this);
			});
			this.elves.forEach((elf) => {
				elf.update();
				collision.elfHitsRightWall(elf, this);
				collision.elfHitsWeapon(elf, this);
				collision.elfHitsBullet(elf, this);
			});

			requestAnimationFrame(() => {
				this.update();
			});
		} else {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

			this.ctx.beginPath()
			this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
			this.ctx.fillStyle = 'pink'
			this.ctx.fill();

			this.ctx.fillStyle = 'white'
			this.ctx.font = "100px Arial";
			this.ctx.fillText("You lose!", 400, 300);
		}
	}

	addElf() {
		this.elves.push(new Elf(this));
	}

	addBullet(bullet) {
  	this.bullets.push(bullet);
	}

	addWeapon(weapon) {
		this.weapons.push(weapon);
	}
}
