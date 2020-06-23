import axios from 'axios';  //VINCULA O FRONTEND COM O BACKEND

const api = axios.create({ //CRIA UMA INSTANCIA
  baseURL: 'http://localhost:3333'
});

export default api;
