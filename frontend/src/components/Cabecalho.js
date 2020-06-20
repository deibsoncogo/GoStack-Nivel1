import React from 'react';

//A EXPORTACAO TAMBEM PODE SER INFORMADA ASSIM
//PARA INFORMAR MAIS UM COMANDO NA FUNCAO UTILIZAR {}
export default function Cabecalho({ titulo, children }) {
  return(
    <header>
      {/* PARA USAR COMANDO JAVA DENTRO DE HTML: {} */}
      <h1>Grupo: { titulo }</h1>

      { children }
    </header>
  );
}

/** ANOTACOES
 * PARA CHAMAR TODAS PROPRIEDADE PODEMOS USAR O COMANDO props
 * CASO CONTRARIO EXPECIFIQUE A PROPRIEDADE DENTRO DE {}
 */
