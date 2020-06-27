interface Usuario {
  nome?: string, //? FALA QUE A VARIAVEL NAO E OBRIGATORIA
  email: string,
  senha: string | number; //DEFINE QUE PODE SER UM DOS DOIS TIPOS
  dicaDaSenha?: string[]; //CRIAR UM ARRAY ONDE PODE SOMENTE UM TIPO
  tecnologias: Array<string | number>; //CRIAR UM ARRAY COM VARIOS TIPOS DE DADOS SEM NOMEACAO
  logradouro: Array<UsuarioLogradouro>; //CRIAR UM ARRAY COM VARIOS TIPOS DE DADOS E NOMEACAO
}

interface UsuarioLogradouro {
  endereco: string;
  numero: number;
  bairro: string;
  interior: boolean;
}

//PODEMOS DEFINIR A TIPAGEM NESTE METODOS
//DA PARA REALIZAR UMA DESESTRUTURACAO DOS ITENS TRANSFORMANDO EM OBJETO
//export default function CriarUsuario(nome = '', email: string, senha: Number) {
export default function CriarUsuario({ nome, email, senha, tecnologias, logradouro }: Usuario) {
  const usuario = {
    nome,
    email,
    senha,
    tecnologias,
    logradouro,
  }

  return usuario;
}
