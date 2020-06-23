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
  const [projetosBackend, setProjetosBackend] = useState([]);
  const [projetosFrontend, setProjetosFrontend] = useState(['Desenvolvimento de app', 'Front-end web']);

  //POSSUI DUAS ESTANCIAS ONDE A PRIMEIRA E QUEM VAI SER EXECUTADO E A OUTRA QUANDO
  useEffect(() => {
    //get E O METODO A SER UTILISADO E DEPOIS LISTA O ENDEREDO DEPOIS DA VIRGULA
    //then SERVE COMO UMA PAUSA ATE O COMANDO ANTERIOR TERMINAR DE EXECUTAR
    ApiServicos.get('projetos').then(response => {
      setProjetosBackend(response.data);
    });
  }, [projetosBackend, projetosFrontend]);

  // handle NOS AVISA QUE ESTA FUNCAO E EXECUTADA PELO USUARIO
  async function handleAdicionarProjetoBackend() {
    //ESCREVER DENTRO DE `` PERMITE MESCLAR TEXTO COM VARIAVEIS
    // projetosBackend.push(`Novo projeto ${ Date.now() }`);
    // setProjetosBackend([...projetosBackend, `Novo projeto ${ Date.now() }`]);
    const response = await ApiServicos.post('projetos', {
      titulo: `Novo projeto ${ Date.now() }`,
      proprietario: "Backend"
    });

    const projeto = response.data;

    setProjetosBackend([...projetosBackend, projeto]);
  }

  function handleAdicionarProjetoFrontend() { //FUNCAO DE ACAO
    //APLICACAO DA IMUTABILIDADE
    setProjetosFrontend([...projetosFrontend, `Novo projeto ${Date.now()}`]);
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
      <CabecalhoComponente titulo='Projetos Backend'>
        <ul>
          {/* key DEFINE UM CODIGO UNICO PARA O ITEN */}
          {projetosBackend.map(projetosBackend => <li key={projetosBackend.id}>{projetosBackend.titulo}</li>)}
        </ul>

        <button type="button" onClick={handleAdicionarProjetoBackend}>Adicionar projeto backend</button>
      </CabecalhoComponente>
      <CabecalhoComponente titulo='Projetos Frontend'>
        <ul>
          {projetosFrontend.map(projetosFrontend => <li key={projetosFrontend}>{projetosFrontend}</li>)}
        </ul>

        <button type="button" onClick={handleAdicionarProjetoFrontend}>Adicionar projeto frontend</button>
      </CabecalhoComponente>
      {/* width DEFINE O TAMANHO DA IMAGEM */}
      <br/><br/> {/* CRIA DUAS LINHAS EM BRANCO */}
      <img width={300} src={BackgroundImagem} alt="Importando uma imagem" />
    </> /* TERMINO DO METODO FRAGMENT */
  );
}

export default App; //SEMPRE REALIZAR A EXPORTACAO
