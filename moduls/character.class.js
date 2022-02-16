class Character extends MovableObject {
    world;
    x = 0;
    y = 150;
    width = 150;
    height = 150;
    poison = 0;
    coins = 0;

    //IMAGES TO LOAD
    IMAGES_IDLE = [
        './img/1.Sharkie/1.IDLE/1.png',
        './img/1.Sharkie/1.IDLE/2.png',
        './img/1.Sharkie/1.IDLE/3.png',
        './img/1.Sharkie/1.IDLE/4.png',
        './img/1.Sharkie/1.IDLE/5.png',
        './img/1.Sharkie/1.IDLE/6.png',
        './img/1.Sharkie/1.IDLE/7.png',
        './img/1.Sharkie/1.IDLE/8.png',
        './img/1.Sharkie/1.IDLE/9.png',
        './img/1.Sharkie/1.IDLE/10.png',
        './img/1.Sharkie/1.IDLE/11.png',
        './img/1.Sharkie/1.IDLE/12.png',
        './img/1.Sharkie/1.IDLE/13.png',
        './img/1.Sharkie/1.IDLE/14.png',
        './img/1.Sharkie/1.IDLE/15.png',
        './img/1.Sharkie/1.IDLE/16.png',
        './img/1.Sharkie/1.IDLE/17.png',
        './img/1.Sharkie/1.IDLE/18.png'
    ];

    IMAGES_SWIMMING = [
        './img/1.Sharkie/3.Swim/1.png',
        './img/1.Sharkie/3.Swim/2.png',
        './img/1.Sharkie/3.Swim/3.png',
        './img/1.Sharkie/3.Swim/4.png',
        './img/1.Sharkie/3.Swim/5.png',
        './img/1.Sharkie/3.Swim/6.png'
    ];



    IMAGES_HURT = [
        './img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/4.png'
    ];

    IMAGES_DEAD = [
        './img/1.Sharkie/6.dead/2.Electro_shock/1.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/2.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/3.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/4.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/5.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/6.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/7.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/8.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/9.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/10.png'

    ]

    // SOUNDS

    swim_sound = new Audio('audio/swim.wav');
    collect_sound = new Audio('audio/collect.wav');

    constructor() {
        super().loadImage('./img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.movement();
        this.animate();

    }

    /**
     * This function is for moving the character
     */

    movement() {

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
    }

    /**
     * This function is for animate the character if idle/swimming/hurt/dead.
     */

    animate() {
        setInterval(() => {

            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            }
            else
                if (this.isHurt()) {
                    this.playAnimation(this.IMAGES_HURT);

                }

                else {
                    if (this.world.keyboard.LEFT || this.world.keyboard.RIGHT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                        this.playAnimation(this.IMAGES_SWIMMING);
                        this.swim_sound.play();

                    } else {
                        if (!this.isDead() && !this.isHurt())
                            this.playAnimation(this.IMAGES_IDLE);
                    }
                }
        }, 75);
    }

    //swim speed right

    swimRight() {
        this.x += this.speed;
    }

    //swim speed down

    swimDown() {
        this.y += this.speed;
    }

    //collect coins + 10

    collectCoins() {
        this.collect_sound.play();
        this.coins += 10;
        if (this.coins > 100) {
            this.coins = 100;
        }
    }

    //collect poison + 10

    collectPoisons() {
        this.poison += 5;
        if (this.poison > 100) {
            this.poison = 100;
        }
    }
}