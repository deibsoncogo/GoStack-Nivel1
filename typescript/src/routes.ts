import { Request, Response } from 'express';

import CriarUsuarioServico from './services/CriarUsuario';

export function helloWord(request: Request, response: Response) {
  const usuario = CriarUsuarioServico({
    nome: 'Deibson Cogo',
    email: 'deibsoncogoestudo@outlook.com',
    senha: '123456',
    tecnologias: ['Node.JS', 'JavaScript', 'React'],
    logradouro: [{
      endereco: 'Rua Mexico',
      numero: 96,
      bairro: 'São Benedito',
      interior: true,
    }],
  });

  console.log(usuario);

  return response.json({ message: 'Hello Word'});
}
