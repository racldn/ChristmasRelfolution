class Collision {

elfIsHitByBullet(elf, bullet) {

  elf.center.x + 50 >= bullet.center.x - 50
}

WeaponIsHitByElf(elf, weapon) {

  elf.centre.x + 50 >= weapon.center.x - 50

}

// collisions detection in here. update function in game class - 


bulletHitsElf(bullet, bulletIndex) { //passing in the bullet and its position within the bullet array
  for(var i = 0; i < elves.length; ++i){ //iterate through the elves array
    if (elfIsHitByBullet){
      this.bullets.splice(this.bullets[bulletIndex],1); //should remove that bullet from the bullet array - perhaps called by a remove function within game class
      elves.splice(i,1); //should remove the elf hit by the bullet - perhaps called by a remove function within game class
      // eventually create new elf function for HP reduction logic should be in here. If elf hit by bullet = true then remove 10 HP.
    }
  }
}

ElfHitsWeapon(elf, elfIndex) {
  for(var i = 0; i < weapons.length; ++i){ //iterate through the weapons array
    if (WeaponIsHitByElf){
      weapons.splice(i,1); //should remove the weapon hit by the elf - perhaps called by a remove function within game class
    }
  }
}




}



}