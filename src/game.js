
class Game {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d");
		this.elves = [];
		this.bullets = [];
		this.weapons = [];

		this.dragDrop = new DragDrop(this.canvas, this.weapons);
		this.elfSound = new Sound("assets/audio/elfChomp.wav");
		this.GBMSound = new Sound("assets/audio/GBMSqueal.mp3")
        this.elementCounter = 0;    //counter to maintain all drawn elements
   
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

	addElf(elf) {
        // const elf = new Elf(this);
        elf.id = "elf-" + this.elementCounter++; // this creates unique id for each elf (Which means it is easy to remove perticular elf)
		this.elves.push(elf);
	}

	addWeapon(weapon) {
        weapon.id = "weapon-" + this.elementCounter++; // same as above unique ids
		this.weapons.push(weapon);
	}
	
	addBullet(bullet) {
        bullet.id = "bullet-" + this.elementCounter++; // this creates unique id for each bullet(Which means it is easy to remove perticular bullet)
        this.bullets.push(bullet);
	}
    
    removeBullet(bullet){
        this.bullets.splice(this.bullets.findIndex(b => b.id === bullet.id), 1); // arrow is short form of `this.bullets.findIndex(function(b){ return b.id === bullet.id})`
	}
	
	ElfHitsWeapon(elf, elfSound) { // passing it elfSound so it can play it before deleting the GBM from the screen
		for (var i = 0; i < this.weapons.length; i++) {
			var wpn = this.weapons[i];
			if (elf.x + 50 >= wpn.x && elf.x <= wpn.x + wpn.w && elf.y >= wpn.y && elf.y <= wpn.y + wpn.h && this.dragDrop.selection != wpn) {
				this.elfSound.play();
                this.GBMSound.play();
                clearTimeout(wpn.timer); // clears the timer of weapon
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