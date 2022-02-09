class EnergyBar extends DrawableObject {
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



    percentage = 0;
    poisonPercentage = 0;
    lifePercentage = 100;

    constructor(index) {
        super();
        this.setPercentage(0);
        if (index == 1) {
            this.loadImage('img/4. Marcadores/Purple/100_ .png');
            this.loadImages(this.LIFE_IMAGES);
            this.y = 0;
            
        }
        if (index == 2) {
            this.loadImage('img/4. Marcadores/Purple/0_ _1.png');
            this.loadImages(this.COIN_IMAGES);
            this.y = 50;
            
        }
        if (index == 3) {
            this.loadImage('img/4. Marcadores/Purple/0_.png');
            this.loadImages(this.POISON_IMAGES);
            this.y = 100;
            
        }


        this.x = 15;
        this.height = 60;
        this.width = 250;


    }

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

    setPercentage1(percentage) {
        this.poisonPercentage = percentage;
        let path = this.POISON_IMAGES[this.resolveImageIndex1()];
        this.img = this.imageCache[path];
    }
    resolveImageIndex1() {
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

    setPercentage2(percentage) {
        this.lifePercentage = percentage;
        let path = this.LIFE_IMAGES[this.resolveImageIndex2()];
        this.img = this.imageCache[path];
    }
    resolveImageIndex2() {
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