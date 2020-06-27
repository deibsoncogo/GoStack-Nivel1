import { Request, Response } from 'express';

export function helloWord(request: Request, response: Response) {
  return response.json({ message: 'Hello Word'});
}
