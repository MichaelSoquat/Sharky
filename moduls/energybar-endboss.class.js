class EnergybarEndboss extends DrawableObject {
    y;
    world;
    percentage = 100;
    ENDBOSS_LIFE_IMAGES = [
        './img/4. Marcadores/orange/100_  copia.png',
        './img/4. Marcadores/orange/80_  copia.png',
        './img/4. Marcadores/orange/60_  copia.png',
        './img/4. Marcadores/orange/40_  copia.png',
        './img/4. Marcadores/orange/20_ copia 2.png',
        './img/4. Marcadores/orange/0_  copia.png'
    ];

    constructor(x, y, world) {
        super().loadImage('././img/4. Marcadores/orange/100_  copia.png');
        this.loadImages(this.ENDBOSS_LIFE_IMAGES);
        this.y = y - 50;
        this.x = x;
        this.width = 250;
        this.height = 30;
        this.checkEnergybar();
        this.world = world;
    }
    /**
     * This function is for setting the energybar of endboss
     */
    checkEnergybar() {
        setInterval(() => {


            if (world.endboss.endbossInWater) {
                this.y = world.endboss.y + 30;
            }
        }
        ), 100
    }
    /**
     * This function is for setting the percentage of energybar endboss
     * @param {string} percentage 
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.ENDBOSS_LIFE_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * This function is for getting the right percentage for energybar endboss
     * @returns 
     */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 0;
        } else if (this.percentage >= 80) {
            return 1;
        } else if (this.percentage >= 60) {
            return 2;
        } else if (this.percentage >= 40) {
            return 3;
        } else if (this.percentage >= 20) {
            return 4;
        } else if (this.percentage >= 0) {
            return 5;
        } else {
            return 6;
        }
    }
}
