const chain = require('../../helpers').chain;
const RequestsController = require('../../controllers/requests');

export default (router) => {
  router.get('/requests', async(ctx, next) => {
    await chain(new RequestsController(ctx, next), ['all', 'response']);
  });
  router.get('/requests/:id', async(ctx, next) => {
    await chain(new RequestsController(ctx, next), ['get', 'response']);
  });
  router.get('/requests/:id/actions', async(ctx, next) => {
    await chain(new RequestsController(ctx, next), ['getActions', 'response']);
  });
  router.post('/requests', async(ctx, next) => {
    await chain(new RequestsController(ctx, next), ['create', 'response']);
  });
  router.get('/requests/categories/:code/fields', async(ctx, next) => {
    await chain(new RequestsController(ctx, next), ['fields', 'response']);
  });
};
