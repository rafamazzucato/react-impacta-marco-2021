// requisita o modulo node do mongoose (precisa estar instalado para rodar)
const mongoose = require('mongoose');

// atrubuiu a Promise Global do Node para a Promise do mongoose
// evitar warnning de asyncrono
mongoose.Promise = global.Promise;

// exporta default o resultado da funcao connecto
// passando a url de conexao do banco e os param obrigatorios
// para evitar warnnings
module.exports = mongoose.connect('mongodb://localhost:27017/exercicio02DB', { useNewUrlParser: true, useUnifiedTopology: true });