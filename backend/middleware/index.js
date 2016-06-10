import compose from 'koa-compose';
import logger from 'koa-logger';
import convert from 'koa-convert';
import cors from 'koa-cors';
import bodyParser from 'koa-bodyparser';

export default () => compose([
  logger(),
  convert(cors()),
  bodyParser({
    extendTypes: {
      json: ['application/json'],
    },
  }),
]);
