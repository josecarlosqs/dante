Pantallas.Juego = function (game) {};

Pantallas.Bienvenida.prototype = {

    preload: function () {
        
        game.load.image('fondo','img/fondo.png');

    },
    create: function () {
        //this.game.stage.backgroundColor = '#806000';
        game.add.tileSprite(0, 0, 800, 600, 'fondo');

        var mensaje = game.add.bitmapText(game.world.centerX, 20, 'gem','FANTASMAS',64);
        mensaje.anchor.x = 0.5;
        mensaje.alpha = 0;

        var qr = game.add.sprite(game.world.centerX, 100, 'codigoqr');
        qr.scale.x = 0.75;
        qr.scale.y = 0.75;
        qr.anchor.x = 0.5;

        game.add.tween(mensaje).to({alpha:1},2000,Phaser.Easing.Linear.None,true);

        //  Enable p2 physics
        game.physics.startSystem(Phaser.Physics.P2JS);

        //  Make things a bit more bouncey
        game.physics.p2.defaultRestitution = 0.8;
        //game.time.events.add(Phaser.Timer.SECOND*4,funcion,this).autoDestroy = true;

    }

};

socket.on('nuevoFantasma', function(cod){
    console.log(cod);
    console.log(personajes);
   Pantallas.Bienvenida.prototype.agregarUsr(cod);
});

socket.on('mover', function(obj){
    personajes[obj[0]].x = obj[1]*2;
    personajes[obj[0]].y = obj[2]*2;
});
socket.on('ocultar', function(cod){
    console.log(codigo);
});