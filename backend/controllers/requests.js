const RequestModel = require('../models/Request');

class Requests {
  constructor(ctx, next) {
    this.db = ctx.db || null;
    this.ctx = ctx;
    this.next = next;
    this.request = {};
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
  async parseRequest() {
    this.request = (this.ctx.request && this.ctx.request.body) ? this.ctx.request.body : '';
  }
  async create() {
    await this.parseRequest();
    const result = await this.model().create(this.request);
    if (result.errors >= 1) {
      this.respond.status = 200;
      this.respond.body = { error: true, errorMessage: 'Ошибка при добавлении' };
    }
    else if (result.changes[0].new_val) {
      this.respond.status = 201;
      this.respond.body = { id: result.changes[0].new_val.id };
    }
  }
  async fields() {
    const result = await this.model().fields(this.ctx.params.code);
    this.respond.status = 200;
    this.respond.body = result;
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
module.exports = Requests;
