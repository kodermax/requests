import React, {Component, PropTypes} from 'react';
import {hideNotification} from '../../store/notification';
import {connect} from 'react-redux';
import Snackbar from 'react-biz/lib/snackbar';
import Header from '../../components/Header/Header';
import classes from './CoreLayout.scss';
import '../../styles/core.scss';

class CoreLayout extends Component {
  static defaultProps = {
    notification: false,
    notificationMessage: '',
  };
  static propTypes = {
    children: PropTypes.element.isRequired,
    hideNotification: PropTypes.func,
    notification: PropTypes.bool,
    notificationMessage: PropTypes.string,
  };

  constructor (props) {
    super();
    this.snackbarTimeout = this.handleSnackbarTimeout.bind(this);
  }

  handleSnackbarTimeout = (event, instance) => {
    this.props.hideNotification();
  };

  render () {
    const {children, notification, notificationMessage} = this.props;
    return (
      <div className="">
        <Header />
        <div className={classes.mainContainer}>
          {children}
        </div>
        <Snackbar
          action="Закрыть"
          active={notification}
          icon="done"
          label={notificationMessage}
          timeout={3000}
          onTimeout={this.snackbarTimeout}
          type="accept"
        />
      </div>
    );
  }
}
const mapActionCreators = {
  hideNotification,
};
const mapStateToProps = (state) => ({
  notification: state.notification.active,
  notificationMessage: state.notification.message,
});

export default connect(mapStateToProps, mapActionCreators)(CoreLayout);
