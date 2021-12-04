const mongoose = require('mongoose');

const capituloSchema = new mongoose.Schema({
	  name: String,
	  numeroDePag: Number
});

const Capitulo = mongoose.model('Capitulo', capituloSchema);

module.exports = Capitulo;
