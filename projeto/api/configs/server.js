const express = require('express');
const cors = require('./cors');

const port = 3200;
const server = express();

server.use(express.urlencoded({extended: true}));
server.use(express.json());
server.use(cors);

server.listen(port, () => console.log(`Servidor no ar na porta ${port}`));
module.exports = server;