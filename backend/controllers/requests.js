const RequestModel = require('../models/Request');

class Request {
  constructor(ctx, next) {
    this.db = ctx.db || null;
    this.ctx = ctx;
    this.next = next;

    this.respond = {};
    this.respond.status = null;
    this.respond.body = null;
  }

  model() {
    return new RequestModel(this.db);
  }

  async all() {
    this.respond.body = await this.model().all();
    this.respond.status = 200;
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
module.exports = Request;
