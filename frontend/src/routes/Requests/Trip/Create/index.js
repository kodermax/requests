import { injectReducer } from '../../../../store/reducers';

export default (store) => ({
  path: 'trip/new',
  /* Вызывается компонет при совпаденния path с route */
  getComponent (nextState, cb) {
    /* Разделяем код с помощью webpack */
    require.ensure([], (require) => {
      const trip = require('./containers/CreateContainer').default;
      const reducer = require('../../../../modules/add').default;

      // Добавляем редьюсер в зранилище с ключом requests
      injectReducer(store, { key: 'trip', reducer });
      cb(null, trip);
    }, 'trip');
  }
});

