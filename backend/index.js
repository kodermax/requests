import Koa from 'koa';
import middleware from './middleware';
import api from './api';
import { development } from './db/config';
import { connectDatabase } from './db';

const app = new Koa();
app.use(middleware());
app.use(api());
app.use(ctx => { ctx.status = 404; });
(async() => {
  const conn = await connectDatabase(development);
  app.context.db = conn;
  console.log(`Connected to database ${conn.host}:${conn.port}`);
  await app.listen(3000);
  console.log('Server started on port 3000');
})();

