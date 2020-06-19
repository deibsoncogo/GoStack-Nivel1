const express = require('express'); //REALIZAR A IMPORTACAO DE UMA BIBLIOTECA
const { response } = require('express');

const app = express(); //CRIA UMA VARIAVEL PARA PODER UTILIZAR AS FERRAMENTAS DO EXPRESS

app.use(express.json()); //ENSINA O EXPRESS A UTILIZAR JSON

//DEFINE AS ROTAS DO PROGRAMA
app.get('/', (request, response) => { //GET = CONSULTAR
  return response.json(['Hello Word']); //ENVIA UMA MENSAGEM EM JSON
});

//O QUE VEM DEPOIS DA BARRA CHAMAMOS DE RECURSO
app.get('/projetos', (request, response) => {
  //RECEBE E IMPRIMI TODOS TIPOS DE INFORMACAO NO QUERY
  const query = request.query;
  console.log(query);
  
  //DEFINE QUAIS INFORMACOES QUER RECEBER E IMPRIMIR
  const { titulo, proprietario } = request.query;
  console.log(titulo, proprietario);

  return response.json([
    'Projeto 1',
    'Projeto 2',
  ]); //ENVIA UMA MENSAGEM
});

app.post('/projetos', (request, response) => { //POST = CRIAR
  const { titulo, proprietario } = request.body;

  console.log(titulo, proprietario);

   return response.json([
     'Projeto 1',
     'Projeto 2',
     'Projeto 3',
   ]);
});

//O : DEFINE QUE DEVEMOS RECEBER UM PARAMETRO
app.put('/projetos/:id', (request, response) => { //PUT = ALTERAR
  const { id } = request.params;

  console.log(id);

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
  console.log('SERVIDOR NO AR'); //A FUNCAO EXECUTA ESTA MENSAGEM
});
