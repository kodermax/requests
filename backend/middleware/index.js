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
  jwtValidate({ secret: 'PWo94z6ohCpueJYpB03oW9z1H8KnXBgA', jwtOpts: { algorithms: ['HS256'] } }),
]);
