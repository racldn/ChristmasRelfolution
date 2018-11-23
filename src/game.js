class Game {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d");
		this.elves = [];
		this.bullets = [];
		this.weapons = [];
		this.christmasSpirit = 150;
		this.toolbarElements = [];
		this.spawnChance = 4;
    this.spawnSpeed = 1500; // This only counts for the FIRST spawn. Every time after it's set inside initElves()
    this.firstSpawn = true;
		this.score = 0;
		this.inGame = true;
		this.dragDrop = new DragDrop(this);
		this.music = new Sound("assets/audio/JingleBellRock.mp3", 0.4, true)
		this.initElves();
		this.update();
	}

	initElves() {
		setTimeout(() => {
			if (this.inGame) {
				this.addElf();
			}
    }, this.spawnSpeed);

    if (this.firstSpawn) {
      this.spawnSpeed = 4700;
      this.firstSpawn = false;
    }
	}

	update() {
		this.music.play();

		if (this.inGame) {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

			this.toolbarElements.forEach((element) => {
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

			setTimeout(() => {
				this.update();
			}, 1000 / 60);
		} else {
			this.endGame()
		}
	}

	addToolbarElements(imgSrc, x, y) {
		this.toolbarElements.push(new ToolbarElement(this, imgSrc, x, y));
	}

	addElf() {
		if(this.score >= 5 && this.score < 7 ) {
			this.spawnSpeed = 4300;
		} else if(this.score >= 7 && this.score < 10) {
			this.spawnSpeed = 3900;
		} else if(this.score >= 10 && this.socre <= 14) {
      this.spawnChance = 3;
			this.spawnSpeed = 3400;
		} else if(this.score >= 14 && this.socre < 19) {
      this.spawnChance = 2;
      this.spawnSpeed = 3100;
    } else if(this.score > 19) {
      this.spawnSpeed = 2450;
    }
		if(Math.floor(Math.random() * 5) < this.spawnChance) {
			this.elves.push(new Elf(this, './assets/red-elf.png', 6, 0.5));
		} else {
			this.elves.push(new Elf(this, './assets/green-elf.png', 11, 0.3));
    }
    
    this.initElves();
	}

	removeElf(elf) {
		this.elves.splice(this.elves.indexOf(elf), 1);
	};

	addBullet(bullet) {
		this.bullets.push(bullet);
	}

	removeBullet(bullet) {
		this.bullets.splice(this.bullets.indexOf(bullet), 1);
	};

	addWeapon(weapon) {
		this.weapons.push(weapon)
	};

	removeWeapon(weapon) {
		this.weapons.splice(this.weapons.indexOf(weapon), 1);
	};

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
