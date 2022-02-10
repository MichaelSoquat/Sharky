class MovableObject extends DrawableObject {
    x;
    y;
    width = 100;
    height = 100;
    energy = 100;
    bossEnergy = 100;
    speedX = 0;
    coins = 0;
    lastHit = 0;
    lastHitBoss = 0;
    poison = 0;
    speed = 10;
    otherDirection = false;
    bossIsDead = false;
    characterIsDead = false;
    


    swimLeft() {
        this.x -= this.speed;
    }

    swimUp() {
        this.y -= this.speed;
    }

    playAnimation(images) {

        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;

    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    };

    collectCoins() {
        this.coins += 10;
        if (this.coins > 100) {
            this.coins = 100;
        }
    }

    collectPoisons() {
        this.poison += 5;
        if (this.poison > 100) {
            this.poison = 100;
        }
    }

    hit() {
        this.energy -= 0.3;
        if (this.energy < 1) {
            this.energy = 0;
            this.characterIsDead = true;
        } else {
            this.lastHit = new Date().getTime();
        }
    };

    hitBoss() {
        this.bossEnergy -= -0.3;
        if (this.bossEnergy <= 0) {
            this.bossIsDead = true;
            this.bossEnergy = 0;

        }
        else {
            this.lastHitBoss = new Date().getTime();
        }
    };

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 0.5;
    }

    bossIsHurt() {
        let timePassed = new Date().getTime() - this.lastHitBoss;
        timePassed = timePassed / 1000;
        return timePassed < 0.5;
    }
}