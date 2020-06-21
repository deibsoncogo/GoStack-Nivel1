//COLOCAR A PRIMEIRA LETRA EM MAIUSCULA PARA COMPONENTES
//APP E UM COMPONENTE PRINCIPAL, OS DEMIAS DEVEM SER CRIADOS NA PASTA

import React, { useState } from 'react'; //SEMPRE REALIZAR ESTA IMPORTACAO

import CabecalhoComponente from './components/Cabecalho';

function App() { //FUNCAO COMPONENTE
  //TRANSFORMAR UMA VARIAVEL COM ESTADO BASTA UTILIZAR O COMANDO: useState
  //ELA CRIA UM ARRAY COM DOIS CAMPOS DA CADA INFORMACAO
  //NO PRIMEIRO SERA O VALOR ATUAL E NO OUTRO O NOVO
  //AO VINCULA COM O BACKEND ESTE METODO NAO FUNCIONA MAIS POIS DEVE INICIAR EM BRANCO
  const [projetos, setProjetos] = useState(['Desenvolvimento de app', 'Front-end web']);

  // handle NOS AVISA QUE ESTA FUNCAO E EXECUTADA PELO USUARIO
  function handleAdicionarProjeto() {
    //ESCREVER DENTRO DE `` PERMITE MESCLAR TEXTO COM VARIAVEIS
    // projetos.push(`Novo projeto ${ Date.now() }`);
    setProjetos([...projetos, `Novo projeto ${ Date.now() }`]);
  }

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
      <CabecalhoComponente titulo='Projetos'>
        <ul>
          {/* key DEFINE UM CODIGO UNICO PARA O ITEN */}
          {projetos.map(projetos => <li key={projetos}>{projetos}</li>)}
        </ul>

        <button type="button" onClick={handleAdicionarProjeto}>Adicionar projeto</button>
      </CabecalhoComponente>
    </> /* TERMINO DO METODO FRAGMENT */
  );
}

export default App; //SEMPRE REALIZAR A EXPORTACAO
