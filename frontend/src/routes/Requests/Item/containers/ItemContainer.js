import {connect} from 'react-redux';
import {fetchItem} from '../modules/item';
import ItemView from '../components/ItemView';

/*  Object of action creators (can also be function that returns object).
 Keys will be passed as props to presentational components. Here we are
 implementing our wrapper around increment; the component doesn't care   */

const mapActionCreators = {
  fetchItem
};

const mapStateToProps = (state) => ({
  data: state.item
});

export default connect(mapStateToProps, mapActionCreators)(ItemView);
