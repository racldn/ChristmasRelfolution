class Game {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d");
		this.elves = [];
		this.bullets = [];
		this.weapons = [];
		this.christmasSpirit = 150;
		this.toobarElements = [];
		this.spawn = 4;
		this.addToolbarElements('./assets/gbm_small.png',0, 600);
		this.addToolbarElements('./assets/christmas-pudding-small.png',100, 600);
		this.addToolbarElements('./assets/christmasSpirit.png', 610, 612);
		this.score = 0;
		this.inGame = true;
		this.dragDrop = new DragDrop(this);
		this.music = new Sound("assets/audio/JingleBellRock.mp3", 0.5)
		this.initElves();
		this.update();
	}

	initElves() {
		setInterval(() => {
			if (this.inGame) {
				this.addElf();
			}
		}, 5500);
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
		if(this.score >= 10 && this.score < 20 ) {
			this.spawn = 3;
		} else if(this.score >= 15 && this.score < 20) {
			this.spawn = 2;
		}
		console.log(this.spawn);
		if(Math.floor(Math.random() * 5) < this.spawn) {
			this.elves.push(new Elf(this, './assets/red-elf.png', 6, 0.5));

		} else {
			this.elves.push(new Elf(this, './assets/green-elf.png', 11, 0.3));
		}
	}

	addToolbarElements(imgSrc, x, y) {
		this.toobarElements.push(new Toolbar(this, imgSrc, x, y));
	}

	addBullet(bullet) {
		this.bullets.push(bullet);
	}

	addWeapon(weapon) {
		this.weapons.push(weapon)
	}

	endGame() {
		let canvasBG = document.getElementById("canvas-bg");
		let ctxBG = canvasBG.getContext('2d');
		ctxBG.clearRect(0, 0, canvasBG.width, canvasBG.height);
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.font = "30px Lobster";
		setBG('bg_main.png', canvasBG);
		setTB('toolbar_bg.png', canvasBG);


		if (this.score == 1) {
			renderText(`You've renegotiated ${this.score} contract!`, this.canvas);
		} else {
			renderText(`You've renegotiated ${this.score} contracts!`, this.canvas);
		};
		this.music.stop();
	};
}
