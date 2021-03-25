const {CursoSchema} = require('./model');

CursoSchema.methods(['get', 'post', 'put', 'delete']);
CursoSchema.updateOptions({ new : true, runValidators: true});

exports.CursoService = CursoSchema;