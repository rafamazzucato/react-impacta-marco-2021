const nodeRestful = require('node-restful');

const schema = new nodeRestful.mongoose.Schema({
    codigo : {type : Number, required: true},
    descricao : {type : String, required: true},
    cargaHoraria : {type : Number, required: true, min: 4},
    preco : {type : Number, default: 0 , min: 0},
    categoria : {type : String, uppercase: true, 
        enum:['INFORMATICA', 'ENGENHARIA', 'ADMINISTRACAO', 'REDES']},
});

exports.CursoSchema = nodeRestful.model('cursos', schema); 