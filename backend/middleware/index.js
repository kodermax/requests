import compose from 'koa-compose';
import logger from 'koa-logger';
import convert from 'koa-convert';
import cors from 'koa-cors';
import bodyParser from 'koa-bodyparser';
import jwtValidate from './jwt';

export default () => compose([
  logger(),
  convert(cors()),
  bodyParser({
    extendTypes: {
      json: ['application/json'],
    },
  }),
  jwtValidate({ secret: 'FNipuDZhwdnkBK9AzpJKi0TGbXmMWk01', jwtOpts: { algorithms:['HS512'] } }),
]);
