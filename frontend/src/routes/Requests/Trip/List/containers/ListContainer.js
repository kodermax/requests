import {connect} from 'react-redux';
import {fetchItems} from '../../../../../modules/items';
import ListView from '../components/ListView';

/*  Object of action creators (can also be function that returns object).
 Keys will be passed as props to presentational components. Here we are
 implementing our wrapper around increment; the component doesn't care   */

const mapActionCreators = {
  fetchItems
};

const mapStateToProps = (state) => ({
  data: state.trip_list
});

export default connect(mapStateToProps, mapActionCreators)(ListView);
