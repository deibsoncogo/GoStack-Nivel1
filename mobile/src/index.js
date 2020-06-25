import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      {/* DEFINE A COR DOS ICONE E DE FUNDO NO TOPO */}
      <StatusBar barStyle='light-content' backgroundColor='#7159c1'/>
      {/* VINCULA O ESTILO NO View */}
      <View style={styles.container}>
        <Text style={styles.titulo}>Hello Word</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { //PODEMOS USAR QUALQUER NOME
    flex: 1, //ATIVA O FLEX PARA 1
    backgroundColor: '#7159C1', //COR DE FUNDO
    justifyContent: 'center', //CENTRALIZAR VERTICALMENTE
    alignItems: 'center', //CENTRALIZAR HORIZONTALMENTE
  },

  titulo: {
    color: '#ffffff', //COR DO TEXTO
    fontSize: 32, //TAMANHO DO TEXTO
    fontWeight: 'bold', //DEFINE COMO NEGRITO
  },
});
