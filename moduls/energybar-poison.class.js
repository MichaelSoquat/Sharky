class EnergybarPoison extends MovableObject {
    POISON_IMAGES = [
        'img/4. Marcadores/Purple/0_.png',
        'img/4. Marcadores/Purple/20_.png',
        'img/4. Marcadores/Purple/40_.png',
        'img/4. Marcadores/Purple/60_.png',
        'img/4. Marcadores/Purple/80_.png',
        'img/4. Marcadores/Purple/100_.png'
    ];
    poisonPercentage = 0;

    constructor() {
        super();
        this.loadImage('img/4. Marcadores/Purple/0_.png');
        this.loadImages(this.POISON_IMAGES);
        this.y = 100;
        this.x = 15;
        this.height = 60;
        this.width = 250;
    }

    /**
         * This function is for setting percentage of poison bar
         * @param {string} percentage 
         */
    setPercentage(percentage) {
        this.poisonPercentage = percentage;
        let path = this.POISON_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
    resolveImageIndex() {
        if (this.poisonPercentage == 100) {
            return 6;
        } else if (this.poisonPercentage > 80) {
            return 5;
        } else if (this.poisonPercentage > 60) {
            return 4;
        } else if (this.poisonPercentage > 40) {
            return 3;
        } else if (this.poisonPercentage > 20) {
            return 2;
        } else if (this.poisonPercentage > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}