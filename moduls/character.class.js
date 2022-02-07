class Character extends MovableObject {
    world;
    x = 0;
    y = 150;
    energy = 100;
    width = 150;
    height = 150;

    IMAGES_SWIMMING = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'

    ];

    constructor() {
        super().loadImage('../img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.animate();
        
    }


    animate() {
        setInterval(() => {
            
            if (this.world.keyboard.RIGHT && this.x < 3500) {
                this.otherDirection = false;

                this.swimRight();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.otherDirection = true;

                this.swimLeft();
            }
            if (this.world.keyboard.UP && this.y > -50) {
                this.swimUp();
            }
            if (this.world.keyboard.DOWN && this.y < 350) {
                this.swimDown();
            }

            this.world.positionCamera_X = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.LEFT || this.world.keyboard.RIGHT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playAnimation(this.IMAGES_SWIMMING);
            }
        }, 100);
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    };
    
    swimRight() {
        this.x += this.speed;
    }

    swimDown() {
        this.y += this.speed;
    }
}