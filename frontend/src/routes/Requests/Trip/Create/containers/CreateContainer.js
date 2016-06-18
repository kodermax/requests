import { connect } from 'react-redux';
import { addItem } from '../../../../../modules/add';
import CreateView from '../components/CreateView';

const mapActionCreators = {
  addItem
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapActionCreators)(CreateView);
