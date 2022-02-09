class Endboss extends MovableObject {
    endbossInWater = false;
    world;
    IMAGES_ENDBOSS = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];

    IMAGES_IDLE = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ]


    constructor() {
        super().loadImage('img/2.Enemy/3 Final Enemy/1.Introduce/1.png');
        this.loadImages(this.IMAGES_ENDBOSS);
        this.loadImages(this.IMAGES_IDLE);
        this.x = 300;  //3800
        this.y = 0;
        this.width = 300;
        this.height = 300;
        this.animateEndboss();
        this.animate();
    }

    /**
     * This function is to check if character is at endboss screen.
     * Then the animation of the endboss starts and it shows up.
     */

    animateEndboss() {
        let refreshInterval = setInterval(() => {
            if (this.world.character.x > 200) {  //3400
                this.playAnimation(this.IMAGES_ENDBOSS);
                setTimeout(() => {
                    clearInterval(refreshInterval);
                    this.endbossInWater = true;
                }, 350);
            };
        }, 1000 / 20);
    }

    animate() {

        setInterval(() => {
            if (this.endbossInWater == true) {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 150)
    }

}