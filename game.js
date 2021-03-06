let canvas;
let keyboard;
let world;
// let bg_sound = ;

/**
 * This function is used to create the World
 * and give canvas and keyboard to world
 */

function init() {
    canvas = document.getElementById('canvas');
    keyboard = new Keyboard;
    world = new World(canvas, keyboard);
    responsive();
    canvas.addEventListener("mousedown", doMouseDown, false);
}

/**
 * This function is to get fullscreen onclick the size button
 * @param {string} event 
 */

function doMouseDown(event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    if (x >= canvas.clientWidth - 50 && y >= canvas.clientHeight - 50) {
        canvas.requestFullscreen();
    }
}

//responsive

function responsive() {
    var heightRatio = 0.65;
    canvas.height = canvas.width * heightRatio;
}


// start game

function startGame() {
    let canvasFullscreen = document.getElementById('canvasFullscreen');
    canvas = document.getElementById('canvas');
    let startGame = document.getElementById('startGame');
    canvasFullscreen.classList.remove('d-none')
    startGame.classList.add('d-none');
    canvas.classList.remove('d-none');
    // bg_sound.play();
    // bg_sound.volume = 0.1;
}
/**
 * This function is used to create and use the Keyboard
 */
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});