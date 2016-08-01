import {injectReducer} from '../../../store/reducers';

export default (store) => ({
  path: 'item/:id',
  /* Вызывается компонет при совпаденния path с route list*/
  getComponent(nextState, cb) {
    /* Разделяем код с помощью webpack */
    require.ensure([], (require) => {
      const item = require('./containers/ItemContainer').default;
      const reducer = require('./modules/item').default;
      const messagesReducer = require('./modules/messages').default;

      // Добавляем редьюсер в хранилище с ключом item
      injectReducer(store, {key: 'item', reducer});
      injectReducer(store, {key: 'messages', messagesReducer});
      cb(null, item);
    }, 'item');
  }
});
