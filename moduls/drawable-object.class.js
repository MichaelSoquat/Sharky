class DrawableObject {
    img;
    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementbyId('image')  <img id="image" src> Wäre dasselbe!!!
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, 0, 0, 100, 100);
    }
}