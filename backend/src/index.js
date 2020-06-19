const express = require('express'); //REALIZAR A IMPORTACAO DE UMA BIBLIOTECA

const app = express(); //CRIA UMA VARIAVEL PARA PODER UTILIZAR AS FERRAMENTAS DO EXPRESS

//DEFINE AS ROTAS DO PROGRAMA
app.get('/', (request, response) => { //GET = CONSULTAR
  return response.json({ message: 'Hello Word - Inicio' }); //ENVIA UMA MENSAGEM EM JSON
});

app.get('/projetos', (request, response) => {
  return response.send('Hello Word - Projetos'); //ENVIA UMA MENSAGEM EM SEND
});

//DEFINE UMA PORTA PARA EXECUCAO POIS O CAMINHO SEMPRE É localhost
//listen PODE RECEBER UMA FUNCAO ASSIM PODENDO CRIAR MAIS COMANDOS
app.listen(3333, () => {
  console.log('SERVIDOR EXECUTANDO 😎🚀'); //A FUNCAO EXECUTA ESTA MENSAGEM
});
