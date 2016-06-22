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
    this.getFields();
    this.btnCancel = this.handleCancel.bind(this);
    this.btnSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps (nextProps) {
    let fields = {};
    nextProps.fields.map((item) => {
      fields[item.code] = '';
      this.changeField[item.code] = this.handleChangeField.bind(this, item.code);
    });
    this.setState(fields);
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
    this.props.addItem(this.state);
  };

  render () {
    const { fields } = this.props;
    return (
      <div>
        {fields && fields.length !== 0 &&
          <div>
            <DatePicker onChange={this.changeField['tripDate']} label='Дата командировки' value={this.state.tripDate} />
            <Input type='text' label='Страна' name='country' value={this.state.country}
              onChange={this.changeField['country']} maxLength={16}
            />
            <Input type='text' label='Город' name='city' value={this.state.city}
              onChange={this.changeField['city']} maxLength={50}
            />
            <Input type='text' label='Организация' name='company' value={this.state.company}
              onChange={this.changeField['company']} maxLength={100}
            />
            <Input type='text' label='Цель' name='target' value={this.state.target}
              onChange={this.changeField['target']} multiline
            />
            <Input type='text' label='Проезд Туда' name='tripTo' value={this.state.tripThere}
              onChange={this.changeField['tripTo']} multiline
            />
            <Input type='text' label='Проезд Обратно' name='tripBack' value={this.state.tripBack}
              onChange={this.changeField['tripBack']} multiline
            />
            <Input type='text' label='Суточные' name='daily' value={this.state.daily}
              onChange={this.changeField['daily']} multiline
            />
            <Input type='text' label='Прочие расходы' name='otherExpenses' value={this.state.otherExpenses}
              onChange={this.changeField['otherExpenses']} multiline
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
