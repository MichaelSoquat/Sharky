class Fullscreen extends DrawableObject {
    world;
    IMAGES = [
        './img/fullscreen.png'
    ]
    constructor() {

        super().loadImage('./img/fullscreen.png');
        this.loadImages(this.IMAGES);
        this.y = 430;
        this.x = 680;
        this.height = 30;
        this.width = 30;
    }
}