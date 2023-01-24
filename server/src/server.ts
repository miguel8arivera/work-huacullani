import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { UserRouter } from './router/user.router';
import { ProductRouter } from './router/product.router';
import { ConfigServer } from './config/config';

class serverBootstrap extends ConfigServer {
  public app: express.Application = express();
  private port: number = this.getEnviromentNumber('PORT');
  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use('/api', this.routes());

    this.listen();
  }

  routes(): Array<express.Router> {
    return [new UserRouter().router, new ProductRouter().router];
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log('Server is running on port =>' + this.port);
    });
  }
}

new serverBootstrap();
