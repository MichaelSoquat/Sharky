class Fish extends MovableObject {
    world;
    energy = 2;
    intervalOfEnemies;
    y = 350;
    x = 300 + Math.random() * 4000;
    speed = 0.02 + Math.random() * 0.5;

    /**
     * This funtion is for animating each fish
     */

    animate() {

        this.intervalOfEnemies = setInterval(() => {
            if (this.isDead()) {
                setTimeout(() => {
                    clearInterval(this.intervalOfEnemies)
                }, 300);
                this.playAnimation(this.IMAGES_DEAD_FISH);
                setInterval(() => {
                    this.y -= 2;
                }, 50)
            } else if (!this.isDead()) {
                this.playAnimation(this.IMAGES_SWIMMING_FISH);
                this.swimLeft();
            }

        }, 100);
    }

    /**
     * This function is for setting the value of the normal fishes
     */

    setValueNormalFishes() {
        this.speed = 0.2 + Math.random() * 4;
        this.y = 0 + Math.random() * 400;
        this.x = 300 + Math.random() * 4000;
    }
}