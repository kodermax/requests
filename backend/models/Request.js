const r = require('rethinkdb');

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
}

module.exports = Request;
