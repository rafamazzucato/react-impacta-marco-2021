// requisita os módulos obrigatórios para criar o servidor
const express = require('express');

// cria as constantes e instancia o servidor
const port = 3200;
const server = express();

// adiciona os middlewares no servidor cada um com sua resp.
// 1o adiciona o middleware que trata url com caracteres especiais
// 2o adiciona o middleware que trava a api para só conversar em json
server.use(express.urlencoded({extended: true}));
server.use(express.json());

// sobe o servidor na porta e envia o callback
server.listen(port, () => console.log(`Servidor no ar na porta ${port}`));

// exporta o modulo default com o resultado do server
module.exports = server;