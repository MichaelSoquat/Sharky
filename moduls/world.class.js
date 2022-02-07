class World {
    canvas;
    ctx;
    keyboard;
    positionCamera_X = 0;
    character = new Character();
    endboss = new Endboss();
    enemies =
        [new Fish(1),
        new Fish(2),
        new Fish(3),
        new Fish(4),
        new Fish(1),
        new Fish(2),
        new Fish(3),
        new Fish(1),
        new Fish(2),
        new Fish(3),
        new Fish(5),
        new Fish(1),
        new Fish(2),
        new Fish(4),
        new Fish(5),
        new Fish(3),
        new Fish(4),
        new Fish(1),
        new Fish(2),
        new Fish(3),
        new Fish(1),
        new Fish(2),
        new Fish(5),
        new Fish(1),
        new Fish(2),
        new Fish(3),
        new Fish(4)

        ];
    backgroundObjects = [
        new BackgroundObject(2, -canvas.width, 0),
        new BackgroundObject(1, 0, 0),
        new BackgroundObject(2, canvas.width, 0),
        new BackgroundObject(1, canvas.width * 2, 0),
        new BackgroundObject(2, canvas.width * 3, 0),
        new BackgroundObject(1, canvas.width * 4, 0),
        new BackgroundObject(2, canvas.width * 5, 0)
    ];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
        this.keyboard = keyboard;
        this.setWorld();
        

    };

    setWorld() {
        this.character.world = this;
        this.endboss.world = this;
    };

    draw() {
        let self = this;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.positionCamera_X, 0);

        this.addObjectToMap(this.backgroundObjects);
        this.addObjectToMap(this.enemies);
        this.addToMap(this.character);
        this.addToMap(this.endboss);


        this.ctx.translate(-this.positionCamera_X, 0);

        requestAnimationFrame(function () {
            self.draw();
        })
    };



    addObjectToMap(enemies) {
        enemies.forEach(fish => {
            fish.draw(this.ctx);
        })
    };

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    //  Spiegeln
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    };

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    };

    
}