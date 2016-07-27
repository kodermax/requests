import {connect} from 'react-redux';
import {addItem} from '../../../../../modules/add';
import {getFields} from '../../../../../modules/fields';
import CreateView from '../components/CreateView';

const mapActionCreators = {
  addItem,
  getFields
};

const mapStateToProps = (state) => ({
  fields: state.fields.data
});

export default connect(mapStateToProps, mapActionCreators)(CreateView);
