var habilitado = false,
	express = require('express'),
	app = express();
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
		res.send("habilitado");
	}else{
		res.send("deshabilitado");
	};
});

var server = app.listen(3000);