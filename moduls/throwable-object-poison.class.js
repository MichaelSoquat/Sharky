class ThrowableObjectPoison extends MovableObject {

    POISON_IMAGES = [
        './img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'

    ]
    constructor(x, y) {
        super().loadImage('./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.loadImages(this.POISON_IMAGES);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 80;
        this.animate();
        this.x -= 5;
        this.throw();
    }
    /**
     * This function is for animating bubble
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.POISON_IMAGES);
        }, 100)
    }


}