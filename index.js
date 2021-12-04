require('./connection'); // importa el archivo de conexión
const port=process.env.PORT || 4000;
const Capitulo = require('./capitulo.js'); // importa el esquema
const capituloControl=require('./capituloControlador.js');
const express=require("express");
const bodyParser=require("body-parser");
var app = express();
var usuario

app.use("/public",express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","jade");
app.get('/',capituloControl.get);
app.post('/',capituloControl.post);
app.delete('/',capituloControl.delete);
app.put('/',capituloControl.put);
app.listen(port);
console.log("FUNCIONA en el puerto"+port);

