class EnergybarCoins extends DrawableObject {


    COIN_IMAGES = [
        'img/4. Marcadores/Purple/0_ _1.png',
        'img/4. Marcadores/Purple/20_ .png',
        'img/4. Marcadores/Purple/40_ _1.png',
        'img/4. Marcadores/Purple/60_ _1.png',
        'img/4. Marcadores/Purple/80_ _1.png',
        'img/4. Marcadores/Purple/100__1.png'
    ];

    percentage = 0;

    constructor() {
        super();

        this.loadImage('img/4. Marcadores/Purple/0_ _1.png');
        this.loadImages(this.COIN_IMAGES);
        this.y = 50;
        this.x = 15;
        this.height = 60;
        this.width = 250;


    }
    /**
     * This function is for setting percentage of coin bar
     * @param {string} percentage 
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.COIN_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 6;
        } else if (this.percentage > 80) {
            return 5;
        } else if (this.percentage > 60) {
            return 4;
        } else if (this.percentage > 40) {
            return 3;
        } else if (this.percentage > 20) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else {
            return 0;
        }
    }
    
    
}