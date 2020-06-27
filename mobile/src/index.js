import React, { useEffect, useState } from 'react';
import { 
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import api from './services/api';

export default function App() {
  const [projetosBackend, setProjetosBackend] = useState([]);
  const [projetosFrontend, setProjetosFrontend] = useState([
    'Desenvolvimento de app',
    'Front-end web',
  ]);

  useEffect(() => {
    api.get('projetos').then(response => {
      setProjetosBackend(response.data);
    })
  }, []);

  async function usuarioAdicionarProjetoBackend() {
    const response = await api.post('projetos', {
      titulo: `Novo ${Date.now()}`,
      proprietario: `Norton ${Date.now()}`
    });
    
    setProjetosBackend([...projetosBackend, response.data]);
  }

  async function usuarioAdicionarProjetoFrontend() {
    setProjetosFrontend([...projetosFrontend, `NPM ${Date.now()}`]);
  }

  return (
    <>
      {/* DEFINE A COR DOS ICONE E DE FUNDO NO TOPO */}
      <StatusBar hidden={true} barStyle='light-content' backgroundColor='#000000'/>
      {/* EXIBE OS ITENS NA AREA SEGURA: SafeAreaView */}
      {/* VINCULA COM O ESTILO style={estilo.fundo} */}
      <SafeAreaView style={estilo.fundo}>
        <View style={estilo.centralizado}>
          <Text style={estilo.roxo}>Hello Word</Text>
        </View>

        {/* LISTA DO BACKEND */}
        <Text style={estilo.ouro}>Backend com FlatList</Text>
        {/* CRIAR UMS LISTA QUE CARREGA SOMENTE AS INFORMACOES CONFIGURADA */}
        <FlatList
          data={projetosBackend}
          keyExtractor={projetosBackend => projetosBackend.id}
          renderItem={({ item: projetosBackend}) => (
            <Text style={estilo.verde}>{projetosBackend.titulo}</Text>
          )}
        />

        {/* BOTAO PARA ADICIONAR PROJETO NO BACKEND */}
        <TouchableOpacity activeOpacity={0.75} style={estilo.botao} onPress={usuarioAdicionarProjetoBackend}>
          <Text style={estilo.branco}>ADICIONAR PROJETO BACKEND</Text>
        </TouchableOpacity>

        {/* LISTA DO FRONTEND */}
        <Text style={estilo.azul}>Frontend com ScrollView</Text>
        {/* CRIAR UMS LISTA QUE CARREGA TODAS INFORMACOES */}
        <ScrollView>
          {projetosFrontend.map(projetosFrontend => (
            <Text style={estilo.laranja} key={projetosFrontend}>{projetosFrontend}</Text>
            ))}
        </ScrollView>
        
        {/* BOTAO PARA ADICIONAR PROJETO NO FRONTEND */}
        <TouchableOpacity activeOpacity={0.75} style={estilo.botao} onPress={usuarioAdicionarProjetoFrontend}>
          <Text style={estilo.branco}>ADICIONAR PROJETO FRONTEND</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

//ALGUMAS CONFIGURACOES FUNCIONAM SOMENTE COM CERTOS ITENS
const estilo = StyleSheet.create({
  fundo: { //PODEMOS USAR QUALQUER NOME
    flex: 1, //ATIVA O FLEX PARA 1
    backgroundColor: '#000000', //COR DE FUNDO
  },

  centralizado: { //PODEMOS USAR QUALQUER NOME
    justifyContent: 'center', //CENTRALIZAR VERTICALMENTE
    alignItems: 'center', //CENTRALIZAR HORIZONTALMENTE
  },

  botao: {
    backgroundColor: '#d91b5c',
    margin: 40, //MARGEM
    height: 50, //ALTURA
    borderRadius: 5, //ARREDONDAMENTO DO CANTO
    justifyContent: 'center',
    alignItems: 'center',
  },

  branco: {
    color: '#ffffff', //COR DO TEXTO
    fontSize: 17, //TAMANHO DO TEXTO
    fontWeight: 'bold' //TEXTO EM NEGRITO
  },
  
  roxo: {
    color: '#7159c1',
    fontSize: 40,
    fontWeight: 'bold'
  },
  
  azul: {
    color: '#01b4e7', //COR DO TEXTO
    fontSize: 30, //TAMANHO DO TEXTO
    fontWeight: 'bold' //TEXTO EM NEGRITO
  },

  laranja: {
    color: '#ff7600',
    fontSize: 20,
    fontWeight: 'bold'
  },
  
  ouro: {
    color: '#f7a81b',
    fontSize: 30,
    fontWeight: 'bold'
  },

  verde: {
    color: '#00ae6f',
    fontSize: 20,
    fontWeight: 'bold'
  },
});
