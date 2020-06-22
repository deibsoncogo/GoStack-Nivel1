const path = require('path'); //REALIZA UMA IMPORTCAO

module.exports = {
  //A UTILISACAO DA / OU DA \ PARA INFORMACAR UM CAMINHO PODE GERAR ERRO
  //('./src/index.js')
  //O METODO ABAIXO E O RECOMENDADO A UTILIZAR
  entry: path.resolve(__dirname, 'src', 'index.js'), //INFORMA A LOCALISACAO DO MAIN
  output: {
    path: path.resolve(__dirname, 'public'), //DEFINE ONDE CRIAR O ARQUIVO COMPATIVEL
    filename: 'bundle.js' //DEFINE O NOME DO ARQUIVO COMPATIVEL
  },
  devServer: {
    //INFORMA O CAMINHO DOS ARQUIVOS PUBLICO
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: { //INFORMA AO SISTEMA OQUE FAZER AO LER OS ARQUIVOS
    rules: [
      {
        //PARA UTILIZAR UM PONTO: \.
        //PARA DEFINE QUE A EXTENCAO DEVE TERMINAR COM O QUE VEM ANTES DELE: $
        test: /\.js$/, //DEFINE A REGRA PARA ESTE TIPO DE ARQUIVO
        exclude: /node_modules/, //FALA PARA IGNORAR OS ARQUIVOS DESTA PASTA
        use: {
          loader: 'babel-loader', //INFORMA QUAL DEPENDENCIA UTILIZAR
        }
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [ //PARA DEFINIR MAIS DE UMA EXTENSAO ABRA []
          {loader: 'style-loader'}, //INJETA O CSS NO HTML
          {loader: 'css-loader'}, //LE OS ARQUIVOS CSS INCLUINDO AS IMPORTACOES
        ]
      },

      { //PARA USAR MAIS DE UM TIPO DE ARQUIVO USAMOS: (extensao1 | extensao2 | extensao2)
        //PARA IGNORAR SE TEM ALGUMA LETRA EM MAIUSCULA UTILIZE O COMANDO: i
        //PARA TORNAR ALGO DISPENSAVEL UTILIZE O COMANDO: ?
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  },
};

/** EXPLICACAO DA REGRA CRIADA ACIMA
* ELA DEFINIR QUE QUANDO PRECISAR DE UM ARQUIVO
* JAVASCRIPT (.js) COM UMA VERSAO ANTIGA E ELE
* NAO ESTIVER NA PASTA node_modules REALISE A
* CONVERSAO DELE UTILISANDO O babel-loader
*/
