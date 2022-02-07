class MovableObject extends DrawableObject {
    x;
    y;
    width = 100;
    height = 100;
    speed = 10;
    otherDirection = false;

    swimLeft() {
        this.x -= this.speed;
    }

    swimUp() {
        this.y -= this.speed;
    }

    playAnimation(images) {

        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;

    }
}