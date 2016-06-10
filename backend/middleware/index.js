import compose from 'koa-compose';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';

export default () => compose([
  logger(),
  bodyParser({
    extendTypes: {
      json: ['application/json'],
    },
  }),
]);
