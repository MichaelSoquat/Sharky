class EnergybarCharacter extends DrawableObject {
    LIFE_IMAGES = [
        'img/4. Marcadores/Purple/100_ .png',
        'img/4. Marcadores/Purple/80_ .png',
        'img/4. Marcadores/Purple/60_ .png',
        'img/4. Marcadores/Purple/40_ .png',
        'img/4. Marcadores/Purple/20__1.png',
        'img/4. Marcadores/Purple/0_ .png'
    ];
    lifePercentage = 100;

    constructor() {
        super();
        this.loadImage('img/4. Marcadores/Purple/100_ .png');
        this.loadImages(this.LIFE_IMAGES);
        this.y = 0;
        this.x = 15;
        this.height = 60;
        this.width = 250;
    }

    /**
         * This function is for setting percentage of life bar
         * @param {string} percentage 
         */
     setPercentage(percentage) {
        this.lifePercentage = percentage;
        let path = this.LIFE_IMAGES[this.resolveImageIndex()];
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