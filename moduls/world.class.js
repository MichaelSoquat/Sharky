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
        this.ctx.drawImage(this.character.img, 0, 0, 100, 100);
        requestAnimationFrame(function () {
            self.draw();
        })
    };
}