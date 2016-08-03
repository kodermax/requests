import {connect} from 'react-redux';
import {addMessage} from '../modules/add_message';
import {fetchItem} from '../modules/item';
import {fetchMessages} from '../modules/messages';
import ItemView from '../components/ItemView';

/*  Object of action creators (can also be function that returns object).
 Keys will be passed as props to presentational components. Here we are
 implementing our wrapper around increment; the component doesn't care   */

const mapActionCreators = {
  addMessage,
  fetchItem,
  fetchMessages
};

const mapStateToProps = (state) => ({
  data: state.item,
  messages: state.messages
});

export default connect(mapStateToProps, mapActionCreators)(ItemView);
