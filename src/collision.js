collision = {
	bulletHitsSide: (bullet, game) => {
		if(bullet.x <= 0) game.bullets.splice(game.bullets.indexOf(bullet), 1)
	},

	elfHitsWeapon: (elf, game) => {
		game.weapons.forEach((weapon) => {
			if (weapon.type == 'elf') {
				if(elf.x + elf.w >= weapon.x && elf.x + elf.w <= weapon.x + weapon.w && elf.y == weapon.y) {
					elf.sound.hasAttacked.play();
					weapon.sound.takenDamage.play();
					weapon.hitpoints -= elf.attackPower;
					if(weapon.hitpoints <= 0) {
						game.weapons.splice(game.weapons.indexOf(weapon), 1);
					}
				}
			} else if (weapon.type == 'pudding') {
				if (elf.x + elf.w >= weapon.x && elf.x + elf.w <= weapon.x + weapon.w && elf.y == weapon.y) {
          console.log('this');
          elf.dx = 1;
				}
			}
		});
	},

	elfHitsBullet: (elf, game) => {
		game.bullets.forEach((bullet) => {
			if(elf.x + elf.w >= bullet.x + 50 && elf.x <= bullet.x + 50 && elf.y == bullet.y) {
        elf.sound.takenDamage.play();
				bullet.sound.hasAttacked.play();
				elf.hitpoints -= bullet.attackPower;
				elf.opacity -= elf.opacity / 3;
				game.bullets.splice(game.bullets.indexOf(bullet), 1);
				if(elf.hitpoints <= 0) {
					game.elves.splice(game.elves.indexOf(elf), 1);
					game.score++;
				} 
			}
		});
	},

	elfHitsRightWall: (elf, game) => {
		if (elf.x > 750) game.inGame = false;
	},
}