class MovableObject extends DrawableObject {
    x;
    y;
    width = 100;
    height = 100;
    speed = 10;

    swimLeft() {
        this.x -= this.speed;
    }

    swimUp() {
        this.y -= this.speed;
    }
}