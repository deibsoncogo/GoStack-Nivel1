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
      }
    ]
  },
}
