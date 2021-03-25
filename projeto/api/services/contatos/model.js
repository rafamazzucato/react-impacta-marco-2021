const nodeRestful = require('node-restful');

const schema = new nodeRestful.mongoose.Schema({
    data : { type: Date, required: true},
    nome : { type: String, required: true},
    email : { type: String, required: true},
    assunto : { type: String, required: true},
    respondido : { type: Boolean, default: false},
});

exports.ContatoSchema = nodeRestful.model('contatos', schema);