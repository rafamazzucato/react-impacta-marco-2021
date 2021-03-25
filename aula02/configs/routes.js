const express = require('express');

module.exports = server => {
    const router = express.Router();
    
    server.use('/api', router);

    const {ClienteService} = require('../api/cliente/service');
    ClienteService.register(router, '/cliente');
}