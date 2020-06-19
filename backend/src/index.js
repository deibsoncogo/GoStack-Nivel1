const express = require('express'); //REALIZAR A IMPORTACAO DE UMA BIBLIOTECA
const { response } = require('express');

const app = express(); //CRIA UMA VARIAVEL PARA PODER UTILIZAR AS FERRAMENTAS DO EXPRESS

//DEFINE AS ROTAS DO PROGRAMA
app.get('/', (request, response) => { //GET = CONSULTAR
  return response.json(['Hello Word']); //ENVIA UMA MENSAGEM EM JSON
});

//O QUE VEM DEPOIS DA BARRA CHAMAMOS DE RECURSO
app.get('/projetos', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
  ]); //ENVIA UMA MENSAGEM EM SEND
});

app.post('/projetos', (request, response) => { //POST = CRIAR
   return response.json([
     'Projeto 1',
     'Projeto 2',
     'Projeto 3',
   ]);
});

//O : DEFINE QUE DEVEMOS RECEBER UM PARAMETRO
app.put('/projetos/:id', (request, response) => { //PUT = ALTERAR
  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.delete('/projetos/:id', (request, response) => { //DELETE = DELETAR
  return response.json([
    'Projeto 4',
    'Projeto 3',
  ]);
});

//DEFINE UMA PORTA PARA EXECUCAO POIS O CAMINHO SEMPRE É localhost
//listen PODE RECEBER UMA FUNCAO ASSIM PODENDO CRIAR MAIS COMANDOS
app.listen(3333, () => {
  console.log('SERVIDOR EXECUTANDO 😎'); //A FUNCAO EXECUTA ESTA MENSAGEM
});
