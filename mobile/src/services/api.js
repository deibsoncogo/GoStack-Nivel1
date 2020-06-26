import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.103:3333',
})

export default api;

/** TIPOS DE ENDERECO
 * iOS =>
 *  EMULADOR: LOCALHOST:PORTA
 *  FISICO: IP DA MAQUINA:PORTA
 * 
 * ANDROID =>
 *  EMULADOR (COM ALTERCAO DA PORTA): LOCALHOST:PORTA
 *  EMULADOR (SEM ALTERCAO DA PORTA): 10.0.2.2:PORTA
 *  FISICO: IP DA MAQUINA:PORTA
 * 
 * PARA ALTERA A PORTA: adb reverse tcp:XXXX tcp:XXXX
 */
