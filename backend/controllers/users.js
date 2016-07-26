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
  async all() {
    let conditions = {};
    if (this.ctx.query.conditions) {
      conditions = JSON.parse(this.ctx.query.conditions);
    }
    const result = await User.find(conditions);
    if (result) {
      this.respond.body = result;
    } else {
      this.respond.body = {message: 'Ошибка'};
    }
    this.respond.status = 200;
  }
  async get() {
    const user = await User.find({btxId: this.ctx.params.id});
    if (user) {
      this.respond.status = 200;
      this.respond.body = user;
    }
  }

  response() {
    this.ctx.status = this.respond.status || 500;
    this.ctx.body = this.respond.body || {
      code: this.ctx.status,
      data: {error: 'An internal error has occured'},
    };
    this.ctx.type = 'application/json';
  }
}
module.exports = UsersController;
