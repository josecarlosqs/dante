var habilitado = false,
express = require('express'),
app = express(),
http = require('http').Server(app),
io = require('socket.io')(http),
indiceClientes = -1,
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
  socket.on('conexionPantalla', function(){
    socketPantalla = socket;
  });
  socket.on('conexionUsr',function(){
  	socket.codigo = ++indiceClientes;
  	socketsClientes.push(socket)
  	socket.emit('conectado',socket.codigo);
  	socketPantalla.emit('nuevoFantasma',socket.codigo);
  });
  socket.on('mover',function(obj){
  	socketPantalla.emit("mover",obj);
  });
});

//Pantalla a proyectar
app.get('/pantalla', function (req, res) {
	if(habilitado === false){
		habilitado = true;
		res.sendFile(__dirname + "/pantalla.html");
	}else{
		res.send("No seas payas@ :v");
	}
});


//Mando a usar
app.get('/mando', function (req, res) {
	if (habilitado === true) {
		res.sendFile(__dirname+"/mando.html");
	}else{
		res.send("deshabilitado");
	};
});

http.listen(3000,function(){
	console.log("Iniciado");
});