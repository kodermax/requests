import mongoose from 'mongoose';

class Request {
  constructor(db) {
    this.db = db || null;
    this.request = {};
  }

  async all() {
    return await r.table('requests').run(this.db)
      .then(cursor => cursor.toArray())
      .then(result => JSON.stringify(result));
  }

  async create(request) {
    request.created = new Date().toJSON();
    request.changed = new Date().toJSON();
    return await r.table('requests').insert(request, { returnChanges: true }).run(this.db);
  }

  async fields(code) {
    const result = await r.table('requests_cats').filter(r.row('items').contains((item) => {
      return item('code').eq(code);
    })).pluck(
      {
        items:
        {
          fields: true,
        },
      })
      .run(this.db)
      .then(cursor => cursor.toArray());
    return result[0].items[0].fields;
  }
}

module.exports = Request;
