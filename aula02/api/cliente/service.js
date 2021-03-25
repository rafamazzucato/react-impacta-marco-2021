const { ClienteSchema } = require('./model');

ClienteSchema.methods(['get', 'post', 'put', 'delete']);
ClienteSchema.updateOptions({ new: true, runValidators: true});

exports.ClienteService = ClienteSchema;