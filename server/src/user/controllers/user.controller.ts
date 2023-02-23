import { Request, Response } from 'express';

export class UserController {
  getUser(req: Request, res: Response) {
    res.status(200).json({
      user: 'Miguel Angel ',
      lastName: 'Ochoa Rivera',
      email: 'miguel@gmail.com',
      password: 'secret',
      numberPhone: 123456789,
      rol: 'admin',
    });
  }
}
