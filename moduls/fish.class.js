class Fish extends MovableObject {
    world;
    energy = 2;

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIMMING_FISH);
            this.swimLeft();
            this.swimLeft();
        }, 50);
    }

    // }

    // animate2(i) {
    //     setInterval(() => {
    //         this.swimUp();
    //     }, 1000 / 60);
    //     setInterval(() => {
    //         if (i == 4) {
    //             this.playAnimation(this.IMAGES_SWIMMING_FISH4);
    //         }
    //         if (i == 5) {
    //             this.playAnimation(this.IMAGES_SWIMMING_FISH5);
    //         }
    //     }, 250);
    // }

    // animateFish1 (i) {
    //     if (this.isDead() && i == 1) {
    //         setTimeout(() => {
    //             clearInterval(this.intervalOfEnemies)
    //         }, 150);
    //         this.playAnimation(this.IMAGES_DEAD_FISH1);
    //         setInterval(() => {
    //             this.y -= 2;
    //         }, 50)

    //     } else if (!this.isDead() && i == 1) {
    //         this.playAnimation(this.IMAGES_SWIMMING_FISH1);
    //         this.swimLeft();
    //     }
    // }
}