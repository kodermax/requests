import React, {Component, PropTypes} from 'react';
import {Card, CardTitle, CardText} from 'react-biz/lib/card';
import FieldsView from './FieldsView';

export default class ListView extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    fetchItem: PropTypes.func.isRequired,
    params: PropTypes.object
  };

  constructor (props) {
    super(props);
    this.id = this.props.params.id;
  }
  componentDidMount = () => {
    this.props.fetchItem(this.props.params.id);
  };

  render () {
    const {item} = this.props.data;
    if (item) {
      const title = `№${item.requestId} ${item.title}`;
      return (
        <div>
          {item ? <div>
            <Card>
              <CardTitle title={title} />
              <CardText>
                <FieldsView data={item} />
              </CardText>
            </Card>
          </div>
            : undefined}
        </div>
      );
    }
    else {
      return (
        <div></div>
      )
    }

  }
}
