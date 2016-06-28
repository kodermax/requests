import User from '../models/User';

class UsersController {
  constructor(ctx, next) {
    this.db = ctx.db || null;
    this.ctx = ctx;
    this.next = next;
    this.request = {};
    this.respond = {};
    this.respond.status = null;
    this.respond.body = null;
  }

  async get() {
    const user = await User.find({ btxId: this.ctx.params.id });
    if (user) {
      this.respond.status = 200;
      this.respond.body = user;
    }
  }

  response() {
    this.ctx.status = this.respond.status || 500;
    this.ctx.body = this.respond.body || {
      code: this.ctx.status,
      data: { error: 'An internal error has occured' },
    };
    this.ctx.type = 'application/json';
  }
}
module.exports = UsersController;
