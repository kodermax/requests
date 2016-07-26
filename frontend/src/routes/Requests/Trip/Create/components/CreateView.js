import React, { Component, PropTypes } from 'react';
import Input from 'react-biz/lib/input';
import DatePicker from 'react-biz/lib/date_picker';
import { Button } from 'react-biz/lib/button';
import theme from './CreateView.scss';
import { Link } from 'react-router';

export default class CreateView extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  static propTypes = {
    addItem: PropTypes.func.isRequired,
    getFields: PropTypes.func.isRequired,
    fields: PropTypes.array.isRequired
  };

  constructor (props) {
    super(props);
    this.btnSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount () {
    if (this.props.fields.length === 0) {
      this.props.getFields('trip');
    } else {
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
    this.setState({fields: tmpFields, errors: tmpFields});
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.fields !== this.props.fields) {
      this.initFields(nextProps.fields);
    }
  }

  validateFields () {
    let errors = [];
    Object.keys(this.fields).map((key) => {
      if (this.fields[key].required && this.state.fields[key] === '') {
        errors[key] = 'Поле необходимо заполнить!';
      }
    });
    if (Object.keys(errors).length > 0) {
      this.setState({errors: errors});
      return false;
    }
    return true;
  }

  handleChangeField = (item, value) => {
    this.setState({fields: {...this.state.fields, [item]: value}});
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      category: {
        code: 'trip',
        title: 'Командировки'
      },
      fields: this.state.fields,
      title: 'Заявка на командировку'
    };
    if (this.validateFields()) {
      this.props.addItem(data).then(() => {
        this.context.router.push('/list');
      });
    }
  };

  render () {
    return (
      <div>
        {this.fields && this.fields.length !== 0 &&
          <div>
            <DatePicker onChange={this.changeField['startDate']} label={this.fields['startDate'].title}
              value={this.state.fields.startDate} error={this.state.errors.startDate}
            />
            <DatePicker onChange={this.changeField['endDate']} label={this.fields['endDate'].title}
              value={this.state.fields.endDate} error={this.state.errors.endDate}
            />
            <Input type='text' label={this.fields['country'].title} name='country' value={this.state.fields.country}
              onChange={this.changeField['country']} maxLength={16} error={this.state.errors.country}
            />
            <Input type='text' label={this.fields['city'].title} name='city' value={this.state.fields.city}
              onChange={this.changeField['city']} maxLength={50} error={this.state.errors.city}
            />
            <Input type='text' label={this.fields['company'].title} name='company' value={this.state.fields.company}
              onChange={this.changeField['company']} maxLength={100} error={this.state.errors.company}
            />
            <Input type='text' label={this.fields['target'].title} name='target' value={this.state.fields.target}
              onChange={this.changeField['target']} multiline error={this.state.errors.target}
            />
            <Input type='text' label={this.fields['tripTo'].title} name='tripTo' value={this.state.fields.tripTo}
              onChange={this.changeField['tripTo']} multiline error={this.state.errors.tripTo}
            />
            <Input type='text' label={this.fields['tripBack'].title} name='tripBack' value={this.state.fields.tripBack}
              onChange={this.changeField['tripBack']} multiline error={this.state.errors.tripBack}
            />
            <Input type='text' label={this.fields['daily'].title} name='daily' value={this.state.fields.daily}
              onChange={this.changeField['daily']} multiline error={this.state.errors.daily}
            />
            <Input type='text' label={this.fields['otherExpenses'].title} name='otherExpenses'
              value={this.state.fields.otherExpenses} onChange={this.changeField['otherExpenses']} multiline
            />
            <div className={theme.actions}>
              <Button label='Отправить' raised primary onMouseUp={this.btnSubmit} />
              <Link to="/trip/list">
                <Button label='Отменить' raised />
              </Link>
            </div>
          </div>}
      </div>
    );
  }
}
