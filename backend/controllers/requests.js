import Approval from '../models/Approval';
import Request from '../models/Request';
import User from '../models/User';
import Category from '../models/Category';

class Requests {
  constructor (ctx, next) {
    this.db = ctx.db || null;
    this.ctx = ctx;
    this.next = next;
    this.request = {};
    this.respond = {};
    this.respond.status = null;
    this.respond.body = null;
  }

  async all () {
    let conditions = {};
    if (this.ctx.query.conditions) {
      conditions = JSON.parse(this.ctx.query.conditions);
    }
    const result = await Request.find(conditions).populate('author').sort({requestId: 'desc'});
    if (result) {
      this.respond.body = result;
    } else {
      this.respond.body = {message: 'Ошибка'};
    }
    this.respond.status = 200;
  }
  async get () {
    const result = await Request.findOne({requestId: this.ctx.params.id});
    if (result) {
      this.respond.body = result;
    } else {
      this.respond.body = {message: 'Ошибка'};
    }
    this.respond.status = 200;
  }
  async getActions () {
    let actions = {};
    //const request = await Request.find({requestId: this.ctx.params.id});
    const approval = await Approval.find({
      requestId: this.ctx.params.id,
      'approvers.userId': this.ctx.passport.user.id
    });
    if (approval) {
      actions = [{'code': 'approve', 'title': 'Согласовать'}, {'code': 'decline', 'title': 'Отказать'},
       {'code': 'delegate', 'title': 'Делегировать'}];
    }
    if (actions) {
      this.respond.body = actions;
    } else {
      this.respond.body = {message: 'Ошибка'};
    }
    this.respond.status = 200;
  }

  async parseRequest () {
    this.request = (this.ctx.request && this.ctx.request.body) ? this.ctx.request.body : '';
  }

  async create () {
    await this.parseRequest();
    const user = await User.findOne({btxId: this.ctx.passport.user.Id});
    const category = await Category.findOne({'items.code': this.request.category.code});
    this.request.authorId = this.ctx.passport.user.Id;
    if (user) {
      this.request.author = user._id;
    }
    this.request.messages = 0;
    this.request.status = {
      code: 'wait',
      title: 'Ожидает исполнителя'
    };
    const request = new Request(this.request);
    const result = await request.save();
    if (category && category.items[0].approval) {
      let approvers = [];
      if (category.items[0].approval.manager) {
        if (user.managerId) {
          const manager = await User.findOne({btxId: user.managerId});
          approvers.push({
            comment: '',
            result: 0,
            user: manager.id,
            userId: user.managerId
          });
        }
      }
      let data = {
        approvers: approvers,
        request: result.id,
        requestId: result.requestId
      };
      const approval = new Approval(data);
      await approval.save();
    }
    if (result) {
      this.respond.status = 201;
      this.respond.body = {id: result.id};
    } else {
      this.respond.status = 200;
      this.respond.body = {message: 'Ошибка при добавлении заявки'};
    }
  }

  async fields () {
    const result = await this.model().fields(this.ctx.params.code);
    this.respond.status = 200;
    this.respond.body = result;
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
module.exports = Requests;
