import Koa from 'koa';
// Middleware and helpers
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

// Import rethinkdb
import r from 'rethinkdb';

// Load config for RethinkDB and koa
var config = {
  'rethinkdb': {
    'host': 'localhost',
    'port': 28015,
    'authKey': '',
    'db': 'test'
  },
  'koa': {
    'port': 3000
  }
};

const app = new Koa();
const router = new Router();
app.use(bodyParser());

// Create a RethinkDB connection
app.use(async (ctx, next) => {
  ctx.db = await r.connect(config.rethinkdb);
  return next();
});
router.get('/get', async (ctx, next) => {
  ctx.body = await r.table('tv_shows').run(ctx.db).then(function (cursor) {
    return cursor.toArray();
  }).then(function (result) {
    return JSON.stringify(result);
  });
  return next();
});
app.use(router.routes());
// Close the RethinkDB connection
app.use(async (ctx, next) => {
  await ctx.db.close();
  return next();
});

app.listen(config.koa.port);
console.log('Listening on port ' + config.koa.port);

