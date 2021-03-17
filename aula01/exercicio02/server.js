// requisitou o módulo http do Node.js
const http = require('http');

// criamos uma função que vai tratar todas as requisicoes feitas 
// no nosso servidor e vamos retornar uma resposta padrao
const tratamentoRequisicoes = (requisicao, resposta) => {
    resposta.writeHead(200, { "Content-Type" : "text/html"});

    if(requisicao.url && requisicao.url.includes('ola')){
        resposta.write("<h1>Ola</h1>");    
    }else{
        resposta.write("<h1>Meu primeiro site Node.js</h1>");
    }
    
    resposta.end();
}

// cria uma constante para o servidor
// cujo valor é o resultado da função createServer passando
// o tratamento das requisicoes
const servidor = http.createServer(tratamentoRequisicoes);

// subiu nosso servidor na porta 3000
// e notificou no console através de callback
// que o servidor está no ar
servidor.listen(3000, () => console.log('Servidor no ar na porta : 3000'));