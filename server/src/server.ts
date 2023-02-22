import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { UserRouter } from './router/user.router';
import { ProductRouter } from './router/product.router';
import { ConfigServer } from './config/config';
import { Connection, createConnection } from 'typeorm';

class serverBootstrap extends ConfigServer {
  public app: express.Application = express();
  private port: number = this.getEnviromentNumber('PORT') || 3000;
  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.dbConnet();
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use('/api', this.routes());

    this.listen();
  }

  routes(): Array<express.Router> {
    return [new UserRouter().router, new ProductRouter().router];
  }

  async dbConnet(): Promise<Connection> {
    return await createConnection(this.typeORMconfig);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log('Server is running on port =>' + this.port);
    });
  }
}

new serverBootstrap();
