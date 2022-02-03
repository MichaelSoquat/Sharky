class World {
    canvas;
    ctx;
    keyboard;
    positionCamera_X = 0;
    character = new Character();
    enemies = [new Fish(1),
    new Fish(2),
    new Fish(1),
    new Fish(2),
    new Fish(1)
    ];
    backgroundObjects = new BackgroundObject;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
        this.keyboard = keyboard;
        this.setWorld();

    };

    setWorld() {
        this.character.world = this;
    };

    draw() {
        let self = this;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.positionCamera_X, 0);
        this.addToMap(this.backgroundObjects);
        this.addObjectToMap(this.enemies);
        this.addToMap(this.character);
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
        mo.draw(this.ctx);
    }
}