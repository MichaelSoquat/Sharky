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


    constructor(variantsOfFishes) {
        super();
        this.loadImages(this.IMAGES_SWIMMING_FISH1);
        this.loadImages(this.IMAGES_SWIMMING_FISH2);
        this.loadImages(this.IMAGES_SWIMMING_FISH3);
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
            this.playAnimation(this.IMAGES_SWIMMING_FISH2);

        }

        if (variantsOfFishes == 3) {
            this.loadImage('../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');

            this.speed = 0.2 + Math.random() * 3;
            this.y = 0 + Math.random() * 400;
            this.animate1(3);
            this.playAnimation(this.IMAGES_SWIMMING_FISH3);

        } else {
            if (variantsOfFishes == 4) {
                this.loadImage('../img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png');
                this.speed = 0.02 + Math.random() * 0.5;
                this.y = 350;
                this.animate2();
            }
        }
        this.x = 250 + Math.random() * 4000;



    }

    animate1(i) {
        setInterval(() => {
            if (i == 1) {
                this.playAnimation(this.IMAGES_SWIMMING_FISH1);
            }
            if (i == 2) {
                this.playAnimation(this.IMAGES_SWIMMING_FISH2);
            }
            if (i == 3) {
                this.playAnimation(this.IMAGES_SWIMMING_FISH3);
            }


            this.swimLeft();



        }, 1000 / 60);


    }

    animate2() {
        setInterval(() => {

            this.swimUp();
        }, 1000 / 60);
    }
}