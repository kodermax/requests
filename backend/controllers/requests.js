import Request from '../models/Request';

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

  async all() {
    const result = await Request.find();
    if(result) {
      this.respond.body = result;
    }
    else {
      this.respond.body = { message: 'Ошибка' };
    }
    this.respond.status = 200;
  }
  async parseRequest() {
    this.request = (this.ctx.request && this.ctx.request.body) ? this.ctx.request.body : '';
  }
  async create() {
    await this.parseRequest();
    const request = new Request(this.request);
    const result = await request.save();
    if (result) {
      this.respond.status = 201;
      this.respond.body = { id: result.id };
    } else {
      this.respond.status = 200;
      this.respond.body = { message: 'Ошибка при добавлении заявки' };
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
