class Character extends MovableObject {
    world;
    x = 50;
    y = 140;
    width = 150;
    height = 150; s

    constructor() {
        super().loadImage('../img/1.Sharkie/1.IDLE/1.png');
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.swimRight();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.swimLeft();
            }
            if (this.world.keyboard.UP && this.y > -50) {
                this.swimUp();
            }
            if (this.world.keyboard.DOWN && this.y < 350) {
                this.swimDown();
            }
            console.log(this.world.keyboard)
        }, 1000 / 60);
    }

    swimRight() {
        this.x += this.speed;
    }

    swimDown() {
        this.y += this.speed;
    }
}