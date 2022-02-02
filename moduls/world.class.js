class World {
    canvas;
    ctx;

    character = new Character;

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

        this.addToMap(this.character);
        
        requestAnimationFrame(function () {
            self.draw();
        })
    };

    addToMap(mo) {
        mo.draw(this.ctx);
    }
}