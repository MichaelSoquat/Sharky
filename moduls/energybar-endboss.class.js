class EnergybarEndboss extends DrawableObject {
    ENDBOSS_LIFE_IMAGES = [
        'img/4. Marcadores/orange/100_  copia.png',
        'img/4. Marcadores/orange/80_  copia.png',
        'img/4. Marcadores/orange/60_  copia.png',
        'img/4. Marcadores/orange/40_  copia.png',
        'img/4. Marcadores/orange/20_  copia.png',
        'img/4. Marcadores/orange/0_  copia.png'
    ];

    constructor() {
        super().loadImage('img/4. Marcadores/orange/100_  copia.png');
        this.y = 100;
        this.x = 300;
        this.width = 250;
        this.height = 30;
    }
}