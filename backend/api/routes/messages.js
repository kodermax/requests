const chain = require('../../helpers').chain;
const MessagesController = require('../../controllers/messages');

export default (router) => {
  router.get('/requests/:id/messages', async(ctx, next) => {
    await chain(new MessagesController(ctx, next), ['all', 'response']);
  });
  router.post('/requests/:id/message', async(ctx, next) => {
    await chain(new MessagesController(ctx, next), ['create', 'response']);
  });
};
