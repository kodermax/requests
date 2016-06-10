const Koa = require('koa');
// Middleware and helpers
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const requests = require('./controllers/requests');
// Import rethinkdb
const r = require('rethinkdb');

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
app.use(bodyParser({
  extendTypes: {
    json: ['application/json'] // will parse application/x-javascript type body as a JSON string
  }
}));

// Create a RethinkDB connection
app.use(async(ctx, next) => {
  ctx.db = await r.connect(config.rethinkdb);
  return next();
});
router.get('/requests/', requests.all);
app.use(router.routes());
// Close the RethinkDB connection
app.use(async (ctx, next) => {
  await ctx.db.close();
  return next();
});

app.listen(config.koa.port);
console.log('Listening on port ' + config.koa.port);

