class World {
    canvas;
    ctx;
    keyboard;
    bubble;
    poisonObject;
    positionCamera_X = 0;
    bubbleThrowTime = 0;
    poisonThrowTime = 0;
    throwableObject = [];
    throwableObjectPoison = [];
    character = new Character();
    endboss = new Endboss();
    energybarEndboss = new EnergybarEndboss(this.endboss.x, this.endboss.y, this.world);

    // CREATE!!!

    enemies =
        [
            new FishGreen(),
            new FishGreen(),
            new FishGreen(),
            new FishGreen(),
            new FishOrange(),
            new FishOrange(),
            new FishOrange(),
            new FishOrange(),
            new FishPurple(),
            new FishPurple(),
            new FishPurple(),
            new FishPurple(),
            new FishJellyGreen(),
            new FishJellyGreen(),
            new FishJellyGreen(),
            new FishJellyGreen(),
            new FishJellyPurple(),
            new FishJellyPurple(),
            new FishJellyPurple(),
            new FishJellyPurple()

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
    ];

    // CREATE END

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
        this.keyboard = keyboard;
        this.setWorld();
        this.run();


    };

 
    /**
     * This function is used to check the collisions and prove it every 60fps
     */

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.checkThrowObjectsPoison();
        }, 1000 / 60);
    }

     /**
     * This function is for checking the throwable objects
     */

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
                        enemy.hit();
                        // this.enemies.splice(this.enemies.indexOf(enemy), 1);
                        this.throwableObject.splice(this.throwableObject.indexOf(this.bubble), 1);
                        this.bubble.y = -100;
                    };
                });
            }, 1000 / 60);
            setInterval(() => {
                if (this.endboss.isColliding(this.bubble)) {
                    this.throwableObject.splice(this.throwableObject.indexOf(this.bubble), 1);
                    this.bubble.y = -100;
                    this.endboss.bossEnergy -= 200;
                    this.endboss.hitBoss();
                    this.energybarEndboss.setPercentage(this.endboss.bossEnergy);
                };
            }, 1000 / 60);
        };
    }

    /**
     * This function is for checking a collision of the poison throwable object of endboss
     */
    checkThrowObjectsPoison() {

        let timePassed = new Date().getTime() - this.poisonThrowTime;
        if (timePassed > 1000 + Math.random() * 5000 && this.endboss.endbossInWater && !this.endboss.bossIsDead) {
            this.poisonObject = new ThrowableObjectPoison(this.endboss.x, this.endboss.y + 120 + Math.random() * 100);
            this.throwableObjectPoison.push(this.poisonObject);
            this.poisonThrowTime = new Date().getTime();
        }
        this.throwableObjectPoison.forEach((poisonObject) => {
            if (this.character.isColliding(poisonObject)) {
                this.throwableObjectPoison.splice(this.throwableObjectPoison.indexOf(this.poisonObject), 1);
                this.character.energy -= 10;
                this.character.hit();
                this.energybars[0].setPercentage2(this.character.energy);
            };
        });
    }

        /**
         * This function is used for checking the collision of character with enemy/coin/poison
         */

    checkCollisions() {
        this.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
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

    /**
     * This function is for setting the world to character and endboss
     */

    setWorld() {
        this.character.world = this;
        this.endboss.world = this;
        // this.enemies.world = this;
    };

    /**
     * Drawing function
     */

    draw() {
        let self = this;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.positionCamera_X, 0);
        this.addObjectToMap(this.backgroundObjects);
        this.addObjectToMap(this.coins);
        this.addObjectToMap(this.poison);
        this.ctx.translate(-this.positionCamera_X, 0);
        //space for static Objects!!!
        this.addObjectToMap(this.energybars);
        this.ctx.translate(this.positionCamera_X, 0);


        this.addObjectToMap(this.enemies);
        this.addToMap(this.character);
        this.addToMap(this.endboss);
        this.addToMap(this.energybarEndboss);
        this.addObjectToMap(this.throwableObject);
        this.addObjectToMap(this.throwableObjectPoison);


        this.ctx.translate(-this.positionCamera_X, 0);

        requestAnimationFrame(function () {
            self.draw();
        })
    };


    /**
     * Drawing function splitted. This is for more Objects.
     * @param {string} enemies 
     */

    addObjectToMap(enemies) {
        enemies.forEach(fish => {
            fish.draw(this.ctx);
        })
    };

    /**
     * Drawing function splitted. This is for 1 Object.
     * @param {string} mo 
     */

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    /**
     * This function is for mirror character movement
     * @param {string} mo 
     */

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    };

    /**
     * Mirror back
     * @param {moveableObject} mo 
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    };

}