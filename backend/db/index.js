import mongoose from 'mongoose';

export async function connectDatabase () {
  try {
    mongoose.connect('mongodb://localhost/portal');
    mongoose.connection.on('error', console.error);
    mongoose.connection.on('connected', () =>
      console.log('mongodb connection open')
    );
    return mongoose.connection;
  } catch (err) {
    console.log('Connect database error');
    throw err;
  }
}
