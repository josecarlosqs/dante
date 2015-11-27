var habilitado = false,
express = require('express'),
app = express(),
http = require('http').Server(app),
io = require('socket.io')(http),
shortid = require("shortid"),
socketPantalla,
socketsClientes = [];

//usamos la carpeta publica como recursos disponibles por http
app.use('/', express.static(__dirname+"/publico"));

//Presentacion
app.get('/', function (req, res) {
	res.sendFile(__dirname + "/presentacion.html");
});

//Listener del socket para los eventos
io.on('connection', function(socket){
  //io.emit('nuevoUsr',shortid.generate());
  socket.on('conexionPantalla', function(){
    socketPantalla = socket;
  });
  socket.on('conexionUsr',function(){
  	socket.codigo = shortid.generate();
  	socketsClientes.push(socket)
  	socket.emit('conectado',socket.codigo);
  	socketPantalla.emit('nuevoFantasma',socket.codigo);
  });
});

//Pantalla a proyectar
app.get('/pantalla', function (req, res) {
	habilitado = true;
	res.sendFile(__dirname + "/pantalla.html");
});


//Mando a usar
app.get('/mando', function (req, res) {
	if (habilitado === true) {
		//res.send("habilitado "+shortid.generate());
		res.sendFile(__dirname+"/mando.html");
	}else{
		res.send("deshabilitado");
	};
});

http.listen(3000,function(){
	console.log("Iniciado");
});