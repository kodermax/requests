import { injectReducer } from '../../../../store/reducers';

export default (store) => ({
  path: 'trip/new',
  /* Вызывается компонет при совпаденния path с route */
  getComponent(nextState, cb) {
    /* Разделяем код с помощью webpack */
    require.ensure([], (require) => {
      const trip = require('./containers/CreateContainer').default;
      const reducerAdd = require('../../../../modules/add').default;
      const reducerFields = require('../../../../modules/fields').default;

      // Добавляем редьюсер в зранилище с ключом requests
      injectReducer(store, { key: 'trip', reducer: reducerAdd });
      injectReducer(store, { key: 'fields', reducer: reducerFields });
      cb(null, trip);
    }, 'trip');
  }
});

