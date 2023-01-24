import { ProductController } from '../controllers/product.controller';
import { BaseRoute } from './router';

export class ProductRouter extends BaseRoute<ProductController> {
  constructor() {
    super(ProductController);
  }

  routes(): void {
    this.router.get('/product', (req, res) =>
      this.controller.getProduct(req, res)
    );
  }
}
