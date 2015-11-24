var habilitado = false,
express = require('express'),
app = express(),
shortid = require("shortid");

//usamos la carpeta publica como recursos disponibles por http
app.use('/publico', express.static(__dirname+'/public'));

//Presentacion
app.get('/', function (req, res) {
	habilitado = true;
	res.send(habilitado);
});

//Pantalla a proyectar
app.get('/pantalla', function (req, res) {
	habilitado = true;
	res.send(habilitado);
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