import React, { useEffect, useState } from 'react';
import { View, ScrollView, FlatList, SafeAreaView, Text, StyleSheet, StatusBar } from 'react-native';

import api from './services/api';

export default function App() {
  const [projetosBackend, setProjetosBackend] = useState([]);
  const [projetosFrontend, setProjetosFrontend] = useState([
    'Desenvolvimento de app',
    'Front-end web',
    'Gobarber',
    'Catalogo de produtos',
    'Novo projeto',
  ]);

  useEffect(() => {
    api.get('projetos').then(response => {
      setProjetosBackend(response.data);
    })
  }, []);

  return (
    <>
      {/* DEFINE A COR DOS ICONE E DE FUNDO NO TOPO */}
      <StatusBar barStyle='light-content' backgroundColor='#000000'/>
      {/* EXIBE OS ITENS NA AREA SEGURA: SafeAreaView */}
      {/* VINCULA COM O ESTILO style={styles.fundo} */}
      <SafeAreaView style={styles.fundo}>
        <View style={styles.centralizado}>
          <Text style={styles.roxo}>Hello Word</Text>
        </View>

        <Text style={styles.azul}>Frontend com ScrollView</Text>
        {/* CRIAR UMS LISTA QUE CARREGA TODAS INFORMACOES */}
        <ScrollView>
          {projetosFrontend.map(projetosFrontend => (
            <Text style={styles.laranja} key={projetosFrontend}>{projetosFrontend}</Text>
            ))}
        </ScrollView>

        <Text style={styles.rosa}>Backend com FlatList</Text>
        {/* CRIAR UMS LISTA QUE CARREGA SOMENTE AS INFORMACOES CONFIGURADA */}
        <FlatList
          style={styles.fundo}
          data={projetosBackend}
          keyExtractor={projetosBackend => projetosBackend.id}
          renderItem={({ item: projetosBackend}) => (
            <Text style={styles.verde}>{projetosBackend.titulo}</Text>
          )}
        />
      </SafeAreaView>
    </>
  );
}

//ALGUMAS CONFIGURACOES FUNCIONAM SOMENTE COM CERTOS ITENS
const styles = StyleSheet.create({
  fundo: { //PODEMOS USAR QUALQUER NOME
    flex: 1, //ATIVA O FLEX PARA 1
    backgroundColor: '#000000', //COR DE FUNDO
  },

  centralizado: { //PODEMOS USAR QUALQUER NOME
    justifyContent: 'center', //CENTRALIZAR VERTICALMENTE
    alignItems: 'center', //CENTRALIZAR HORIZONTALMENTE
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

  rosa: {
    color: '#d91b5c',
    fontSize: 30,
    fontWeight: 'bold'
  },
  
  roxo: {
    color: '#7159c1',
    fontSize: 40,
    fontWeight: 'bold'
  },
  
  verde: {
    color: '#00ae6f',
    fontSize: 20,
    fontWeight: 'bold'
  },
});
