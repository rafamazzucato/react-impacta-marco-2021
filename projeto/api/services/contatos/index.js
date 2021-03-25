const {ContatoSchema} = require('./model');

ContatoSchema.methods(['get', 'post', 'put']);
ContatoSchema.updateOptions({ new: true, runValidators: true});

exports.ContatoService = ContatoSchema;