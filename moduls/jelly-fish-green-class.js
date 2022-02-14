class FishJellyGreen extends Fish {
    IMAGES_SWIMMING_FISH = [
        './img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        './img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        './img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        './img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png'

    ];
    constructor() {
        super();
        this.loadImage('./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png');
        this.loadImages(this.IMAGES_SWIMMING_FISH);
        this.speed = 0.02 + Math.random() * 0.5;
        this.y = 350;
        this.x = 300 + Math.random() * 4000;
        this.animate();
    }
}