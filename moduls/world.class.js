class World {
    canvas;
    ctx;
    keyboard;
    bubble;
    positionCamera_X = 0;
    bubbleThrowTime = 0;
    throwableObject = [];
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

    coins = [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
    ];

    poison = [
        new Poison(1),
        new Poison(2),
        new Poison(3),
        new Poison(4),
        new Poison(1),
        new Poison(2),
        new Poison(3),
        new Poison(4),
        new Poison(1),
        new Poison(2),
        new Poison(3),
        new Poison(4),
        new Poison(1),
        new Poison(2),
        new Poison(3),
        new Poison(4),
        new Poison(1),
        new Poison(2),
        new Poison(3),
        new Poison(4)
    ];

    energybars = [
        new EnergyBar(1),
        new EnergyBar(2),
        new EnergyBar(3)
    ]

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
        this.keyboard = keyboard;
        this.setWorld();
        this.run();


    };

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 1000 / 60);

    }

    checkThrowObjects() {
        if (this.keyboard.D) {
            let timePassed = new Date().getTime() - this.bubbleThrowTime;
            if (timePassed > 1000) {
                this.bubble = new ThrowableObject(this.character.x + 100, this.character.y + 50);
                this.throwableObject.push(this.bubble);
                this.bubbleThrowTime = new Date().getTime();
            }

            setInterval(() => {
                this.enemies.forEach((enemy) => {
                    if (this.bubble.isColliding(enemy)) {
                        this.enemies.splice(this.enemies.indexOf(enemy), 1);
                        this.throwableObject.splice(this.throwableObject.indexOf(this.bubble), 1);
                        this.bubble.y = -100;
                    };

                });

            }, 1000 / 60);
        }
    }

    checkCollisions() {
        this.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                console.log(this.character.energy);
                this.energybars[0].setPercentage2(this.character.energy);
            }
        });
        this.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoins();
                this.energybars[1].setPercentage(this.character.coins);
                this.coins.splice(this.coins.indexOf(coin), 1);
            }
        })

        this.poison.forEach((poison) => {
            if (this.character.isColliding(poison)) {
                this.character.collectPoisons();
                this.energybars[2].setPercentage1(this.character.poison);
                this.poison.splice(this.poison.indexOf(poison), 1);
            }
        })

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
        this.addObjectToMap(this.coins);
        this.addObjectToMap(this.poison);
        this.ctx.translate(-this.positionCamera_X, 0);

        this.addObjectToMap(this.energybars);
        this.ctx.translate(this.positionCamera_X, 0);


        this.addObjectToMap(this.enemies);
        this.addToMap(this.character);
        this.addToMap(this.endboss);
        this.addObjectToMap(this.throwableObject);


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