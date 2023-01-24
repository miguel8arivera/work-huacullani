import { UserController } from '../controllers/user.controller';
import { BaseRoute } from './router';

export class UserRouter extends BaseRoute<UserController> {
  constructor() {
    super(UserController);
  }

  routes(): void {
    this.router.get('/user', (req, res) => this.controller.getUser(req, res));
  }
}
