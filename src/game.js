
class Game {
	constructor() {
		this.canvas = document.getElementById("canvas");
		this.ctx = this.canvas.getContext("2d");
		this.elves = [];    //current elves
		this.bullets = [];  //current bullets
		this.weapons = [];  //current weapons

		this.dragDrop = new DragDrop(this.canvas, this.weapons);
		this.elfSound = new Sound("assets/audio/elfChomp.wav");
		this.GBMSound = new Sound("assets/audio/GBMSqueal.mp3")


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

		this.updateWeaponsArray();

		requestAnimationFrame(() => {
			this.update();
		});
	}

	addElf() {
        const elf = new Elf(this);
        elf.id = "elf-" + this.elves.length;
        elf.idx = this.elves.length;
		this.elves.push(elf);
    }
    
    removeBullet(bullet, weapon){
        this.bullets.splice(this.bullets.findIndex(b => b.id === bullet.id), 1); // arrow is short form of `this.bullets.findIndex(function(b){ return b.id === bullet.id})`
    }

	addBullet(bullet, weaponObj) {
        var index = this.weapons.indexOf(weaponObj);
        if(index != -1){
            this.weapons[index]["bullets"] = bullet;
            bullet.id = "bullet-" + this.bullets.length;
            bullet.idx = this.bullets.length;
            this.bullets.push(bullet);
        }
	}

	addWeapon(weapon) {
        weapon.id = "weapon-" + this.weapons.length;
        weapon.idx = this.weapons.length;
		this.weapons.push(weapon);
	}
  
	ElfHitsWeapon(elf, elfSound) { // passing it elfSound so it can play it before deleting the GBM from the screen
		for (var i = 0; i < this.weapons.length; i++) {
			var wpn = this.weapons[i];
			if (elf.x + 50 >= wpn.x && elf.x <= wpn.x + wpn.w && elf.y >= wpn.y && elf.y <= wpn.y + wpn.h && this.dragDrop.selection != wpn) {
				this.elfSound.play();
				this.GBMSound.play();
				this.weapons.splice(i, 1); // Remove the enemy that the missile hit
			}
		}
	}
	
	updateWeaponsArray() {
		for (var i = 0; i < this.elves.length; i++) {
			var elf = this.elves[i];
			this.ElfHitsWeapon(elf);
		}
	}
}

const game = new Game();
game.addWeapon(new Weapon(700, 0, game));
game.addWeapon(new Weapon(700, 100, game));
game.addWeapon(new Weapon(700, 200, game));
game.addWeapon(new Weapon(700, 300, game));

setInterval(() => {
	game.addElf();
}, 5000);