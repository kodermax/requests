const r = require('rethinkdb');

export async function connectDatabase(config) {
  try {
    return await r.connect(config);
  } catch (err) {
    console.log('Connect database error');
    throw err;
  }
}
