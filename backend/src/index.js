const express = require('express'); //REALIZAR A IMPORTACAO DE UMA BIBLIOTECA

const app = express(); //CRIA UMA VARIAVEL PARA PODER UTILIZAR AS FERRAMENTAS DO EXPRESS

//DEFINE AS ROTAS DO PROGRAMA
app.get('/', (request, response) => { //GET = CONSULTAR
  return response.json({ message: 'Hello Word' }); //ENVIA UMA MENSAGEM EM JSON
});

app.get('/projetos', (request, response) => {
  return response.send('Hello Word'); //ENVIA UMA MENSAGEM EM SEND
});

//DEFINE UMA PORTA PARA EXECUCAO POIS O CAMINHO SEMPRE É localhost
app.listen(3333);
