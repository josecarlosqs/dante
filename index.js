var habilitado = false,
express = require('express'),
app = express(),
shortid = require("shortid");

//usamos la carpeta publica como recursos disponibles por http
app.use('/', express.static(__dirname+"/publico"));

//Presentacion
app.get('/', function (req, res) {
	res.sendFile(__dirname + "/presentacion.html");
});

//Pantalla a proyectar
app.get('/pantalla', function (req, res) {
	habilitado = true;
	res.sendFile(__dirname + "/pantalla.html");
});

//Mando a usar
app.get('/mando', function (req, res) {
	if (habilitado === true) {
		res.send("habilitado "+shortid.generate());
	}else{
		res.send("deshabilitado");
	};
});

var server = app.listen(3000);