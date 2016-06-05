import Koa from 'koa';
import Router from 'koa-router';
const app = new Koa();
const router = new Router();

router.get('/get', function (ctx) {
  ctx.body = 'Hello';
});
app.use(router.routes());
app.listen(3001);
