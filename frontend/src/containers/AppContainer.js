import React, {PropTypes} from 'react';
import {Router} from 'react-router';
import {Provider} from 'react-redux';

class AppContainer extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routerKey: PropTypes.number,
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  };

  render () {
    const {history, routes, routerKey, store} = this.props;
    return (
      <Provider store={store}>
        <div style={{height: '100%'}}>
          <Router history={history} children={routes} key={routerKey} />
        </div>
      </Provider>
    );
  }
}

export default AppContainer;
