collision = {
	bulletHitsSide: (bullet, game) => {
		if(bullet.x <= 0) game.bullets.splice(game.bullets.indexOf(bullet), 1)
	},

	elfHitsWeapon: (elf, game) => {
		game.weapons.forEach((weapon) => {
			if(!weapon.isActive) return; // skip iteration if weapon is not active

			if (weapon.type == 'elf') {
				if(elf.x + elf.spriteWidth >= weapon.x && elf.x + elf.spriteWidth <= weapon.x + weapon.w && elf.y == weapon.y) {
					elf.sound.hasHit.play();
					weapon.sound.hasBeenHit.play();
					weapon.hitpoints -= elf.attackPower;
					if(weapon.hitpoints <= 0) {
						game.weapons.splice(game.weapons.indexOf(weapon), 1);
					}
				}
			} else if (weapon.type == 'pudding') {
				if (elf.x + elf.spriteWidth >= weapon.x + 60 && elf.x + elf.spriteWidth <= weapon.x + weapon.w && elf.y == weapon.y) {
					elf.dx /= 2;
					game.weapons.splice(game.weapons.indexOf(weapon), 1);
				}
			}
		});
	},

	elfHitsBullet: (elf, game) => {
		game.bullets.forEach((bullet) => {
			if(elf.x + elf.spriteWidth >= bullet.x + 50 && elf.x <= bullet.x + 50 && elf.y == bullet.y) {
        elf.sound.hasBeenHit.play();
				bullet.sound.hasHit.play();
				elf.hitpoints -= bullet.attackPower;
				elf.opacity -= elf.opacity / 10;
				game.bullets.splice(game.bullets.indexOf(bullet), 1);
				if(elf.hitpoints <= 0) {
					game.elves.splice(game.elves.indexOf(elf), 1);
					game.christmasSpirit += 20;
					game.score++;
				}
			}
		});
	},

	elfHitsRightWall: (elf, game) => {
		if (elf.x > 750) game.inGame = false;
	},
}
