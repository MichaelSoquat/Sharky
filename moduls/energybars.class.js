class EnergyBar extends MovableObject {

    constructor(index) {
        super();
        if(index == 1) {
            this.loadImage('img/4. Marcadores/Purple/100_ .png');
            this.y = 0;
        }
        if(index == 2) {
            this.loadImage('img/4. Marcadores/Purple/0_ _1.png');
            this.y = 50;
        }
        if(index == 3) {
            this.loadImage('img/4. Marcadores/Purple/0_.png');
            this.y = 100;
        }
        this.x = 15;
        this.height = 60;
        this.width = 250;
        
    }
}