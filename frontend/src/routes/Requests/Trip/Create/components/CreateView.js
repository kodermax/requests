import React, {Component, PropTypes} from 'react';
import Input from 'react-biz/lib/input';
import DatePicker from 'react-biz/lib/date_picker';
import {Button} from 'react-biz/lib/button';
import theme from './CreateView.scss';
import {Link} from 'react-router';
import SelectUser from '../../../../../components/SelectUser';

export default class CreateView extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };
  static propTypes = {
    addItem: PropTypes.func.isRequired,
    fields: PropTypes.array,
    getFields: PropTypes.func.isRequired,
  };

  constructor (props) {
    super(props);
    this.changeField = {};
    this.state = {
      author: '',
      helpFields: {},
    };
    this.changeUsers = this.handleUsersChange.bind(this);
    this.btnSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount () {
    if (this.props.fields && this.props.fields.length === 0) {
      this.props.getFields('trip');
    } else {
      this.initFields(this.props.fields);
    }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.fields && nextProps.fields.length > 0 && nextProps.fields !== this.props.fields) {
      this.initFields(nextProps.fields);
    }
  }
  initFields (fields) {
    let tmpFields = {};
    let helpFields = {};
    fields.map((item) => {
      tmpFields[item.code] = '';
      this.changeField[item.code] = this.handleChangeField.bind(this, item.code);
      helpFields[item.code] = item;
    });
    this.setState({fields: tmpFields, helpFields: helpFields, errors: tmpFields});
  }
  validateFields () {
    let errors = [];
    Object.keys(this.state.helpFields).map((key) => {
      if (this.state.helpFields[key].required && this.state.fields[key] === '') {
        errors[key] = 'Поле необходимо заполнить!';
      }
    });
    if (Object.keys(errors).length > 0) {
      this.setState({errors: errors});
      return false;
    }
    return true;
  }
  handleUsersChange = (value) => {
    console.log(value);
  };
  handleChangeField = (item, value) => {
    this.setState({fields: {...this.state.fields, [item]: value}});
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      category: {
        code: 'trip',
        title: 'Командировки',
      },
      fields: this.state.fields,
      title: 'Заявка на командировку',
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
        {this.state.helpFields && Object.keys(this.state.helpFields).length !== 0 &&
          <div>
            <SelectUser label={this.state.helpFields.forUsers.title} onChange={this.changeUsers}
              value={this.state.fields.forUsers}
            />
            <DatePicker onChange={this.changeField.startDate} label={this.state.helpFields.startDate.title}
              value={this.state.fields.startDate} error={this.state.errors.startDate}
            />
            <DatePicker onChange={this.changeField.endDate} label={this.state.helpFields.endDate.title}
              value={this.state.fields.endDate} error={this.state.errors.endDate}
            />
            <Input type="text" label={this.state.helpFields.country.title} name="country"
              value={this.state.fields.country}
              onChange={this.changeField.country} maxLength={16} error={this.state.errors.country}
            />
            <Input type="text" label={this.state.helpFields.city.title} name="city" value={this.state.fields.city}
              onChange={this.changeField.city} maxLength={50} error={this.state.errors.city}
            />
            <Input type="text" label={this.state.helpFields.company.title} name="company"
              value={this.state.fields.company}
              onChange={this.changeField.company} maxLength={100} error={this.state.errors.company}
            />
            <Input type="text" label={this.state.helpFields.target.title} name="target" value={this.state.fields.target}
              onChange={this.changeField.target} multiline={true} error={this.state.errors.target}
            />
            <Input type="text" label={this.state.helpFields.tripTo.title} name="tripTo" value={this.state.fields.tripTo}
              onChange={this.changeField.tripTo} multiline={true} error={this.state.errors.tripTo}
            />
            <Input type="text" label={this.state.helpFields.tripBack.title} name="tripBack"
              value={this.state.fields.tripBack}
              onChange={this.changeField.tripBack} multiline={true} error={this.state.errors.tripBack}
            />
            <Input type="text" label={this.state.helpFields.daily.title} name="daily" value={this.state.fields.daily}
              onChange={this.changeField.daily} multiline={true} error={this.state.errors.daily}
            />
            <Input type="text" label={this.state.helpFields.otherExpenses.title} name="otherExpenses"
              value={this.state.fields.otherExpenses} onChange={this.changeField.otherExpenses} multiline={true}
            />
            <div className={theme.actions}>
              <Button label="Отправить" raised={true} primary={true} onMouseUp={this.btnSubmit} />
              <Link to="/requests/trip/list">
                <Button label="Отменить" raised={true} />
              </Link>
            </div>
          </div>}
      </div>
    );
  }
}
