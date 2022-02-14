class FishPurple extends Fish {
    IMAGES_SWIMMING_FISH = [
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png'

    ];
    IMAGES_DEAD_FISH = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png'

    ];
    constructor() {
        super();
        this.loadImage('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.loadImages(this.IMAGES_SWIMMING_FISH);
        this.speed = 0.2 + Math.random() * 4;
            this.y = 0 + Math.random() * 400;
            this.x = 300 + Math.random() * 4000;
            this.animate();
    }
}