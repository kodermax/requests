import {injectReducer} from '../../../../store/reducers';

export default (store) => ({
  path: 'trip/list',
  /* Вызывается компонет при совпаденния path с route list*/
  getComponent (nextState, cb) {
    /* Разделяем код с помощью webpack */
    require.ensure([], (require) => {
      const list = require('./containers/ListContainer').default;
      const reducer = require('./../../../../modules/items').default;

      // Добавляем редьюсер в хранилище с ключом requests
      injectReducer(store, {key: 'trip_list', reducer});
      cb(null, list);
    }, 'trip');
  },
});
