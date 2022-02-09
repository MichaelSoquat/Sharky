class ThrowableObjectPoison extends MovableObject {

    POISON_IMAGES = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'

    ]
    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png');
        this.loadImages(this.POISON_IMAGES);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 80;
        this.animate();
        this.throw();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.POISON_IMAGES);
        }, 100)
    }




    throw() {
        setInterval(() => {
            this.x -= 5;
        }, 25)

    }
}