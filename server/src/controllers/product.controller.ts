import { Request, Response } from 'express';

export class ProductController {
  getProduct(req: Request, res: Response) {
    res.status(200).json({
      id: 1,
      name: 'product 1',
      price: 100,
      description: 'description 1',
      image: 'image 1',
      stock: 10,
    });
  }
}
