Pantallas.Juego = function (game) {};

Pantallas.Juego.prototype = {

    preload: function () {
        
        game.load.image('fondo','img/fondo.png');

    },
    create: function () {
        game.add.tileSprite(0, 0, 800, 600, 'fondo');

        game.physics.startSystem(Phaser.Physics.P2JS);

        game.physics.p2.defaultRestitution = 0.8;

    }

};