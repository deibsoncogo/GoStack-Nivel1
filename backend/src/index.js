const express = require('express'); //REALIZAR A IMPORTACAO DE UMA BIBLIOTECA
const cors = require('cors');
const { uuid, isUuid } = require('uuidv4'); //IMPORTA UMA FUNCAO ESPECIFICA

const app = express(); //CRIA UMA VARIAVEL PARA PODER UTILIZAR AS FERRAMENTAS DO EXPRESS

app.use(cors({
  // origin: 'http:/localhost:3000'
}));
app.use(express.json()); //ENSINA O EXPRESS A UTILIZAR JSON

//TRANSFORMA UMA VARIAVEL EM BANCO DE DADOS
const projetos = []; //ELE RESETA TODA VEZ QUE O SERVIDOR E EXECUTADO

//CRIACAO DE UM MIDDLEWARES
function LogRequesicao(request, response, next) {
  const { method, url } = request;

  //toUpperCase() CONVERTE O TEXTO PARA MAIUSCULA
  const log = `[${method.toUpperCase()}] ${url}`;

  //console.log(log); //IMPRIMI O VALOR DA VARIAVEL
  console.time(log); //INICIA UM CRONOMETRO
  next(); //CHAMA O PROXIMO MIDDLEWARES
  console.timeEnd(log); //TERMINA O CRONOMETRO
}

//MIDDLEWARE PARA VERIFICAR SE E VALIDO O ID
function ValidacaoID(request, response, next) {
  const { id } = request.params;

  if(!isUuid(id)) {
    return response.status(400).json({ error: 'ID do projeto inválido'});
  }

  return next();
}

app.use(LogRequesicao); //FAZ ESTE MIDDLEWARE EXECUTAR TODA VEZ
//app.use('/projetos/:id', validacaoIDProjeto); //EXECUTA SOMENTE NESTE CAMINHO

//DEFINE AS ROTAS DO PROGRAMA
app.get('/', (request, response) => { //GET = CONSULTAR
  return response.json(['Hello Word']); //ENVIA UMA MENSAGEM EM JSON
});

//O QUE VEM DEPOIS DA BARRA CHAMAMOS DE RECURSO
app.get('/projetos', (request, response) => {
  //RECEBE E IMPRIMI TODOS TIPOS DE INFORMACAO NO QUERY
  //const query = request.query;
  //console.log(query);
  
  //DEFINE QUAIS INFORMACOES QUER RECEBER E IMPRIMIR
  const { titulo } = request.query;
  console.log(titulo);

  //VERIFICA SE INFORMAMOS UM TITULO PARA PESQUISA
  //CASO CONTRARIO RETORNA TUDO
  const filtragem = titulo
    ? projetos.filter(projeto => projeto.titulo.includes(titulo))
    : projetos

    /** FORMA DE ENVIAR UMA MENSAGEM
     return response.json([
       'Projeto 1',
       'Projeto 2',
      ]);
      */

  return response.json(filtragem);
});

app.post('/projetos', (request, response) => { //POST = CRIAR
  const { titulo, proprietario } = request.body;

  //MANIPULA AS INFORMACOES RECEBIDA
  const projeto = {
    id: uuid(), //UTILIZA O UUID PARA CRIAR UM ID
    titulo,
    proprietario,
  }

  projetos.push(projeto); //JOGA AS INFORMACOES DO PROJETO DENTRO DE PROJETOS

  return response.json(projeto); //IMPRIMI AS INFORMACOES DE PROJETO
});

//O : DEFINE QUE DEVEMOS RECEBER UM PARAMETRO
app.put('/projetos/:id', ValidacaoID, (request, response) => { //PUT = ALTERAR
  const { id } = request.params;
  const { titulo, proprietario } = request.body;

  //BUSCA A POSICAO DO ID INFORMADO NO BANCO DE DADOS
  const projetoIndex = projetos.findIndex(projeto => projeto.id === id);

  //VERIFICA SE ACHOU O ID NO BANCO DE DADOS
  if(projetoIndex < 0) {
    return response.status(400).json({ error: 'Projeto não existe' });
  }

  //CRIA UMA VARIAVEL PARA PODER MANIPULAR COM FACILIDADE OS DADOS
  const projeto = {
    id,
    titulo,
    proprietario,
  }

  //SALVA OS NOVOS DADOS NO BANCO DE DADOS
  projetos[projetoIndex] = projeto;

  return response.json(projeto);
});

//ValidacaoID: ATIVA O MIDDLEWARE COM ESTE NOME
app.delete('/projetos/:id', ValidacaoID, (request, response) => { //DELETE = DELETAR
  const { id } = request.params;

  //VERIFICA SE EXISTE O ID E SALVA A POSICAO
  const projetoIndex = projetos.findIndex(projeto => projeto.id === id);

  //CASO NAO TIVER UMA POSICAO SALVA INFORMAR UMA MENSAGEM
  if(projetoIndex < 0) {
    return response.status(400).json({ error:'Projeto não existe' })
  }

  //EXCLUI AS INFORMACOES DO ARRAY BD DESTA POSICAO
  projetos.splice(projetoIndex, 1);

  return response.status(204).send();
});

//DEFINE UMA PORTA PARA EXECUCAO POIS O CAMINHO SEMPRE É localhost
//listen PODE RECEBER UMA FUNCAO ASSIM PODENDO CRIAR MAIS COMANDOS
app.listen(3333, () => {
  console.log('SERVIDOR DO BACKEND NO AR'); //A FUNCAO EXECUTA ESTA MENSAGEM
});
