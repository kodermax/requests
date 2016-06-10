import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path: 'counter',
  /*  Async getComponent вызывается только когда совпал route   */
  getComponent (nextState, cb) {
    /*
      Разделяем код с помощью 'require.ensure'
    */
    require.ensure([], (require) => {
      const Counter = require('./containers/CounterContainer').default;
      const reducer = require('./modules/counter').default;

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'counter', reducer });

      /*  Return getComponent   */
      cb(null, Counter);

    /* Webpack named bundle   */
    }, 'counter');
  }
});
