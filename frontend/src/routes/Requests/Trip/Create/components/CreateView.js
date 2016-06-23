import React, { Component, PropTypes } from 'react';
import Input from 'react-biz/lib/input';
import DatePicker from 'react-biz/lib/date_picker';
import { Button } from 'react-biz/lib/button';
import theme from './CreateView.scss';

export default class CreateView extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  static propTypes = {
    addItem: PropTypes.func.isRequired,
    getFields: PropTypes.func.isRequired,
    fields: PropTypes.array.isRequired
  };
  constructor (props) {
    super(props);
    this.changeField = {};
    this.fields = {};
    this.getFields();
    this.btnCancel = this.handleCancel.bind(this);
    this.btnSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps (nextProps) {
    let tmpFields = {};
    nextProps.fields.map((item) => {
      tmpFields[item.code] = '';
      this.changeField[item.code] = this.handleChangeField.bind(this, item.code);
      this.fields[item.code] = item;
    });
    this.setState(tmpFields);
  }
  getFields = () => {
    this.props.getFields('trip');
  };
  handleChangeField = (item, value) => {
    this.setState({ ...this.state, [item]: value });
  };
  handleCancel = (e) => {
    e.preventDefault();
    this.context.router.push('/');
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      fields: this.state,
      title: 'Заявка на командировку'
    };
    this.props.addItem(data);
  };

  render () {
    const { fields } = this.props;
    return (
      <div>
        {fields && fields.length !== 0 &&
          <div>
            <DatePicker onChange={this.changeField['tripDate']} label={this.fields['tripDate'].title}
              value={this.state.tripDate}
            />
            <Input type='text' label={this.fields['country'].title} name='country' value={this.state.country}
              onChange={this.changeField['country']} maxLength={16}
            />
            <Input type='text' label={this.fields['city'].title} name='city' value={this.state.city}
              onChange={this.changeField['city']} maxLength={50}
            />
            <Input type='text' label={this.fields['company'].title} name='company' value={this.state.company}
              onChange={this.changeField['company']} maxLength={100}
            />
            <Input type='text' label={this.fields['target'].title} name='target' value={this.state.target}
              onChange={this.changeField['target']} multiline
            />
            <Input type='text' label={this.fields['tripTo'].title} name='tripTo' value={this.state.tripTo}
              onChange={this.changeField['tripTo']} multiline
            />
            <Input type='text' label={this.fields['tripBack'].title} name='tripBack' value={this.state.tripBack}
              onChange={this.changeField['tripBack']} multiline
            />
            <Input type='text' label={this.fields['daily'].title} name='daily' value={this.state.daily}
              onChange={this.changeField['daily']} multiline
            />
            <Input type='text' label={this.fields['otherExpenses'].title} name='otherExpenses'
              value={this.state.otherExpenses} onChange={this.changeField['otherExpenses']} multiline
            />
            <div className={theme.actions}>
              <Button label='Отправить' raised primary onMouseUp={this.btnSubmit} />
              <Button label='Отменить' raised onMouseUp={this.btnCancel} />
            </div>
          </div>}
      </div>
    );
  }
}
