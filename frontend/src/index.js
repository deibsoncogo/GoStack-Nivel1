//IMPORTANDO EXTENSOES
import React from 'react';
import { render } from 'react-dom';

//IMPORTANDO COMPONENTES
//DIZ QUE O ARQUIVO A IMPORTAR ESTA NA MESMA PASTA DESTE ARQUIVO: ./
import App from './App';

//ENVIA PARA O app DO index.html (ARQUIVO MAIN) ESTE COMANDOS
render(<App />, document.getElementById('app'));
