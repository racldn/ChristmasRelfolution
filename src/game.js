class Game {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d");
		this.elves = [];
		this.bullets = [];
		this.weapons = [];
		this.christmasSpirit = 150;
		this.toobarElements = [];
		this.addToolbarElements('./assets/gbm_small.png',0, 600, 'gingerbreadMan');
		this.addToolbarElements('./assets/christmas-pudding-small.png',100, 600, 'pudding');
		this.addToolbarElements('./assets/christmasSpirit.png', 670, 625, 'christmasSpirit');
		this.score = 0;
		this.inGame = true;
		this.dragDrop = new DragDrop(this);
		this.music = new Sound("assets/audio/ChristmasDay.mp3", 0.05)
		this.update();
	}

	update() {
		this.music.play();

		if (this.inGame) {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

			this.toobarElements.forEach((element) => {
				element.draw();
			});
			this.weapons.forEach((weapon) => {
				weapon.update(this.ctx);
			});
			this.bullets.forEach((bullet) => {
				bullet.update(this.ctx);
				collision.bulletHitsSide(bullet, this);
			});
			this.elves.forEach((elf) => {
				elf.update(this.ctx);
				collision.elfHitsRightWall(elf, this);
				collision.elfHitsWeapon(elf, this);
				collision.elfHitsBullet(elf, this);
			});

			requestAnimationFrame(() => {
				this.update();
			});
		} else {
			this.endGame()
		}
	}

	addElf() {
		if(Math.floor(Math.random() * 5) < 4) {
			this.elves.push(new Elf(this, './assets/red-elf.png', 2, 1));

		} else {
			this.elves.push(new Elf(this, './assets/green-elf.png', 4, 1));
		}
	}

	addToolbarElements(imgSrc, x, y, type) {
		this.toobarElements.push(new Toolbar(this, imgSrc, x, y, type));
	}

	addBullet(bullet) {
		this.bullets.push(bullet);
	}

	addWeapon(weapon) {
		this.dragDrop.addSelection(weapon)
		this.weapons.push(weapon)
		console.log(this.weapons);
	}

	endGame() {
		let canvasBG = document.getElementById("canvas-bg");
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		setBG('bg_main.jpg', canvasBG)

		document.fonts.load('10pt "Lobster"').then(() => {
			renderText(`You've renegotiated ${this.score} contracts!`, this.canvas)
		});

		this.music.stop();
	};
}
