Pantallas.Bienvenida = function (game) {
    console.log(game);
    //this.game = game;
    this.personaje = [];
};

Pantallas.Bienvenida.prototype = {

    preload: function () {
        game.load.bitmapFont('gem', 'img/bmpFuentes/gem.png', 'img/bmpFuentes/gem.xml');
        game.load.image('codigoqr', 'img/qr.png');
        game.load.image('asistente','img/personajes/masculino.png');

    },
    create: function () {
        this.game.stage.backgroundColor = '#806000';

        var mensaje = game.add.bitmapText(game.world.centerX, 20, 'gem','FANTASMAS',64);
        mensaje.anchor.x = 0.5;
        mensaje.alpha = 0;

        var qr = game.add.sprite(game.world.centerX, 100, 'codigoqr');
        qr.scale.x = 0.75;
        qr.scale.y = 0.75;
        qr.anchor.x = 0.5;

        game.add.tween(mensaje).to({alpha:1},2000,Phaser.Easing.Linear.None,true);
        //game.time.events.add(Phaser.Timer.SECOND*4,funcion,this).autoDestroy = true;


        /*this.botonInicio = game.add.button(game.world.centerX, 300, 'imgBotonStart', this.irSeleccionPersonaje, this);
        this.botonInicio.anchor.x = 0.5;*/
    },
    comenzarJuego: function(){
        //Enviar a todos que estas conectado y tu estado es aun en preparacion

        // Cambiar pantalla a la seleccion de personajes (dentro del callback de la funcion de arriba)
        //this.state.start("SeleccionarPersonaje");
    },
    agregarUsr: function(codigo){
        this.personaje[codigo] = new Fantasma(game,Math.floor((Math.random() * 500) + 1), Math.floor((Math.random() * 500) + 1), 'asistente', 0.10, 1.0, codigo);
        console.log(this.personaje);
    }

};

socket.on('nuevoFantasma', function(cod){
    console.log(cod);
   Pantallas.Bienvenida.prototype.agregarUsr(cod);
});

socket.on('mover', function(obj){
    console.log(obj);
    this.personaje[obj[0]].setZeroVelocity();
   if(obj[1] === 1){
    this.personaje[obj[0]].moveUp(400);
   }else if(obj[1] === 2){
    this.personaje[obj[0]].moveLeft(400);
   }else if(obj[1] === 3){
    this.personaje[obj[0]].moveDown(400);
   }else{
    this.personaje[obj[0]].moveRight(400);
   }

});