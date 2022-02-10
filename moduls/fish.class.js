class Fish extends MovableObject {

    IMAGES_SWIMMING_FISH1 = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'

    ];

    IMAGES_SWIMMING_FISH2 = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png'

    ];

    IMAGES_SWIMMING_FISH3 = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png'

    ];

    IMAGES_SWIMMING_FISH4 = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png'

    ];

    IMAGES_SWIMMING_FISH5 = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png'
    ];

    IMAGES_DEAD_FISH1 = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png'
    ];



    constructor(variantsOfFishes) {
        super();
        this.loadImages(this.IMAGES_SWIMMING_FISH1);
        this.loadImages(this.IMAGES_SWIMMING_FISH2);
        this.loadImages(this.IMAGES_SWIMMING_FISH3);
        this.loadImages(this.IMAGES_SWIMMING_FISH4);
        this.loadImages(this.IMAGES_SWIMMING_FISH5);
        this.loadImages(this.IMAGES_DEAD_FISH1);

        if (variantsOfFishes == 1) {
            this.loadImage('../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
            this.speed = 0.2 + Math.random() * 4;
            this.y = 0 + Math.random() * 400;

            this.animate1(1);

        }

        if (variantsOfFishes == 2) {
            this.loadImage('../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png');

            this.speed = 0.2 + Math.random() * 2;
            this.y = 0 + Math.random() * 400;
            this.animate1(2);


        }

        if (variantsOfFishes == 3) {
            this.loadImage('../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');

            this.speed = 0.2 + Math.random() * 3;
            this.y = 0 + Math.random() * 400;
            this.animate1(3);


        } else {
            if (variantsOfFishes == 4) {
                this.loadImage('../img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png');
                this.speed = 0.02 + Math.random() * 0.5;
                this.y = 350;
                this.animate2(4);

            }

            if (variantsOfFishes == 5) {
                this.loadImage('../img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png');
                this.speed = 0.02 + Math.random() * 0.5;
                this.y = 350;
                this.animate2(5);

            }
        }
        this.x = 300 + Math.random() * 4000;
    }

    animate1(i) {
        setInterval(() => {
            if (i == 1) {
                this.playAnimation(this.IMAGES_SWIMMING_FISH1);
            }

            if (i == 2 && !this.isColliding) {
                this.playAnimation(this.IMAGES_SWIMMING_FISH2);
            }
            if (i == 3 && !this.isColliding) {
                this.playAnimation(this.IMAGES_SWIMMING_FISH3);
            }


            this.swimLeft();



        }, 1000 / 60);


    }

    animate2(i) {


        setInterval(() => {
            this.swimUp();
        }, 1000 / 60);
        setInterval(() => {
            if (i == 4) {
                this.playAnimation(this.IMAGES_SWIMMING_FISH4);
            }
            if (i == 5) {
                this.playAnimation(this.IMAGES_SWIMMING_FISH5);
            }
        }, 250);
    }
    // animationIfDead() {
    //     setInterval(() => {

    //         this.playAnimation(this.IMAGES_DEAD_FISH1);
    //         this.x -= 20;

    //     }, 100)
    //     console.log('good');


    // }
}