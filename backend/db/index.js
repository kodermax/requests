const mongoose = require('mongoose');

export async function connectDatabase() {
  try {
    mongoose.connect('mongodb://localhost/portal');
    mongoose.connection.on('error', console.error);
    mongoose.connection.on('connected', () =>
      console.log('mongo connection open')
    );
    return mongoose.connection;
  } catch (err) {
    console.log('Connect database error');
    throw err;
  }
}
