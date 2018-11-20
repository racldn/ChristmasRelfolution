class Game {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d");
		this.elves = [];
		this.bullets = [];
		this.weapons = [];

		this.dragDrop = new DragDrop(this);
		this.elfSound = new Sound("assets/audio/elfChomp.wav");
		this.GBMSound = new Sound("assets/audio/GBMSqueal.mp3")
		this.bulletHit = new Sound("assets/audio/BulletHit.mp3")
		this.elfUh = new Sound("assets/audio/elfUh.wav")

		let img = new Image();
		img.src = ("./assets/bg_main.jpg");
		img.onload = function () {
			ctx.drawImage(img, 0, 0, 800, 600, 0, 0, 800, 600)
		}  
		this.update();
	}

	update() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		this.weapons.forEach((weapon) => {
			weapon.update(this.ctx);
		});
		this.bullets.forEach((bullet) => {
			bullet.update(this.ctx);
			collision.bulletHitsSide(bullet, this);
		});
		this.elves.forEach((elf) => {
			elf.update(this.ctx);
			collision.elfHitsWeapon(elf, this);
			collision.elfHitsBullet(elf, this);
		});

		requestAnimationFrame(() => {
			this.update();
		});
	}

	addElf(elf) {
		// const elf = new Elf(this);
		this.elves.push(elf);
	}

	addBullet(bullet) {
  	this.bullets.push(bullet);
	}

	addWeapon(weapon) {
		this.weapons.push(weapon);
	}
}
