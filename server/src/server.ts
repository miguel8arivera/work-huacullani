import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { UserRouter } from './user/user.router';
import { ProductRouter } from './shared/router/product.router';
import { ConfigServer } from './config/config';
import { DataSource } from 'typeorm';

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

  async dbConnet(): Promise<void> {
    try {
      await new DataSource(this.typeORMconfig).initialize();
      console.log(`🚀  Database Connected`);
    } catch (error) {
      console.log(`🚀 Database Connection Error: ${error}`);
    }
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log('Server is running on port =>' + this.port);
    });
  }
}

new serverBootstrap();
