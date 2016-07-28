import Category from '../models/Category';

class CategoriesController {
  constructor (ctx, next) {
    this.db = ctx.db || null;
    this.ctx = ctx;
    this.next = next;
    this.request = {};
    this.respond = {};
    this.respond.status = null;
    this.respond.body = null;
  }

  async getFields () {
    const category = await Category.find({'items.code': this.ctx.params.code});
    if (category) {
      this.respond.status = 200;
      this.respond.body = category[0].items[0].fields;
    }
  }

  response () {
    this.ctx.status = this.respond.status || 500;
    this.ctx.body = this.respond.body || {
      code: this.ctx.status,
      data: {error: 'An internal error has occured'}
    };
    this.ctx.type = 'application/json';
  }
}
module.exports = CategoriesController;
