class DrawableObject {
    imageCache = {};
    img;
    currentImage = 0;
    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementbyId('image')  <img id="image" src> Wäre dasselbe!!!
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        
        });
}
}