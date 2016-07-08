import React, { Component, PropTypes } from 'react';
import Input from 'react-biz/lib/input';
import DatePicker from 'react-biz/lib/date_picker';
import { Button } from 'react-biz/lib/button';
import { push } from 'react-router-redux';
import theme from './CreateView.scss';

export default class CreateView extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };
  static propTypes = {
    addItem: PropTypes.func.isRequired,
    getFields: PropTypes.func.isRequired,
    fields: PropTypes.array.isRequired
  };
  constructor (props) {
    super(props);
    this.btnCancel = this.handleCancel.bind(this);
    this.btnSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    if (this.props.fields.length === 0) {
      this.props.getFields('trip');
    }
    else {
      this.initFields(this.props.fields);
    }
  }
  initFields (fields) {
    let tmpFields = {};
    this.fields = {};
    this.changeField = {};
    fields.map((item) => {
      tmpFields[item.code] = '';
      this.changeField[item.code] = this.handleChangeField.bind(this, item.code);
      this.fields[item.code] = item;
    });
    this.setState({fields: tmpFields});

  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.fields !== this.props.fields) {
     this.initFields(nextProps.fields);
    }
  }
  handleChangeField = (item, value) => {
    this.setState({fields: {...this.state.fields, [item]: value }});
  };
  handleCancel = (e) => {
    e.preventDefault();
    this.context.router.push('/');
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      category: {
        code: 'trip',
        title: 'Командировки',
      },
      fields: this.state.fields,
      title: 'Заявка на командировку'
    };
    this.props.addItem(data);
    this.context.router.push('/list');
  };

  render () {
    return (
      <div>
        {this.fields && this.fields.length !== 0 &&
          <div>
            <DatePicker onChange={this.changeField['startDate']} label={this.fields['startDate'].title}
              value={this.state.fields.startDate}
            />
            <DatePicker onChange={this.changeField['endDate']} label={this.fields['endDate'].title}
              value={this.state.fields.endDate}
            />
            <Input type='text' label={this.fields['country'].title} name='country' value={this.state.fields.country}
              onChange={this.changeField['country']} maxLength={16}
            />
            <Input type='text' label={this.fields['city'].title} name='city' value={this.state.fields.city}
              onChange={this.changeField['city']} maxLength={50}
            />
            <Input type='text' label={this.fields['company'].title} name='company' value={this.state.fields.company}
              onChange={this.changeField['company']} maxLength={100}
            />
            <Input type='text' label={this.fields['target'].title} name='target' value={this.state.fields.target}
              onChange={this.changeField['target']} multiline
            />
            <Input type='text' label={this.fields['tripTo'].title} name='tripTo' value={this.state.fields.tripTo}
              onChange={this.changeField['tripTo']} multiline
            />
            <Input type='text' label={this.fields['tripBack'].title} name='tripBack' value={this.state.fields.tripBack}
              onChange={this.changeField['tripBack']} multiline
            />
            <Input type='text' label={this.fields['daily'].title} name='daily' value={this.state.fields.daily}
              onChange={this.changeField['daily']} multiline
            />
            <Input type='text' label={this.fields['otherExpenses'].title} name='otherExpenses'
              value={this.state.fields.otherExpenses} onChange={this.changeField['otherExpenses']} multiline
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
