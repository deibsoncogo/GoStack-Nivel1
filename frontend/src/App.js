//COLOCAR A PRIMEIRA LETRA EM MAIUSCULA PARA COMPONENTES
//APP E UM COMPONENTE PRINCIPAL, OS DEMIAS DEVEM SER CRIADOS NA PASTA

//useState REALIZA A IMPLEMENTACAO DE ESTADO E IMUTABILIDADE
//useEffect REALIZAR A IMPLEMENTACAO DO GATINHO QUE ATIVA FUNCOES QUANDO SOLICITADO
import React, { useState, useEffect } from 'react'; //SEMPRE REALIZAR ESTA IMPORTACAO

import './App.css'; //IMPORTACAO DO ARQUIVOS DE ESTILOS

import ApiServicos from './services/api'; //IMPORTACAO DO VINCULO COM O BACKEN
import BackgroundImagem from './assets/fundo1.png';
import CabecalhoComponente from './components/Cabecalho';

function App() { //FUNCAO COMPONENTE
  //TRANSFORMAR UMA VARIAVEL COM ESTADO BASTA UTILIZAR O COMANDO: useState
  //ELA CRIA UM ARRAY COM DOIS CAMPOS DA CADA INFORMACAO
  //NO PRIMEIRO SERA O VALOR ATUAL E NO OUTRO O NOVO
  //AO VINCULA COM O BACKEND ESTE METODO NAO FUNCIONA MAIS POIS DEVE INICIAR EM BRANCO
  // const [projetos, setProjetos] = useState(['Desenvolvimento de app', 'Front-end web']);
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    ApiServicos.get('projetos').then(response => {
      setProjetos(response.data);
    });
  }, []);

  // handle NOS AVISA QUE ESTA FUNCAO E EXECUTADA PELO USUARIO
  async function handleAdicionarProjeto() {
    //ESCREVER DENTRO DE `` PERMITE MESCLAR TEXTO COM VARIAVEIS
    // projetos.push(`Novo projeto ${ Date.now() }`);
    // setProjetos([...projetos, `Novo projeto ${ Date.now() }`]);
    const response = await ApiServicos.post('projetos', {
      titulo: `Novo projeto ${ Date.now() }`,
      proprietario: "Visual Studi Code"
    });

    const projeto = response.data;

    setProjetos([...projetos, projetos]);
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
          {/* {projetos.map(projetos => <li key={projetos}>{projetos}</li>)} */}
          {projetos.map(projetos => <li key={projetos.id}>{projetos.titulo}</li>)}
        </ul>

        <button type="button" onClick={handleAdicionarProjeto}>Adicionar projeto</button>
      </CabecalhoComponente>
      {/* width DEFINE O TAMANHO DA IMAGEM */}
      <img width={300} src={BackgroundImagem} alt="Importando uma imagem" />
    </> /* TERMINO DO METODO FRAGMENT */
  );
}

export default App; //SEMPRE REALIZAR A EXPORTACAO
