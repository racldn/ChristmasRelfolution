class Game {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d");
		this.elves = [];
		this.bullets = [];
		this.weapons = [];

		this.toobarElements = [];
		var mouseX = 0;
		var mouseY = 0;
		var that = this;

		//this.addToolbarElements('./assets/snowFlake.png');
		this.addToolbarElements('./assets/gbm.png');

		this.score = 0
		this.inGame = true;
		this.dragDrop = new DragDrop(this);
		this.elfSound = new Sound("assets/audio/elfChomp.wav", .7);
		this.GBMSound = new Sound("assets/audio/GBMSqueal.mp3", .7)
		this.bulletHit = new Sound("assets/audio/bulletHit.mp3", .7)
		this.elfUh = new Sound("assets/audio/elfUh.wav", .7)
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
		if (Math.floor(Math.random() * 5) < 4) {
			this.elves.push(new Elf(this, './assets/red-elf.png', 2, 3));
		} else {
			this.elves.push(new Elf(this, './assets/green-elf.png', 4, 2));
		}
	}

	addToolbarElements(imgSrc) {
		console.log(imgSrc);
		this.toobarElements.push(new Toolbar(this, imgSrc));
	}

	addBullet(bullet) {
		this.bullets.push(bullet);
	}

	addWeapon(weapon) {
		this.weapons.push(weapon);
	}

	addObstacle() {
		this.weapons.push(new Obstacle(100, 100, this));
	}

	endGame() {
		let canvasBG = document.getElementById("canvas-bg");
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		setBG('bg_main.jpg', canvasBG)

		document.fonts.load('10pt "Lobster"').then(() => {
			renderText(`You've renegotiated ${this.score} contracts!`, this.canvas)
		});

		this.music.stop();
	}
}


