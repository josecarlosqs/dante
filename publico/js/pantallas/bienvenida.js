Pantallas.Bienvenida = function (game) {
    this.mensaje;
    this.qr;
};

Pantallas.Bienvenida.prototype = {

    preload: function () {
        game.load.bitmapFont('gem', 'img/bmpFuentes/gem.png', 'img/bmpFuentes/gem.xml');
        game.load.image('codigoqr', 'img/qr.png');
        game.load.image('asistente','img/personajes/masculino.png');
        game.load.image('diablo','img/personajes/diablo.png');
        game.load.image('angel','img/personajes/angel.png');
        game.load.image('fondo','img/fondo.png');

    },
    create: function () {
        game.add.tileSprite(0, 0, 800, 600, 'fondo');
        
        this.game.stage.backgroundColor = '#806000';

        this.mensaje = game.add.bitmapText(game.world.centerX, 20, 'gem','FANTASMAS',64);
        this.mensaje.anchor.x = 0.5;
        this.mensaje.alpha = 0;

        this.qr = game.add.button(game.world.centerX, 100, 'codigoqr', this.comenzarJuego, this, 2, 1, 0);
        this.qr.scale.x = 0.75;
        this.qr.scale.y = 0.75;
        this.qr.anchor.x = 0.5;

        game.add.tween(this.mensaje).to({alpha:1},2000,Phaser.Easing.Linear.None,true);

        game.physics.startSystem(Phaser.Physics.ARCADE);

    },
    comenzarJuego: function(){
        this.mensaje.visible = false;
        this.qr.visible = false;
        for (var i = 0; i < 150; i++) {
            new Fantasma(game,Math.floor((Math.random() * 800) + 1), Math.floor((Math.random() * 50) + 1), 'angel', 0.10, 1.0);
        };

        for (var i = 0; i < 150; i++) {
            new Fantasma(game,Math.floor((Math.random() * 800) + 1), Math.floor((Math.random() * 50+270) + 1+270), 'diablo', 0.10, 1.0);
        };
    },
    agregarUsr: function(codigo){
        personajes.push(new Fantasma(game,Math.floor((Math.random() * 500) + 1), Math.floor((Math.random() * 500) + 1), 'asistente', 0.08, 1.0));
    }

};

socket.on('nuevoFantasma', function(cod){
   Pantallas.Bienvenida.prototype.agregarUsr(cod);
});

socket.on('mover', function(obj){
    personajes[obj[0]].x = obj[1]*2;
    personajes[obj[0]].y = obj[2]*2;
});
socket.on('ocultar', function(cod){
    console.log(codigo);
});