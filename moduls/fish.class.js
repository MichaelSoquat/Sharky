class Fish extends MovableObject {

    constructor(variantsOfFishes) {
        super()
        if (variantsOfFishes == 1) {
            this.loadImage('../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        } else {
            this.loadImage('../img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png');
        }
        this.x = 250 + Math.random() * 500;
        this.y = 0 + Math.random() * 400;
    }
}