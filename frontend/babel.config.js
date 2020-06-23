module.exports = {
  presets: [
    //CONVERTE O JAVACRIPT PARA UMA VERSAO COMPATIVEL COM O AMBIENTE DE TRABALHO
    '@babel/preset-env',
     //ADICIONA AS FUNCIONALIDADES BASEANDO NA VERSAO DO AMBIENTE DE TRABALHO
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
};
