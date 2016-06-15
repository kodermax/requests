// import { injectReducer } from '../../../store/reducers';

export default () => ({
  path: 'create/trip',
  /* Вызывается компонет при совпаденния path с route */
  getComponent (nextState, cb) {
    /* Разделяем код с помощью webpack */
    require.ensure([], (require) => {
      const trip = require('./components/TripView').default;
     // const reducer = require('./modules/list').default;

      // Добавляем редьюсер в зранилище с ключом requests
     // injectReducer(store, { key: 'requests', reducer });
      cb(null, trip);
    }, 'trip');
  }
});

