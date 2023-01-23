import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

class serverBootstrap {
  public app: express.Application = express();
  private port: number = 8000;

  constructor() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
    this.app.use(cors());

    this.app.get('/api/main', (req, res) => {
      res.status(200).json({
        message: 'Hello World',
      });
    });
    this.listen();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log('Server is running on port =>' + this.port);
    });
  }
}

new serverBootstrap();
