const chain = require('../../helpers').chain;
const RequestsController = require('../../controllers/requests');

export default (router) => {
  router.get('/requests', async(ctx, next) => {
    await chain(new RequestsController(ctx, next), ['all', 'response']);
  });
};
