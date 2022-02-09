class EnergybarEndboss extends DrawableObject {

    percentage = 0;
    lifePercentage = 100;
    ENDBOSS_LIFE_IMAGES = [
        'img/4. Marcadores/orange/100_  copia.png',
        'img/4. Marcadores/orange/80_  copia.png',
        'img/4. Marcadores/orange/60_  copia.png',
        'img/4. Marcadores/orange/40_  copia.png',
        'img/4. Marcadores/orange/20_ copia 2.png',
        'img/4. Marcadores/orange/0_  copia.png'
    ];

    constructor() {
        super().loadImage('img/4. Marcadores/orange/100_  copia.png');
        this.loadImages(this.ENDBOSS_LIFE_IMAGES);
        this.y = 100;
        this.x = 300;
        this.width = 250;
        this.height = 30;
    }
    setPercentage(percentage) {
        this.lifePercentage = percentage;
        let path = this.ENDBOSS_LIFE_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
    resolveImageIndex() {
        if (this.lifePercentage == 100) {
            return 0;
        } else if (this.lifePercentage > 80) {
            return 1;
        } else if (this.lifePercentage > 60) {
            return 2;
        } else if (this.lifePercentage > 40) {
            return 3;
        } else if (this.lifePercentage > 20) {
            return 4;
        } else if (this.lifePercentage >= 0) {
            return 5;
        } else {
            return 6;
        }
    }
}
