const express = require('express');
module.exports = server => {
    const routes = express.Router();
    server.use('/api', routes);

    const {CursoService} = require('../services/cursos');
    CursoService.register(routes, '/cursos');

    const {ContatoService} = require('../services/contatos');
    ContatoService.register(routes, '/contatos');
}