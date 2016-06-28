const chain = require('../../helpers').chain;
const CategoriesController = require('../../controllers/categories');

export default (router) => {
  router.get('/requests/categories/:code/fields', async(ctx, next) => {
    await chain(new CategoriesController(ctx, next), ['getFields', 'response']);
  });
};
