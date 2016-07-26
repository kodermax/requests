const chain = require('../../helpers').chain;
const UsersController = require('../../controllers/users');

export default (router) => {
  router.get('/users', async(ctx, next) => {
    await chain(new UsersController(ctx, next), ['all', 'response']);
  });
  router.get('/users/:id', async(ctx, next) => {
    await chain(new UsersController(ctx, next), ['get', 'response']);
  });
};
