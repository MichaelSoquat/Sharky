class World {
    canvas;
    ctx;

    character = new Character();
    enemies = [new Fish(),
    new Fish(),
    new Fish(),
    new Fish(),
    new Fish()
    ]


    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
        this.setWorld();

    };

    setWorld() {
        this.character.world = this;
    };

    draw() {
        let self = this;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addToMap(this.character);
        this.addObjectToMap(this.enemies);

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