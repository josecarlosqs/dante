var Fantasma = function (game,x,y,tipo,escala,transparencia,codigo) {
    console.log(game);
    console.log('aii')
        this.codigo = codigo;
        var transparencia = transparencia || 1.0;

        Phaser.Sprite.call(this, game, x, y, tipo);

        this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;

        this.anchor.set(0.5);

        this.scale.setTo(escala);

        this.alpha = transparencia;

        game.add.existing(this);

    };

    Fantasma.prototype = Object.create(Phaser.Sprite.prototype);
    Fantasma.prototype.constructor = Fantasma;

    Fantasma.prototype.update = function () {

        /*this.y += 0.5*Math.sin(cont/15);
        cont++;*/

    };