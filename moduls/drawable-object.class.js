class DrawableObject {
    imageCache = {};
    img;
    currentImage = 0;

    /**
     * This function is for loading Image.
     * @param {string} path 
     */

    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementbyId('image')  <img id="image" src> Wäre dasselbe!!!
        this.img.src = path;
    }

    /**
     * This function is for drawing the Image.
     * @param {} ctx 
     */

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    /**
     * This function is for loading Images.
     * @param {array} arr 
     */

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;

        });
    }
}