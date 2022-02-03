class Fish extends MovableObject {
    constructor(variantsOfFishes) {
        super()
        if (variantsOfFishes == 1) {
            this.loadImage('../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
            this.animate1();
        } else {
            this.loadImage('../img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png');
            this.animate2();
        }
        this.x = 250 + Math.random() * 500;
        this.y = 0 + Math.random() * 400;
        
        
    }

    animate1() {
        setInterval(() => {
            this.speed = 0.1 + Math.random() * 3;
            this.swimLeft();
        }, 1000/60);
    }

    animate2() {
        setInterval(() => {
            this.speed = 0.02 + Math.random() * 0.5;
            this.swimUp();
        }, 1000/60);
    }
}