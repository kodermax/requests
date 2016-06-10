import { injectReducer } from '../../../store/reducers';

export default (store) => ({
  path: 'list',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const list = require('./containers/ListContainer').default;
      const reducer = require('./modules/list').default;

      injectReducer(store, { key: 'data', reducer });
      cb(null, list);
    }, 'list');
  }
});

