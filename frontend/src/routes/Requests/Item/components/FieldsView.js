import React, {Component, PropTypes} from 'react';
import TripFields from '../../Trip/Fields/TripFields';

export default class FieldsView extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render () {
    const {data} = this.props;
    return (
      <div>
        {data.category.code === 'trip' ? <TripFields fields={data.fields} /> : undefined}
      </div>
    );
  }
}
