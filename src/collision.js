collision = {
	bulletHitsSide: (bullet) => {
		if(bullet.x <= 50) game.bullets.splice(game.bullets.indexOf(bullet), 1)
	},

	elfHitsWeapon: (elf) => {
		game.weapons.forEach((weapon) => {
			if(elf.x + elf.spriteWidth >= weapon.x && elf.x + elf.spriteWidth <= weapon.x + weapon.w && elf.y == weapon.y) {
				game.weapons.splice(game.weapons.indexOf(weapon), 1);
			}
		});
	},

	elfHitsBullet: (elf) => {
		game.bullets.forEach((bullet) => {
			if(elf.x + elf.spriteWidth >= bullet.x && elf.x <= bullet.x && elf.y == bullet.y) {
				game.elves.splice(game.elves.indexOf(elf), 1);
				game.bullets.splice(game.bullets.indexOf(bullet), 1);
			}
		});
	}
}