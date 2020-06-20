//COLOCAR A PRIMEIRA LETRA EM MAIUSCULA PARA COMPONENTES
//APP E UM COMPONENTE PRINCIPAL, OS DEMIAS DEVEM SER CRIADOS NA PASTA

import React from 'react'; //SEMPRE REALIZAR ESTA IMPORTACAO

import CabecalhoComponente from './components/Cabecalho';

function App() { //FUNCAO COMPONENTE
  return( //PARA UTILIZAR MAIS DE UM COMANDO PRECISAR CRIAR UM "GRUPO" FRAGMENT OU NAO
    <> {/* INICIO DO METODO FRAGMENT */}
      <h1>Hello World</h1>
      <CabecalhoComponente titulo='Tipos'> {/* titulo E UMA PROPRIEDADE */}
        <ul> {/* CRIA UM MENU */}
          <li>React</li> {/* CRIA UMA LINHA PARA O MENU */}
          <li>ReactJS</li>
          <li>React Native</li>
        </ul>
      </CabecalhoComponente>
      <CabecalhoComponente titulo='Linguagem'>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
        </ul>
      </CabecalhoComponente>
    </> /* TERMINO DO METODO FRAGMENT */
  );
}

export default App; //SEMPRE REALIZAR A EXPORTACAO
