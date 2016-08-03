import {connect} from 'react-redux';
import {addMessage} from '../modules/add_message';
import {fetchItem} from '../modules/item';
import {fetchItemActions} from '../modules/item_actions';
import {fetchMessages} from '../modules/messages';
import ItemView from '../components/ItemView';

const mapActionCreators = {
  addMessage,
  fetchItem,
  fetchItemActions,
  fetchMessages
};

const mapStateToProps = (state) => ({
  actions: state.actions.data,
  item: state.item.data,
  messages: state.messages.data
});

export default connect(mapStateToProps, mapActionCreators)(ItemView);
