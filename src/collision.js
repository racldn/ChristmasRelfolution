collision = {
	bulletHitsSide: (bullet, game) => {
		if(bullet.x <= 50) game.bullets.splice(game.bullets.indexOf(bullet), 1)
	},

	elfHitsWeapon: (elf, game) => {
		game.weapons.forEach((weapon) => {
			if(elf.x + elf.spriteWidth >= weapon.x && elf.x + elf.spriteWidth <= weapon.x + weapon.w && elf.y == weapon.y) {
				game.elfSound.play();
				game.GBMSound.play();
				game.weapons.splice(game.weapons.indexOf(weapon), 1);
			}
		});
	},

	elfHitsBullet: (elf, game) => {
		game.bullets.forEach((bullet) => {
			if(elf.x + elf.spriteWidth >= bullet.x + 50 && elf.x <= bullet.x + 50 && elf.y == bullet.y) {
				game.elfUh.play();
				game.bulletHit.play();
				game.elves.splice(game.elves.indexOf(elf), 1);
				game.bullets.splice(game.bullets.indexOf(bullet), 1);
				game.score++;
			}
		});
	},

	elfHitsRightWall: (elf, game) => {
		if (elf.x > 750) game.inGame = false;
	}
}