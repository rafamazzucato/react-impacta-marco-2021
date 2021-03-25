const nodeRestful = require('node-restful');
const mongoose = nodeRestful.mongoose;

const schemaAtividade = new mongoose.Schema({
    descricao : {type: String, required: true},
    duracao: {type: Number}
});

const schemaPrincipal = new mongoose.Schema({
    nome: {type: String, required : true},
    endereco: {type: String},
    avaliacao: {type: Number, default: 0, min: 0, max: 5},
    atividades: [schemaAtividade]
});

exports.ClienteSchema = nodeRestful.model('clientes', schemaPrincipal);
//export { schemaPrincipal as ClienteSchema}