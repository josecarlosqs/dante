var Fantasma = function (game,x,y,tipo,escala,transparencia) {
    
        var transparencia = transparencia || 1.0;

        Phaser.Sprite.call(this, game, x, y, tipo);

        this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;

        game.physics.p2.enable(this);

        this.anchor.set(0.5);

        this.scale.setTo(escala);

        this.alpha = transparencia;

        game.add.existing(this);

        this.body.setZeroDamping();
        this.body.fixedRotation = false;
        this.setZeroVelocity();

        this.cont = 0;

    };

    Fantasma.prototype = Object.create(Phaser.Sprite.prototype);
    Fantasma.prototype.constructor = Fantasma;

    Fantasma.prototype.update = function () {

        this.y += 0.5*Math.sin(this.cont/15);
        this.cont++;

    };