const chain = require('../../helpers').chain;
const UsersController = require('../../controllers/users');

export default (router) => {
  router.get('/users/:id', async(ctx, next) => {
    await chain(new UsersController(ctx, next), ['get', 'response']);
  });
};
