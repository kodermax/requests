import React, {Component, PropTypes} from 'react';
import {Card, CardTitle, CardText} from 'react-biz/lib/card';
import FieldsView from './FieldsView';
import RichEditor from '../../../../components/RichEditor/RichEditor';
import theme from './ItemView.scss';

export default class ListView extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    fetchItem: PropTypes.func.isRequired,
    params: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.id = this.props.params.id;
  }

  componentDidMount = () => {
    this.props.fetchItem(this.props.params.id);
  };

  render() {
    const {item} = this.props.data;
    if (item) {
      const title = `№${item.requestId} ${item.title}`;
      return (
        <div className={theme.itemContent}>
          {item ? <div>
            <Card>
              <CardTitle title={title} />
              <CardText theme={theme}>
                <FieldsView data={item} />
                <h6>
                  <span>Обсуждение</span>
                </h6>
                <RichEditor />
              </CardText>
            </Card>
          </div>
            : undefined}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}
