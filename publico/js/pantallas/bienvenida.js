Pantallas.Bienvenida = function (game) {
    
};

Pantallas.Bienvenida.prototype = {

    preload: function () {
        game.load.bitmapFont('gem', 'img/bmpFuentes/gem.png', 'img/bmpFuentes/gem.xml');
        game.load.image('codigoqr', 'img/qr.png');

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
    }

};