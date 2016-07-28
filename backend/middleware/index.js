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
      json: ['application/json']
    }
  }),
  jwtValidate({secret: 'tjqMsP0jo2I7B139vdTMZi324g33tab1', jwtOpts: {algorithms: ['HS256']}})
]);
