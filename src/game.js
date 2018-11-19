class Game {
	constructor() {
		this.canvas = document.getElementById("canvas");
		this.ctx = this.canvas.getContext("2d");
		this.elves = [];
		this.bullets = [];
		this.weapons = [];
		var mouseX = 0;
		var mouseY = 0;
		var that = this;
	

		this.dragDrop = new DragDrop(this.canvas, this.weapons);
		this.elfSound = new Sound("assets/audio/elfChomp.wav");
		this.GBMSound = new Sound("assets/audio/GBMSqueal.mp3")
		//this.btnAddGbm = new Button(0, 0, 110, 110);
		var buttonX = 0;
		var buttonY = 0;
		var buttonW = 100;
		var buttonH = 100;
		//this.ctx.fillStyle = 'red';
		var img = new Image();
		img.src = ('./assets/gbm.png');
		
		img.onload = function() {
			//that.ctx.drawImage(img, 0, 0);	
			var pattern = that.ctx.createPattern(img, 'no-repeat');
			that.ctx.fillStyle = pattern;
			that.ctx.fillRect(buttonX, buttonY, buttonW, buttonH);
		  };
		//const pattern = ctx.createPatttern(img);
		
		//this.ctx.fillRect(this.btnAddGbm.xLeft, this.btnAddGbm.yTop, this.btnAddGbm.xRight, this.btnAddGbm.yBottom);
		//this.ctx.fillStyle = pattern;

		this.canvas.addEventListener('click', function(event) {
			// mouseX = event.pageX - this.canvas.offsetLeft;
			// mouseY = event.pageY - this.canvas.offsetTop;		
		if(event.x> buttonX && event.x < buttonX + buttonW && event.y > buttonY && event.y < buttonY + buttonH) {
				console.log("its clicked");
				
				  
				 that.addWeapon(new Weapon(1, 0, that));
				//that.addWeapon(new Weapon(200, 0, that));
				
				// that.addWeapon(new Weapon(300, 0, that));
			}
		}, true);
			
		  
		this.update();
	}

	update() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		var img = new Image();
		img.src = ('./assets/gbm.png');

		var pattern = this.ctx.createPattern(img, 'no-repeat');
			this.ctx.fillStyle = pattern;
			this.ctx.fillRect(0,0,100,100);

		//this.ctx.drawImage(img, 0, 0);	
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
