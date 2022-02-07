class EnergyBar extends MovableObject {
    LIFE_IMAGES = [
        'img/4. Marcadores/Purple/100_ .png',
        'img/4. Marcadores/Purple/80_ .png',
        'img/4. Marcadores/Purple/60_ .png',
        'img/4. Marcadores/Purple/40_ .png',
        'img/4. Marcadores/Purple/20__1.png',
        'img/4. Marcadores/Purple/0_ .png'
    ];

    COIN_IMAGES = [
        'img/4. Marcadores/Purple/0_ _1.png',
        'img/4. Marcadores/Purple/20_ .png',
        'img/4. Marcadores/Purple/40_ _1.png',
        'img/4. Marcadores/Purple/60_ _1.png',
        'img/4. Marcadores/Purple/80_ _1.png',
        'img/4. Marcadores/Purple/100__1.png'
    ];

    POISON_IMAGES = [
        'img/4. Marcadores/Purple/0_.png',
        'img/4. Marcadores/Purple/20_.png',
        'img/4. Marcadores/Purple/40_.png',
        'img/4. Marcadores/Purple/60_.png',
        'img/4. Marcadores/Purple/80_.png',
        'img/4. Marcadores/Purple/100_.png'
    ];
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